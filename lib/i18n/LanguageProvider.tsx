'use client';

import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { dictionaries, type Dict, type Locale } from './dictionary';

type LanguageContextValue = {
  locale: Locale;
  /** Caminho equivalente à rota atual no outro idioma — usado pelo LangToggle */
  hrefFor: (target: Locale) => string;
  /** Prefixa um caminho interno com o idioma corrente (`/x/` → `/en/x/`) */
  localeHref: (path: string) => string;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/** `/en/portfolio/x/` → `/portfolio/x/`; a raiz PT já é o caminho nu. */
function stripLocale(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname || '/';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';

  /**
   * A rota é a única autoridade sobre o idioma: `/en/...` é inglês, todo o
   * resto é português.
   *
   * Antes o idioma vinha do localStorage e do `navigator.language`, o que
   * criava dois problemas: o Google só via a versão PT (não havia URL para a
   * EN), e a mesma URL podia servir conteúdos diferentes — inclusive para o
   * crawler, que rastreia com `Accept-Language: en-US`. Duas URLs servindo o
   * mesmo idioma anulam o `hreflang`. Com a rota mandando, URL, conteúdo,
   * canonical e hreflang sempre concordam, e o toggle é navegação de verdade.
   */
  const locale: Locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt';

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const bare = stripLocale(pathname);
    return {
      locale,
      hrefFor: (target: Locale) => {
        if (target === 'en') return bare === '/' ? '/en/' : `/en${bare}`;
        return bare;
      },
      localeHref: (path: string) => {
        if (locale !== 'en') return path;
        if (path.startsWith('#')) return path;
        // preserva a âncora: `/#portfolio` → `/en/#portfolio`
        return path === '/' ? '/en/' : `/en${path}`;
      },
      t: dictionaries[locale],
    };
  }, [locale, pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}

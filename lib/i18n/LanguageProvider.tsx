'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { dictionaries, DEFAULT_LOCALE, LOCALES, type Dict, type Locale } from './dictionary';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  t: Dict;
};

const STORAGE_KEY = 'strategile.locale';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as string[]).includes(value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) {
        setLocaleState(stored);
      } else if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language?.toLowerCase() ?? '';
        if (browserLang.startsWith('en')) setLocaleState('en');
      }
    } catch {
      /* ignore */
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    }
  }, [locale, hydrated]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggle = () => setLocaleState((l) => (l === 'pt' ? 'en' : 'pt'));

  const value: LanguageContextValue = {
    locale,
    setLocale,
    toggle,
    t: dictionaries[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}

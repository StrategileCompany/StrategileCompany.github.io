import { products } from './products';
import type { Locale } from './i18n/dictionary';

/**
 * Host canônico. O apex faz 301 para o www — todo link absoluto (canonical,
 * og:url, sitemap) precisa apontar para o destino final, não para o redirect.
 */
export const SITE_URL = 'https://www.strategilecompany.com.br';

export const CONTACT_EMAIL = 'strategilesoftware@gmail.com';
export const CONTACT_WHATSAPP = '5522997552969';

/** Caminho de uma rota em cada idioma. O PT vive na raiz; o EN sob /en. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}/`;
  return locale === 'en' ? `/en${clean === '/' ? '/' : clean}` : clean;
}

export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path}`;
}

/** Rotas do site nas duas línguas — fonte única para sitemap e hreflang. */
export function allRoutes(): { pt: string; en: string }[] {
  const base = ['/', '/portfolio/', ...products.map((p) => `/portfolio/${p.slug}/`)];
  return base.map((path) => ({ pt: localePath('pt', path), en: localePath('en', path) }));
}

/**
 * Bloco `alternates` do metadata do Next: canonical na própria rota e
 * hreflang para o par PT/EN, para o Google indexar as duas versões.
 */
export function alternatesFor(locale: Locale, path = '/') {
  return {
    canonical: absoluteUrl(localePath(locale, path)),
    languages: {
      'pt-BR': absoluteUrl(localePath('pt', path)),
      en: absoluteUrl(localePath('en', path)),
      'x-default': absoluteUrl(localePath('pt', path)),
    },
  };
}

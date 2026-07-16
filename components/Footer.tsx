'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { products } from '@/lib/products';
import Link from 'next/link';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-bone-100/8 bg-ink-950 px-6 py-16 sm:px-10">
      <div className="container-editorial">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-display text-h3 text-bone-50">
              Strategile <span className="font-normal text-bone-200/70">Company</span>
              <span className="text-gold-300">.</span>
            </div>
            <p className="mt-3 max-w-[32ch] text-caption text-bone-200/50">{t.footer.tagline}</p>
            <a
              href={`mailto:${t.cta.email}`}
              className="mt-4 inline-block font-mono text-caption text-bone-200/60 transition-colors hover:text-gold-200"
            >
              {t.cta.email}
            </a>
          </div>

          <nav aria-label={t.nav.portfolio} className="grid grid-cols-2 gap-x-12 gap-y-2.5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}/`}
                className="text-caption text-bone-200/55 transition-colors duration-200 hover:text-bone-50"
              >
                {p.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-bone-100/8 pt-6">
          <span className="font-mono text-micro uppercase tracking-[0.2em] text-bone-200/35">
            © {new Date().getFullYear()} Strategile Company
          </span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono text-micro uppercase tracking-[0.2em] text-bone-200/45 transition-colors hover:text-gold-200"
          >
            {t.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const social = [
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Instagram', href: '#' },
  ];

  return (
    <footer className="relative z-10 border-t border-bone-100/[0.08] bg-ink-950 mt-32">
      <div className="container-editorial py-16 lg:py-24">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="font-display text-display leading-none tracking-tight text-bone-50 inline-flex items-baseline"
            >
              Strategile<span className="text-gold-300">.</span>
            </Link>
            <p className="mt-6 max-w-md text-body text-bone-200/70 leading-relaxed">
              {t.meta.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow uppercase text-bone-200/50 mb-4">
              {t.footer.address.label}
            </h3>
            <address className="not-italic text-caption text-bone-200/80 space-y-1">
              {t.footer.address.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow uppercase text-bone-200/50 mb-4">{t.nav.portfolio}</h3>
            <ul className="space-y-2 text-caption">
              <li>
                <Link
                  href="/portfolio"
                  className="text-bone-200/80 hover:text-gold-300 transition-colors duration-200"
                >
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-bone-200/80 hover:text-gold-300 transition-colors duration-200"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-bone-200/80 hover:text-gold-300 transition-colors duration-200"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow uppercase text-bone-200/50 mb-4">{t.footer.social.label}</h3>
            <ul className="space-y-2 text-caption">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-bone-200/80 hover:text-gold-300 transition-colors duration-200"
                  >
                    {s.name}
                    <span
                      aria-hidden
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone-100/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-caption text-bone-200/50">
          <span>
            © {year} {t.footer.copyright}
          </span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}

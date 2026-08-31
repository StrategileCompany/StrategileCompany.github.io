'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { AppIcon } from '@/components/icons/AppIcon';

const EASE = [0.16, 1, 0.3, 1] as const;

export function PortfolioIndex() {
  const { t, locale, localeHref } = useLanguage();

  return (
    <section className="relative min-h-screen bg-ink-950 px-6 pb-28 pt-36 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-eyebrow uppercase tracking-[0.3em] text-gold-200/70">
          {t.homescreen.kicker}
        </p>
        <h1 className="mt-4 font-display font-light text-h1 text-bone-50">{t.homescreen.title}</h1>
        <p className="mt-4 text-body text-bone-200/65">{t.homescreen.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-12 justify-items-center sm:grid-cols-3 lg:grid-cols-5">
        {products.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: EASE }}
          >
            <Link href={localeHref(`/portfolio/${p.slug}/`)} className="group block text-center" aria-label={p.name}>
              <AppIcon
                slug={p.slug}
                size={88}
                className="drop-shadow-[0_14px_26px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-spring group-hover:scale-110"
              />
              <div className="mt-3 text-caption text-bone-100/85">{p.name}</div>
              <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-bone-200/40">
                {p.category[locale]}
              </div>
              <div className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-bone-200/45">
                <span
                  aria-hidden
                  className={`h-1 w-1 rounded-full ${
                    p.status === 'production'
                      ? 'bg-emerald-300'
                      : p.status === 'development'
                        ? 'bg-gold-200'
                        : 'bg-bone-200/50'
                  }`}
                />
                {t.product.status[p.status]}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

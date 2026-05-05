'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { products, type ProductStatus } from '@/lib/products';
import { ProductMockup } from './ProductMockup';
import { cn } from '@/lib/cn';
import { ArrowUpRight } from 'lucide-react';

type Filter = 'all' | ProductStatus;

export function PortfolioGrid() {
  const { locale, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.status === filter);
  }, [filter]);

  const filterOptions: { value: Filter; label: string }[] = [
    { value: 'all', label: t.portfolio.filters.all },
    { value: 'production', label: t.portfolio.filters.production },
    { value: 'development', label: t.portfolio.filters.development },
    { value: 'concept', label: t.portfolio.filters.concept },
  ];

  return (
    <section className="container-editorial pb-24 lg:pb-32">
      <div className="mb-10 lg:mb-14">
        <div
          role="tablist"
          aria-label="Filtrar portfolio por status"
          className="inline-flex flex-wrap items-center gap-1 rounded-full border border-bone-100/10 bg-ink-900/40 backdrop-blur-md p-1"
        >
          {filterOptions.map((opt) => {
            const active = filter === opt.value;
            return (
              <button
                key={opt.value}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setFilter(opt.value)}
                className={cn(
                  'relative px-4 py-2 text-caption tracking-wide rounded-full transition-colors duration-200 ease-apple',
                  active ? 'text-ink-950' : 'text-bone-200/70 hover:text-bone-50',
                )}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-bone-50"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <motion.li
              key={product.slug}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.04 }}
              className="group"
            >
              <Link
                href={`/portfolio/${product.slug}`}
                className="block rounded-3xl focus-visible:ring-2 focus-visible:ring-gold-300/60"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  <ProductMockup product={product} compact className="aspect-[4/5]" />
                </motion.div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-eyebrow uppercase text-bone-200/45">
                      {product.category[locale]}
                    </span>
                    <h3 className="mt-2 font-display text-h3 text-bone-50 leading-tight tracking-tight">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-caption text-bone-200/65 leading-snug">
                      {product.copy[locale].tagline}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone-100/15 text-bone-100 transition-all duration-300 ease-apple group-hover:border-gold-300/60 group-hover:text-gold-300 group-hover:rotate-[20deg]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-body text-bone-200/50">
          {locale === 'pt' ? 'Nenhum projeto neste filtro.' : 'No projects under this filter.'}
        </p>
      )}
    </section>
  );
}

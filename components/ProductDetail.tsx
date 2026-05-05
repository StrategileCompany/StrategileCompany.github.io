'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { getAdjacentProducts, type Product } from '@/lib/products';
import { ProductMockup } from './ProductMockup';
import { Button } from './Button';
import { RevealText } from './RevealText';

type Props = {
  product: Product;
};

export function ProductDetail({ product }: Props) {
  const { locale, t } = useLanguage();
  const copy = product.copy[locale];
  const { prev, next } = getAdjacentProducts(product.slug);
  const statusLabel = t.portfolio.statusLabels[product.status];

  return (
    <article className="pb-24">
      {/* Top: voltar + categoria */}
      <div className="container-editorial pt-32 sm:pt-40 lg:pt-44 mb-10 lg:mb-14">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 text-caption text-bone-200/60 hover:text-bone-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          {t.portfolio.backToPortfolio}
        </Link>
      </div>

      {/* Hero do produto */}
      <header className="container-editorial">
        <div className="flex items-center gap-3 mb-8">
          <span aria-hidden className="h-px w-10 bg-gold-300/60" />
          <span className="text-eyebrow uppercase text-gold-300">
            {product.category[locale]}
          </span>
        </div>

        <h1 className="font-display font-light text-bone-50 text-hero leading-[0.92] tracking-tight">
          <RevealText splitWords text={product.name} />
        </h1>

        <RevealText
          delay={0.4}
          className="mt-8 max-w-3xl text-body-lg lg:text-[1.375rem] text-bone-100/90 leading-relaxed font-display italic font-light"
          as="p"
        >
          {copy.tagline}
        </RevealText>
      </header>

      {/* Mockup grande */}
      <div className="container-editorial mt-16 lg:mt-22">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductMockup product={product} className="aspect-[16/10] lg:aspect-[16/9]" />
        </motion.div>
      </div>

      {/* Conteudo: descricao + meta */}
      <div className="container-editorial mt-20 lg:mt-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-eyebrow uppercase text-bone-200/45">
              {locale === 'pt' ? 'Sobre o produto' : 'About the product'}
            </span>
            <div className="mt-6 space-y-7 max-w-2xl">
              {copy.longDescription.map((para, i) => (
                <RevealText
                  key={i}
                  delay={i * 0.05}
                  as="p"
                  className="text-body-lg text-bone-100/85 leading-relaxed text-pretty"
                >
                  {para}
                </RevealText>
              ))}
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-bone-100/[0.08]">
            <dl className="space-y-8">
              <MetaBlock label={t.portfolio.productMeta.category}>
                {product.category[locale]}
              </MetaBlock>
              <MetaBlock label={t.portfolio.productMeta.status}>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-gold-300"
                  />
                  {statusLabel}
                </span>
              </MetaBlock>
              {copy.metric && (
                <MetaBlock label={t.portfolio.productMeta.metric}>
                  <span className="font-display text-h3 text-gold-300 leading-tight">
                    {copy.metric}
                  </span>
                </MetaBlock>
              )}
              {copy.clients && (
                <MetaBlock label={t.portfolio.productMeta.clients}>{copy.clients}</MetaBlock>
              )}
              <MetaBlock label={t.portfolio.productMeta.stack}>
                <ul className="flex flex-wrap gap-1.5 mt-1">
                  {product.stack.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center rounded-full border border-bone-100/15 bg-bone-100/[0.03] px-3 py-1 text-caption text-bone-200/85"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </MetaBlock>
            </dl>

            {product.url && (
              <div className="mt-10">
                <Button href={product.url} external variant="secondary" withArrow>
                  {t.portfolio.visitSite}
                </Button>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Navegacao prev/next */}
      <nav
        aria-label={locale === 'pt' ? 'Navegacao entre projetos' : 'Project navigation'}
        className="container-editorial mt-32 lg:mt-44 pt-12 border-t border-bone-100/[0.08]"
      >
        <div className="grid grid-cols-2 gap-4">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group flex items-center gap-4"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bone-100/15 text-bone-100 transition-all duration-300 ease-apple group-hover:border-gold-300/60 group-hover:text-gold-300 group-hover:-translate-x-1">
              <ArrowLeft className="h-4 w-4" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-eyebrow uppercase text-bone-200/45">
                {t.portfolio.prevProduct}
              </span>
              <span className="block font-display text-h3 text-bone-50 mt-1">
                {prev.name}
              </span>
            </span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex items-center justify-end gap-4 text-right"
          >
            <span className="hidden sm:block">
              <span className="block text-eyebrow uppercase text-bone-200/45">
                {t.portfolio.nextProduct}
              </span>
              <span className="block font-display text-h3 text-bone-50 mt-1">
                {next.name}
              </span>
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bone-100/15 text-bone-100 transition-all duration-300 ease-apple group-hover:border-gold-300/60 group-hover:text-gold-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </nav>
    </article>
  );
}

function MetaBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-eyebrow uppercase text-bone-200/45">{label}</dt>
      <dd className="mt-2 text-body text-bone-100/90 leading-relaxed">{children}</dd>
    </div>
  );
}

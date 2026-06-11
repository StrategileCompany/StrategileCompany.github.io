'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAdjacentProducts, type Product } from '@/lib/products';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { AppIcon } from '@/components/icons/AppIcon';
import { IphoneFrame } from '@/components/device/IphoneFrame';
import { SCREENS } from '@/components/device/screens';
import { RevealText } from '@/components/RevealText';

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProductLanding({ product }: { product: Product }) {
  const { t, locale } = useLanguage();
  const copy = product.copy[locale];
  const { prev, next } = getAdjacentProducts(product.slug);
  const Screen = SCREENS[product.slug];

  return (
    <article className="relative bg-ink-950">
      {/* ——— Hero ——— */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:pb-28 lg:pt-40">
        {/* aura na cor do produto */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[20vh] left-[55%] h-[80vh] w-[80vw] -translate-x-1/2 rounded-full opacity-[0.1]"
          style={{ background: `radial-gradient(ellipse, ${product.accent} 0%, transparent 65%)`, filter: 'blur(40px)' }}
        />

        <div className="container-editorial relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-mono text-eyebrow uppercase tracking-[0.3em] text-bone-200/50"
            >
              {t.product.kicker} · {product.category[locale]}
            </motion.div>

            <div className="mt-8 flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.15 }}
              >
                <AppIcon slug={product.slug} size={84} className="drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]" />
              </motion.div>
              <h1 className="font-display font-light text-h1 text-bone-50">
                <RevealText splitWords text={product.name} delay={0.2} />
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-7 font-display text-h3 italic font-light"
              style={{ color: product.accent }}
            >
              {copy.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="mt-6 max-w-[52ch] text-body-lg leading-relaxed text-bone-200/75"
            >
              {copy.essence}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-2.5"
            >
              <span
                className="rounded-full px-4 py-1.5 font-mono text-micro uppercase tracking-[0.16em]"
                style={{ color: product.accent, border: `1px solid ${product.accent}55` }}
              >
                {t.product.status[product.status]}
              </span>
              <span className="rounded-full border border-bone-100/15 px-4 py-1.5 font-mono text-micro uppercase tracking-[0.16em] text-bone-200/60">
                {t.product.platform[product.platform]}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.35 }}
            className="relative mx-auto w-[17rem] sm:w-[19rem] lg:w-[21rem]"
          >
            <div
              aria-hidden
              className="absolute -inset-12 rounded-full opacity-40"
              style={{ background: `radial-gradient(circle, ${product.accent}2e 0%, transparent 65%)`, filter: 'blur(26px)' }}
            />
            <IphoneFrame>{Screen ? <Screen /> : null}</IphoneFrame>
          </motion.div>
        </div>
      </section>

      {/* ——— O que ele faz ——— */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display font-light text-h2 text-bone-50"
          >
            {t.product.whatItDoes}
          </motion.h2>
          <div className="space-y-6">
            {copy.description.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="max-w-[62ch] text-body-lg leading-relaxed text-bone-200/75"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Capacidades + Engenharia ——— */}
      <section className="px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="container-editorial grid gap-14 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="font-mono text-eyebrow uppercase tracking-[0.3em] text-bone-200/50"
            >
              {t.product.capabilities}
            </motion.p>
            <ul className="mt-7 space-y-0">
              {copy.capabilities.map((cap, i) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="flex gap-4 border-t border-bone-100/10 py-5"
                >
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: product.accent }} />
                  <span className="text-body text-bone-200/80">{cap}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: EASE }}
                className="font-mono text-eyebrow uppercase tracking-[0.3em] text-bone-200/50"
              >
                {t.product.engineering}
              </motion.p>
              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="mt-6 border-l-2 pl-6 text-body leading-relaxed text-bone-200/75"
                style={{ borderColor: `${product.accent}66` }}
              >
                {copy.fact}
              </motion.blockquote>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: EASE }}
                className="font-mono text-eyebrow uppercase tracking-[0.3em] text-bone-200/50"
              >
                {t.product.stack}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {product.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-bone-100/12 px-3.5 py-1.5 font-mono text-micro text-bone-200/65"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Navegação entre projetos ——— */}
      <nav aria-label={t.nav.portfolio} className="border-t border-bone-100/8 px-6 sm:px-10">
        <div className="container-editorial grid sm:grid-cols-2">
          <Link
            href={`/portfolio/${prev.slug}/`}
            className="group flex items-center gap-5 border-b border-bone-100/8 py-9 sm:border-b-0 sm:border-r sm:pr-10"
          >
            <span aria-hidden className="text-bone-200/40 transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <AppIcon slug={prev.slug} size={44} />
            <span>
              <span className="block font-mono text-micro uppercase tracking-[0.2em] text-bone-200/40">{t.product.prev}</span>
              <span className="mt-1 block text-body font-medium text-bone-100 transition-colors group-hover:text-gold-200">{prev.name}</span>
            </span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}/`}
            className="group flex items-center justify-end gap-5 py-9 text-right sm:pl-10"
          >
            <span>
              <span className="block font-mono text-micro uppercase tracking-[0.2em] text-bone-200/40">{t.product.next}</span>
              <span className="mt-1 block text-body font-medium text-bone-100 transition-colors group-hover:text-gold-200">{next.name}</span>
            </span>
            <AppIcon slug={next.slug} size={44} />
            <span aria-hidden className="text-bone-200/40 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </nav>

      <div className="border-t border-bone-100/8 px-6 py-10 text-center sm:px-10">
        <Link
          href="/#portfolio"
          className="font-mono text-caption uppercase tracking-[0.2em] text-bone-200/50 transition-colors hover:text-gold-200"
        >
          ◂ {t.product.backHome}
        </Link>
      </div>
    </article>
  );
}

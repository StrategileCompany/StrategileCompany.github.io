'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { Button } from './Button';
import { RevealText } from './RevealText';

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Glow ambient */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full blur-3xl opacity-[0.18] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A96B 0%, transparent 65%)' }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] rounded-full blur-3xl opacity-[0.12] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B8945A 0%, transparent 60%)' }}
      />

      <motion.div style={{ y, opacity }} className="container-editorial relative z-10 pb-16 pt-32 sm:pt-40 lg:pb-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-3 mb-8 lg:mb-10"
            >
              <span aria-hidden className="h-px w-10 bg-gold-300/60" />
              <span className="text-eyebrow uppercase text-gold-300">{t.hero.eyebrow}</span>
            </motion.div>

            <h1
              id="hero-title"
              className="font-display font-light text-bone-50 text-balance"
              style={{ letterSpacing: '-0.045em' }}
            >
              <span className="block text-display leading-[0.95]">
                <RevealText splitWords text={t.hero.title.line1} />
              </span>
              <span className="block text-display leading-[0.95] italic font-normal text-gold-300/95">
                <RevealText splitWords text={t.hero.title.line2} />
              </span>
            </h1>

            <RevealText delay={0.5} className="mt-8 max-w-xl text-body-lg text-bone-200/75 leading-relaxed text-pretty">
              {t.hero.sub}
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button href="/portfolio" variant="primary" size="lg" withArrow>
                {t.hero.ctaPrimary}
              </Button>
              <Button href="/contato" variant="secondary" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-3 flex lg:justify-end mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 max-w-md"
              aria-label="Numeros da empresa"
            >
              <Stat number="08" label={{ pt: 'Produtos', en: 'Products' }} />
              <Stat number="03" label={{ pt: 'Verticais', en: 'Verticals' }} />
              <Stat number="∞" label={{ pt: 'Compromisso', en: 'Commitment' }} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-eyebrow uppercase text-bone-200/40"
        aria-hidden
      >
        <span className="inline-flex items-center gap-2">
          <motion.span
            animate={reduce ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            ↓
          </motion.span>
          {t.hero.scrollHint}
        </span>
      </motion.div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: { pt: string; en: string } }) {
  const { locale } = useLanguage();
  return (
    <div>
      <div className="font-display text-h2 leading-none text-bone-50 tabular-nums">{number}</div>
      <div className="mt-2 text-eyebrow uppercase text-bone-200/50">{label[locale]}</div>
    </div>
  );
}

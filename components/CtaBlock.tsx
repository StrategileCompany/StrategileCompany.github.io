'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { Button } from './Button';
import { RevealText } from './RevealText';

export function CtaBlock() {
  const { t } = useLanguage();
  return (
    <section
      className="relative py-32 lg:py-48 overflow-hidden border-t border-bone-100/[0.06]"
      aria-labelledby="cta-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201, 169, 107, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container-editorial relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-eyebrow uppercase text-gold-300"
          >
            {t.cta.eyebrow}
          </motion.span>

          <h2
            id="cta-title"
            className="mt-6 font-display font-light text-bone-50 text-display leading-[0.98] tracking-tight text-balance"
          >
            <RevealText>{t.cta.title}</RevealText>
          </h2>

          <RevealText delay={0.1} className="mt-8 max-w-2xl mx-auto text-body-lg text-bone-200/75 leading-relaxed text-pretty">
            {t.cta.sub}
          </RevealText>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <Button href="/contato" variant="primary" size="lg" withArrow>
              {t.cta.button}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

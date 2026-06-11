'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { MagneticButton } from '@/components/MagneticButton';
import { RevealText } from '@/components/RevealText';

const EASE = [0.16, 1, 0.3, 1] as const;

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="relative overflow-hidden bg-ink-950 px-6 py-36 sm:px-10 lg:py-48">
      {/* glow quente de encerramento */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse, #C9A96B 0%, transparent 65%)' }}
      />
      <div className="container-editorial relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70"
        >
          {t.cta.kicker}
        </motion.p>

        <h2 className="mx-auto mt-8 max-w-[20ch] font-display font-light text-h1 text-bone-50">
          <RevealText splitWords text={t.cta.title} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto mt-7 max-w-[44ch] text-body-lg text-bone-200/70"
        >
          {t.cta.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          className="mt-12"
        >
          <MagneticButton
            href={`mailto:${t.cta.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-bone-50 px-9 py-4 text-body font-medium text-ink-950 transition-colors hover:bg-gold-100"
          >
            {t.cta.action} <span aria-hidden>→</span>
          </MagneticButton>
          <div className="mt-6 font-mono text-caption text-bone-200/45">{t.cta.email}</div>
        </motion.div>
      </div>
    </section>
  );
}

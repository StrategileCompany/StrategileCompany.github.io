'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { RevealText } from '@/components/RevealText';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Momento de silêncio depois da cena: só tipografia e espaço.
 */
export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section id="estudio" className="relative bg-ink-950 px-6 py-32 sm:px-10 lg:py-44">
      <div className="container-editorial">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70"
        >
          {t.manifesto.kicker}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-10 font-mono text-caption uppercase tracking-[0.22em] text-bone-200/55"
        >
          {t.manifesto.fields}
        </motion.p>

        <h2 className="mt-6 max-w-[24ch] font-display font-light text-h1 leading-[1.08] text-bone-50">
          <RevealText splitWords text={t.manifesto.statementA} />{' '}
          <em className="text-gold-300">
            <RevealText splitWords text={t.manifesto.statementEm} delay={0.25} />
          </em>{' '}
          <RevealText splitWords text={t.manifesto.statementB} delay={0.6} />
        </h2>

        <div className="mt-16 grid gap-y-6 sm:grid-cols-3 sm:gap-x-10">
          {t.manifesto.lines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE }}
              className="border-t border-bone-100/10 pt-5"
            >
              <span className="font-mono text-micro text-gold-300/70">0{i + 1}</span>
              <p className="mt-2 text-body text-bone-200/80">{line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

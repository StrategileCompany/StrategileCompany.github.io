'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Como o trabalho acontece. O portfólio prova capacidade; esta seção responde
 * a pergunta que vem logo depois — "e como isso funciona comigo?".
 */
export function Process() {
  const { t } = useLanguage();

  return (
    <section id="processo" className="relative bg-ink-950 px-6 pb-32 sm:px-10 lg:pb-44">
      <div className="container-editorial">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70"
        >
          {t.process.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mt-5 max-w-[24ch] font-display font-light text-h2 text-bone-50"
        >
          {t.process.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.14, ease: EASE }}
          className="mt-6 max-w-[56ch] text-body-lg leading-relaxed text-bone-200/70"
        >
          {t.process.lead}
        </motion.p>

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              className="relative border-t border-bone-100/12 pt-6"
            >
              <span className="font-mono text-eyebrow uppercase tracking-[0.28em] text-gold-200/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-h4 font-light text-bone-50">{step.title}</h3>
              <p className="mt-3 text-body-sm leading-relaxed text-bone-200/60">{step.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

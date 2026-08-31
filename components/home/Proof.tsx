'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Faixa de prova: números agregados e setores atendidos.
 * Sem avaliações de usuário e sem preços — a regra de conteúdo do site —
 * mas dizendo, em números, que os sistemas têm operação real.
 */
export function Proof() {
  const { t } = useLanguage();

  return (
    <section className="relative border-y border-bone-100/8 bg-ink-950 px-6 py-24 sm:px-10 lg:py-32">
      <div className="container-editorial">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70"
        >
          {t.proof.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mt-5 max-w-[20ch] font-display font-light text-h2 text-bone-50"
        >
          {t.proof.title}
        </motion.h2>

        <div className="mt-14 grid gap-y-10 sm:grid-cols-3 sm:gap-x-10">
          {t.proof.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
            >
              <div className="font-display text-[clamp(3rem,7vw,4.75rem)] font-light leading-none text-gold-200">
                {m.value}
              </div>
              <div className="mt-3 max-w-[22ch] text-body-sm leading-relaxed text-bone-200/60">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-16 border-t border-bone-100/8 pt-8"
        >
          <p className="font-mono text-eyebrow uppercase tracking-[0.28em] text-bone-200/45">
            {t.proof.sectorsLabel}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2.5">
            {t.proof.sectors.map((sector) => (
              <li
                key={sector}
                className="rounded-full border border-bone-100/12 px-4 py-1.5 text-caption text-bone-200/70"
              >
                {sector}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

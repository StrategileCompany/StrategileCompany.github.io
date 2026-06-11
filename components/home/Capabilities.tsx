'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-ink-950 px-6 pb-32 sm:px-10 lg:pb-44">
      <div className="container-editorial">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70"
        >
          {t.capabilities.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mt-5 font-display font-light text-h2 text-bone-50"
        >
          {t.capabilities.title}
        </motion.h2>

        <div className="mt-14 grid gap-x-12 gap-y-0 lg:grid-cols-2">
          {t.capabilities.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease: EASE }}
              className="group flex gap-6 border-t border-bone-100/10 py-7 transition-colors duration-300 hover:border-gold-300/30"
            >
              <span className="font-mono text-micro text-gold-300/60 pt-1.5 tabular-nums">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-body-lg font-medium text-bone-50 transition-colors duration-300 group-hover:text-gold-100">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[44ch] text-body-sm leading-relaxed text-bone-200/60">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

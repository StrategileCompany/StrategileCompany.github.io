'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { RevealText } from './RevealText';

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-24 lg:py-32 border-t border-bone-100/[0.06]"
      aria-labelledby="capabilities-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <span className="text-eyebrow uppercase text-gold-300">{t.capabilities.eyebrow}</span>
            <span className="block mt-3 text-caption text-bone-200/40 tabular-nums">/ 02</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="capabilities-title"
              className="font-display font-light text-h1 text-bone-50 leading-[1.05] tracking-tight text-balance"
            >
              <RevealText>{t.capabilities.title}</RevealText>
            </h2>
            <RevealText delay={0.1} className="mt-6 max-w-2xl text-body-lg text-bone-200/70 leading-relaxed">
              {t.capabilities.sub}
            </RevealText>
          </div>
        </div>

        <ul className="grid gap-px bg-bone-100/[0.06] border border-bone-100/[0.06] rounded-2xl overflow-hidden md:grid-cols-2">
          {t.capabilities.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-ink-950 p-8 lg:p-10 transition-colors duration-300 hover:bg-ink-900/50"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-h3 text-gold-300/70 tabular-nums leading-none mt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-h3 text-bone-50 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-bone-200/70 leading-relaxed text-pretty">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

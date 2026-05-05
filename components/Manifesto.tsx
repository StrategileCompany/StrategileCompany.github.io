'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { RevealText } from './RevealText';
import { motion } from 'framer-motion';

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-24 lg:py-38 border-t border-bone-100/[0.06]"
      aria-labelledby="manifesto-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-3"
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-eyebrow uppercase text-gold-300">{t.manifesto.eyebrow}</span>
              <span className="block mt-3 text-caption text-bone-200/40 tabular-nums">/ 01</span>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-9">
            <h2
              id="manifesto-title"
              className="font-display font-light text-h1 text-bone-50 text-balance leading-[1.05] tracking-tight"
            >
              <RevealText>{t.manifesto.title}</RevealText>
            </h2>

            <div className="mt-12 grid gap-8 lg:gap-10 max-w-3xl">
              {t.manifesto.paragraphs.map((para, i) => (
                <RevealText
                  key={i}
                  delay={0.1 + i * 0.08}
                  className="text-body-lg text-bone-200/85 leading-relaxed text-pretty"
                  as="p"
                >
                  {para}
                </RevealText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

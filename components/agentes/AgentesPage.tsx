'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { agentExamples, VITRINE_URL } from '@/lib/agentes';
import { MagneticButton } from '@/components/MagneticButton';
import { RevealText } from '@/components/RevealText';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Subpágina da divisão de agentes (/agentes e /en/agentes).
 *
 * Faz uma coisa só: apresenta a divisão na voz do estúdio e entrega o visitante
 * à vitrine. Pitch em 2 parágrafos, 3 cartas de exemplo com dados estáticos
 * (lib/agentes.ts) e um CTA único e grande. Sem preço, sem número medido —
 * isso vive na vitrine, onde é atualizado.
 */
export function AgentesPage() {
  const { t, locale, localeHref } = useLanguage();
  const copy = t.agentes;

  return (
    <article className="relative bg-ink-950">
      {/* ——— Hero ——— */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:pb-28 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[20vh] left-[60%] h-[80vh] w-[80vw] -translate-x-1/2 rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse, #C9A96B 0%, transparent 68%)' }}
        />
        <div className="container-editorial relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-eyebrow uppercase tracking-[0.3em] text-gold-200/70"
          >
            {copy.kicker}
          </motion.p>
          <h1 className="mt-8 max-w-[16ch] font-display font-light text-h1 text-bone-50">
            <RevealText splitWords text={copy.title} delay={0.1} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="mt-7 max-w-[52ch] text-body-lg leading-relaxed text-bone-200/75"
          >
            {copy.lead}
          </motion.p>
        </div>
      </section>

      {/* ——— Pitch: 2 parágrafos, voz do estúdio ——— */}
      <section className="relative px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="container-editorial">
          <div className="grid gap-10 border-t border-bone-100/10 pt-10 lg:grid-cols-2 lg:gap-16">
            {copy.pitch.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                className="max-w-[52ch] text-body-lg leading-relaxed text-bone-200/80"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 3 cartas de exemplo (estáticas) ——— */}
      <section className="relative px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="container-editorial">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70"
          >
            {copy.examplesKicker}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            className="mt-5 max-w-[22ch] font-display font-light text-h2 text-bone-50"
          >
            {copy.examplesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.14, ease: EASE }}
            className="mt-6 max-w-[56ch] text-body-lg leading-relaxed text-bone-200/70"
          >
            {copy.examplesLead}
          </motion.p>

          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {agentExamples.map((agent, i) => (
              <motion.li
                key={agent.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
                className="group flex min-w-0 flex-col rounded-3xl border border-bone-100/10 bg-ink-900/60 p-7 transition-colors duration-300 hover:border-gold-300/30 sm:p-8"
              >
                <span className="font-mono text-eyebrow uppercase tracking-[0.28em] text-gold-200/60">
                  {agent.area[locale]}
                </span>
                <h3 className="mt-4 font-display text-h3 font-light text-bone-50 transition-colors duration-300 group-hover:text-gold-100">
                  {agent.name[locale]}
                </h3>
                <p className="mt-3 text-body-sm leading-relaxed text-bone-200/60">{agent.summary[locale]}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— CTA único e grande para a vitrine ——— */}
      <section className="relative overflow-hidden px-6 py-32 sm:px-10 lg:py-44">
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
            {copy.ctaKicker}
          </motion.p>
          <h2 className="mx-auto mt-8 max-w-[22ch] font-display font-light text-h1 text-bone-50">
            <RevealText splitWords text={copy.ctaTitle} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mx-auto mt-7 max-w-[44ch] text-body-lg text-bone-200/70"
          >
            {copy.ctaBody}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mt-12"
          >
            <MagneticButton
              href={VITRINE_URL}
              className="inline-flex items-center gap-3 rounded-full bg-bone-50 px-10 py-5 text-body-lg font-medium text-ink-950 transition-colors hover:bg-gold-100"
            >
              {copy.ctaAction} <span aria-hidden>↗</span>
            </MagneticButton>
            <div className="mt-6 font-mono text-caption text-bone-200/45">{copy.ctaHint}</div>
            <Link
              href={localeHref('/')}
              className="mt-12 inline-block text-caption text-bone-200/55 transition-colors hover:text-bone-50"
            >
              ← {copy.backHome}
            </Link>
          </motion.div>
        </div>
      </section>
    </article>
  );
}

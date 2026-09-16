'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { MagneticButton } from '@/components/MagneticButton';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Chamada MENOR para a divisão de agentes, entre Capabilities e Process:
 * "IA aplicada ao negócio" (Capabilities) é o item que ela aprofunda, e o
 * leitor chega aquecido. Faixa + botão — sem cartas, sem números: a home não
 * vira vitrine. NÃO é um 11º ícone da grade (a cena assume products.length).
 */
export function AgentesCallout() {
  const { t, localeHref } = useLanguage();

  return (
    <section id="agentes" className="relative bg-ink-950 px-6 pb-32 sm:px-10 lg:pb-44">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-gold-300/20 bg-ink-900/60 px-7 py-10 sm:px-10 lg:px-14 lg:py-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[10%] -top-[40%] h-[120%] w-[50%] rounded-full opacity-[0.08]"
            style={{ background: 'radial-gradient(ellipse, #C9A96B 0%, transparent 65%)' }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
            <div className="min-w-0">
              <p className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70">
                {t.homeAgentes.kicker}
              </p>
              <h2 className="mt-5 max-w-[20ch] font-display font-light text-h2 text-bone-50">
                {t.homeAgentes.title}
              </h2>
              <p className="mt-5 max-w-[52ch] text-body leading-relaxed text-bone-200/70">
                {t.homeAgentes.body}
              </p>
            </div>
            <MagneticButton
              href={localeHref('/agentes/')}
              className="inline-flex items-center gap-3 rounded-full bg-bone-50 px-8 py-4 text-body font-medium text-ink-950 transition-colors hover:bg-gold-100"
            >
              {t.homeAgentes.action} <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

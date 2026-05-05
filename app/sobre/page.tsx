'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { team } from '@/lib/team';
import { PageHeader } from '@/components/PageHeader';
import { TeamCard } from '@/components/TeamCard';
import { RevealText } from '@/components/RevealText';
import { Button } from '@/components/Button';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader title={t.about.title} eyebrow={t.about.eyebrow} />

      {/* Manifesto */}
      <section className="container-editorial pb-24 lg:pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-4"
          >
            <span className="text-eyebrow uppercase text-gold-300">{t.about.manifestoTitle}</span>
            <span className="block mt-3 text-caption text-bone-200/40 tabular-nums">/ 01</span>
          </motion.div>
          <div className="col-span-12 lg:col-span-8 space-y-8 max-w-2xl">
            {t.about.manifestoBody.map((para, i) => (
              <RevealText
                key={i}
                delay={i * 0.08}
                as="p"
                className="text-body-lg text-bone-100/85 leading-relaxed text-pretty"
              >
                {para}
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="container-editorial pb-32 lg:pb-44 border-t border-bone-100/[0.06] pt-24 lg:pt-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-eyebrow uppercase text-gold-300">{t.about.teamTitle}</span>
            <span className="block mt-3 text-caption text-bone-200/40 tabular-nums">/ 02</span>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-display font-light text-h1 text-bone-50 leading-[1.05] tracking-tight">
              <RevealText>{t.about.teamSub}</RevealText>
            </h2>
          </div>
        </div>

        <ul className="grid gap-10 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <TeamCard key={m.slug} member={m} index={i} />
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container-editorial pb-24 lg:pb-32">
        <div className="rounded-3xl border border-bone-100/[0.08] bg-gradient-to-br from-ink-900 to-ink-950 p-10 lg:p-16 text-center">
          <h3 className="font-display font-light text-h2 text-bone-50 leading-tight tracking-tight">
            {t.cta.title}
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-body text-bone-200/70 leading-relaxed">
            {t.cta.sub}
          </p>
          <div className="mt-8">
            <Button href="/contato" variant="primary" size="lg" withArrow>
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import type { TeamMember } from '@/lib/team';
import { cn } from '@/lib/cn';

type Props = {
  member: TeamMember;
  index: number;
};

export function TeamCard({ member, index }: Props) {
  const { locale } = useLanguage();

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Monograma — usado como "foto" placeholder */}
      <div
        className={cn(
          'relative aspect-[3/4] overflow-hidden rounded-3xl border border-bone-100/[0.08]',
          'bg-gradient-to-br from-ink-800 to-ink-900',
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '256px',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: '#C9A96B' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden
            className="font-display font-light text-bone-50/95 leading-none tracking-tight"
            style={{ fontSize: 'clamp(6rem, 14vw, 12rem)' }}
          >
            {member.initials}
          </span>
        </div>
        <div className="absolute top-6 left-6 text-eyebrow uppercase text-bone-200/45 tabular-nums">
          / 0{index + 1}
        </div>
      </div>

      {/* Info */}
      <div className="mt-6">
        <h3 className="font-display text-h2 text-bone-50 leading-tight tracking-tight">
          {member.name}
        </h3>
        <p className="mt-2 text-caption text-gold-300 uppercase tracking-wide">
          {member.role[locale]}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {member.expertise[locale].map((skill) => (
            <li
              key={skill}
              className="inline-flex items-center rounded-full border border-bone-100/10 bg-bone-100/[0.02] px-3 py-1 text-eyebrow uppercase text-bone-200/70"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-3 text-body-sm text-bone-200/75 leading-relaxed">
          {member.bio[locale].map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </motion.li>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { cn } from '@/lib/cn';

type Props = {
  className?: string;
};

export function LangToggle({ className }: Props) {
  const { locale, hrefFor, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langToggle.label}
      className={cn(
        'relative inline-flex items-center gap-0 rounded-full border border-bone-100/15 bg-ink-900/60 backdrop-blur-md p-0.5 text-eyebrow uppercase',
        className,
      )}
    >
      {(['pt', 'en'] as const).map((code) => {
        const active = locale === code;
        return (
          // Navegação real entre /  e  /en — cada idioma tem URL própria e indexável.
          <Link
            key={code}
            href={hrefFor(code)}
            hrefLang={code === 'pt' ? 'pt-BR' : 'en'}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'relative px-3 py-1.5 rounded-full transition-colors duration-200 ease-apple',
              active ? 'text-ink-950' : 'text-bone-200/70 hover:text-bone-50',
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-bone-50"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{t.langToggle[code]}</span>
          </Link>
        );
      })}
    </div>
  );
}

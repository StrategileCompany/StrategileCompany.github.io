'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export function Logo({ className }: { className?: string }) {
  const { localeHref } = useLanguage();

  return (
    <Link
      href={localeHref('/')}
      aria-label="Strategile Company — página inicial"
      className={cn(
        'group inline-flex items-baseline gap-1 font-display text-h3 leading-none tracking-tight text-bone-50',
        className,
      )}
    >
      <span className="font-medium">Strategile</span>
      <span className="font-normal text-bone-200/70">Company</span>
      <span className="text-gold-300 transition-transform duration-300 ease-apple group-hover:translate-x-0.5">
        .
      </span>
    </Link>
  );
}

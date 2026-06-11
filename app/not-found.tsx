'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-6 text-center">
      <p className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70">404</p>
      <h1 className="mt-6 font-display font-light text-h1 text-bone-50">{t.notFound.title}</h1>
      <p className="mt-5 max-w-[38ch] text-body-lg text-bone-200/65">{t.notFound.body}</p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-bone-50 px-7 py-3.5 text-body-sm font-medium text-ink-950 transition-colors hover:bg-gold-100"
      >
        {t.notFound.back}
      </Link>
    </section>
  );
}

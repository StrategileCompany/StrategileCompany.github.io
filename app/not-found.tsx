'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { Button } from '@/components/Button';

export default function NotFound() {
  const { locale } = useLanguage();
  const isPt = locale === 'pt';
  return (
    <section className="min-h-[80svh] flex items-center justify-center container-editorial">
      <div className="text-center max-w-xl">
        <span className="font-display text-display text-gold-300/80 leading-none tabular-nums">
          404
        </span>
        <h1 className="mt-6 font-display text-h1 text-bone-50 leading-tight tracking-tight">
          {isPt ? 'Pagina nao encontrada.' : 'Page not found.'}
        </h1>
        <p className="mt-4 text-body text-bone-200/70 leading-relaxed">
          {isPt
            ? 'O link que voce seguiu pode estar quebrado ou a pagina foi removida.'
            : 'The link you followed may be broken, or the page has been removed.'}
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" withArrow>
            {isPt ? 'Voltar ao inicio' : 'Back home'}
          </Button>
        </div>
      </div>
    </section>
  );
}

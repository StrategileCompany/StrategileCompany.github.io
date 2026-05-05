'use client';

import { PageHeader } from '@/components/PageHeader';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function PortfolioPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t.portfolio.title} sub={t.portfolio.sub} eyebrow={t.nav.portfolio} />
      <PortfolioGrid />
    </>
  );
}

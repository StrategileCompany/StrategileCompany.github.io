'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { Button } from './Button';
import { PortfolioCoverflow } from './PortfolioCoverflow';
import { RevealText } from './RevealText';

export function PortfolioShowcase() {
  const { t } = useLanguage();
  return (
    <section
      className="relative py-24 lg:py-32 border-t border-bone-100/[0.06] overflow-hidden"
      aria-labelledby="portfolio-section-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-3">
            <span className="text-eyebrow uppercase text-gold-300">
              {t.portfolioSection.eyebrow}
            </span>
            <span className="block mt-3 text-caption text-bone-200/40 tabular-nums">/ 03</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              id="portfolio-section-title"
              className="font-display font-light text-h1 text-bone-50 leading-[1.05] tracking-tight text-balance"
            >
              <RevealText>{t.portfolioSection.title}</RevealText>
            </h2>
            <RevealText delay={0.08} className="mt-6 max-w-xl text-body-lg text-bone-200/70 leading-relaxed">
              {t.portfolioSection.sub}
            </RevealText>
          </div>
        </div>
      </div>

      <PortfolioCoverflow />

      <div className="container-editorial mt-12 lg:mt-16 flex justify-center">
        <Button href="/portfolio" variant="secondary" size="md" withArrow>
          {t.portfolioSection.cta}
        </Button>
      </div>
    </section>
  );
}

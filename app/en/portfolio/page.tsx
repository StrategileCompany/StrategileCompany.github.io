import type { Metadata } from 'next';
import { PortfolioIndex } from '@/components/PortfolioIndex';
import { products } from '@/lib/products';
import { absoluteUrl, alternatesFor, localePath } from '@/lib/site';

const description = `${products.length} products, ${products.length} different operations — the Strategile Company home screen.`;

export const metadata: Metadata = {
  title: 'Portfolio',
  description,
  alternates: alternatesFor('en', '/portfolio/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: absoluteUrl(localePath('en', '/portfolio/')),
    siteName: 'Strategile Company',
    title: 'Portfolio · Strategile Company',
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Strategile Company' }],
  },
};

export default function PortfolioPageEn() {
  return <PortfolioIndex />;
}

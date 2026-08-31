import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProductSlugs } from '@/lib/products';
import { ProductLanding } from '@/components/ProductLanding';
import { absoluteUrl, alternatesFor, localePath } from '@/lib/site';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const path = `/portfolio/${product.slug}/`;
  const title = `${product.name} — ${product.category.en}`;
  const description = product.copy.en.essence;

  return {
    title,
    description,
    alternates: alternatesFor('en', path),
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: absoluteUrl(localePath('en', path)),
      siteName: 'Strategile Company',
      title: `${title} · Strategile Company`,
      description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${product.name} — Strategile Company` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} · Strategile Company`,
      description: product.copy.en.tagline,
      images: ['/og.png'],
    },
  };
}

export default function ProductPageEn({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductLanding product={product} />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProductSlugs } from '@/lib/products';
import { ProductLanding } from '@/components/ProductLanding';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category.pt}`,
    description: product.copy.pt.essence,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductLanding product={product} />;
}

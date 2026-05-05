import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { getProductBySlug, getProductSlugs } from '@/lib/products';

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.copy.pt.tagline}`,
    description: product.copy.pt.shortDescription,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}

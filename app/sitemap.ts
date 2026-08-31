import type { MetadataRoute } from 'next';
import { absoluteUrl, allRoutes } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().flatMap(({ pt, en }) => {
    const alternates = {
      languages: { 'pt-BR': absoluteUrl(pt), en: absoluteUrl(en) },
    };
    const priority = pt === '/' ? 1 : pt === '/portfolio/' ? 0.8 : 0.7;
    return [
      { url: absoluteUrl(pt), changeFrequency: 'monthly' as const, priority, alternates },
      { url: absoluteUrl(en), changeFrequency: 'monthly' as const, priority: priority * 0.9, alternates },
    ];
  });
}

import { products } from '@/lib/products';
import { CONTACT_EMAIL, CONTACT_WHATSAPP, SITE_URL, absoluteUrl } from '@/lib/site';

/**
 * JSON-LD da organização e do site. Serve tanto para o rich result de marca no
 * Google quanto para agentes de IA que leem a página como dado, não como layout.
 */
export function StructuredData() {
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Strategile Company',
      url: SITE_URL,
      email: CONTACT_EMAIL,
      telephone: `+${CONTACT_WHATSAPP}`,
      logo: absoluteUrl('/og.png'),
      image: absoluteUrl('/og.png'),
      description:
        'Consultoria, desenvolvimento de software sob medida e IA aplicada para automatizar processos e profissionalizar operações de empresas de vários setores.',
      areaServed: 'BR',
      address: { '@type': 'PostalAddress', addressCountry: 'BR' },
      knowsAbout: [
        'Software sob medida',
        'Automação de processos',
        'Integração com ERP',
        'Aplicativos mobile offline-first',
        'IA aplicada a dados corporativos',
      ],
      makesOffer: products.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: p.name,
          applicationCategory: 'BusinessApplication',
          description: p.copy.pt.essence,
          url: absoluteUrl(`/portfolio/${p.slug}/`),
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Strategile Company',
      inLanguage: ['pt-BR', 'en'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD estático, sem entrada de usuário
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}

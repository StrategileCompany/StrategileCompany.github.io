import type { Metadata } from 'next';
import { AgentesPage } from '@/components/agentes/AgentesPage';
import { dictionaries } from '@/lib/i18n/dictionary';
import { absoluteUrl, alternatesFor, localePath } from '@/lib/site';

const en = dictionaries.en;
const description = `${en.agentes.title} ${en.agentes.lead}`;

/**
 * Metadata própria da rota: `openGraph` + `alternates` declarados aqui, senão a
 * página herda og:url e canonical da home (gotcha "Metadata por rota", TECNICO.md).
 */
export const metadata: Metadata = {
  title: 'Agents',
  description,
  alternates: alternatesFor('en', '/agentes/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: absoluteUrl(localePath('en', '/agentes/')),
    siteName: 'Strategile Company',
    title: 'Agents · Strategile Company',
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Strategile Company' }],
  },
};

export default function AgentesRouteEn() {
  return <AgentesPage />;
}

import type { Metadata } from 'next';
import { AgentesPage } from '@/components/agentes/AgentesPage';
import { dictionaries } from '@/lib/i18n/dictionary';
import { absoluteUrl, alternatesFor, localePath } from '@/lib/site';

const pt = dictionaries.pt;
const description = `${pt.agentes.title} ${pt.agentes.lead}`;

/**
 * Metadata própria da rota: `openGraph` + `alternates` declarados aqui, senão a
 * página herda og:url e canonical da home (gotcha "Metadata por rota", TECNICO.md).
 */
export const metadata: Metadata = {
  title: 'Agentes',
  description,
  alternates: alternatesFor('pt', '/agentes/'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: absoluteUrl(localePath('pt', '/agentes/')),
    siteName: 'Strategile Company',
    title: 'Agentes · Strategile Company',
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Strategile Company' }],
  },
};

export default function AgentesRoute() {
  return <AgentesPage />;
}

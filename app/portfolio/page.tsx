import type { Metadata } from 'next';
import { PortfolioIndex } from '@/components/PortfolioIndex';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Oito produtos, oito operações diferentes — a tela inicial da Strategile Company.',
};

export default function PortfolioPage() {
  return <PortfolioIndex />;
}

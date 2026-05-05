import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Capabilities } from '@/components/Capabilities';
import { PortfolioShowcase } from '@/components/PortfolioShowcase';
import { CtaBlock } from '@/components/CtaBlock';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Capabilities />
      <PortfolioShowcase />
      <CtaBlock />
    </>
  );
}

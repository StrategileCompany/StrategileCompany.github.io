import { HomeScene } from '@/components/home/HomeScene';
import { Manifesto } from '@/components/home/Manifesto';
import { Capabilities } from '@/components/home/Capabilities';
import { CtaSection } from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      <HomeScene />
      <Manifesto />
      <Capabilities />
      <CtaSection />
    </>
  );
}

import { HomeScene } from '@/components/home/HomeScene';
import { Manifesto } from '@/components/home/Manifesto';
import { Capabilities } from '@/components/home/Capabilities';
import { Proof } from '@/components/home/Proof';
import { Process } from '@/components/home/Process';
import { CtaSection } from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      <HomeScene />
      <Manifesto />
      <Proof />
      <Capabilities />
      <Process />
      <CtaSection />
    </>
  );
}

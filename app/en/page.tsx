import type { Metadata } from 'next';
import { HomeScene } from '@/components/home/HomeScene';
import { Manifesto } from '@/components/home/Manifesto';
import { Capabilities } from '@/components/home/Capabilities';
import { Proof } from '@/components/home/Proof';
import { Process } from '@/components/home/Process';
import { CtaSection } from '@/components/home/CtaSection';
import { dictionaries } from '@/lib/i18n/dictionary';
import { absoluteUrl, alternatesFor, localePath } from '@/lib/site';

const en = dictionaries.en;

export const metadata: Metadata = {
  title: 'Strategile Company — Custom software',
  description: en.meta.description,
  alternates: alternatesFor('en', '/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: absoluteUrl(localePath('en', '/')),
    siteName: 'Strategile Company',
    title: 'Strategile Company — Custom software',
    description: en.meta.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Strategile Company' }],
  },
};

export default function HomePageEn() {
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

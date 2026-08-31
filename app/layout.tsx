import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { Analytics } from '@/components/Analytics';
import { SITE_URL, absoluteUrl, alternatesFor } from '@/lib/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Strategile Company — Software sob medida',
    template: '%s · Strategile Company',
  },
  description:
    'Consultoria, desenvolvimento de software sob medida e IA aplicada para automatizar processos e profissionalizar operações de empresas de vários setores.',
  applicationName: 'Strategile Company',
  authors: [{ name: 'Strategile Company' }],
  keywords: [
    'Strategile',
    'software sob medida',
    'consultoria de software',
    'automação de processos',
    'SaaS multi-tenant',
    'aplicativos mobile',
    'IA aplicada',
    'engenharia de software',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: absoluteUrl('/'),
    siteName: 'Strategile Company',
    title: 'Strategile Company — Software sob medida',
    description:
      'Consultoria, desenvolvimento de software sob medida e IA aplicada para automatizar processos e profissionalizar operações de empresas de vários setores.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Strategile Company — Software sob medida para o problema que é só seu.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategile Company',
    description: 'Software sob medida para o problema que é só seu.',
    images: ['/og.png'],
  },
  alternates: alternatesFor('pt', '/'),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink-950 text-bone-100 grain">
        <LanguageProvider>
          <SmoothScroll>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bone-50 focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded"
            >
              Pular para o conteúdo
            </a>
            <Header />
            <main id="main" className="relative z-10">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}

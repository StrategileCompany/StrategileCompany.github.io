import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { Analytics } from '@/components/Analytics';
import { SITE_URL, absoluteUrl, alternatesFor } from '@/lib/site';
import './globals.css';

/**
 * As fontes moram no repositorio, e nao em `next/font/google`.
 *
 * O `next/font/google` baixa o arquivo durante o BUILD. Rede ruim no runner
 * derrubava o deploy inteiro, e o push parecia ter dado certo — duas vezes o
 * site ficou no ar com a versao anterior sem ninguem notar. Com os .woff2
 * versionados, o build nao depende mais da internet.
 *
 * Sao os mesmos arquivos que o Google serve para o subconjunto latino, em
 * formato variavel: um por familia e estilo, cobrindo toda a faixa de peso.
 */
const fraunces = localFont({
  variable: '--font-fraunces',
  display: 'swap',
  src: [
    { path: './fonts/fraunces-normal.woff2', weight: '300 700', style: 'normal' },
    { path: './fonts/fraunces-italic.woff2', weight: '300 700', style: 'italic' },
  ],
});

const inter = localFont({
  variable: '--font-inter',
  display: 'swap',
  src: [{ path: './fonts/inter-normal.woff2', weight: '300 600', style: 'normal' }],
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

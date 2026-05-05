import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
  metadataBase: new URL('https://strategilecompany.com.br'),
  title: {
    default: 'Strategile Company — Software de impacto operacional',
    template: '%s · Strategile Company',
  },
  description:
    'Estudio de engenharia que constroi plataformas para varejo, vendas e gestao financeira. Oito produtos em producao, milhares de usuarios ativos.',
  applicationName: 'Strategile Company',
  authors: [{ name: 'Strategile Company' }],
  keywords: [
    'Strategile',
    'software para varejo',
    'gestao financeira',
    'SaaS B2B',
    'engenharia de software',
    'PDV mobile',
    'gestao eclesiastica',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://strategilecompany.com.br',
    siteName: 'Strategile Company',
    title: 'Strategile Company — Software de impacto operacional',
    description:
      'Estudio de engenharia que constroi plataformas para varejo, vendas e gestao financeira.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategile Company',
    description: 'Software de impacto operacional.',
  },
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
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bone-50 focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

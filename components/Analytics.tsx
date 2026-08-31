import Script from 'next/script';

/**
 * Analytics opcional, escolhido por variável de ambiente no build.
 *
 * O site é estático (GitHub Pages), então a decisão acontece em build-time —
 * as variáveis entram como secrets/vars do repositório e o Actions as injeta.
 *
 *   NEXT_PUBLIC_UMAMI_URL + NEXT_PUBLIC_UMAMI_ID   → Umami (sem cookie)
 *   NEXT_PUBLIC_GA_ID                              → Google Analytics 4
 *
 * Sem nenhuma delas o componente não emite nada — nem script, nem requisição.
 */
export function Analytics() {
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (umamiUrl && umamiId) {
    return <Script src={umamiUrl} data-website-id={umamiId} strategy="afterInteractive" defer />;
  }

  if (gaId) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
        </Script>
      </>
    );
  }

  return null;
}

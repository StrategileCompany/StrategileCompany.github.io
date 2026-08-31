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

/**
 * Domínios autorizados a reportar. Sem esta trava o Umami aceitaria eventos de
 * qualquer origem com o mesmo id — o preview local e o `out/` aberto na máquina
 * de alguém entrariam na mesma conta, e o id, que é público, poderia ser usado
 * para injetar tráfego falso de fora.
 */
const TRACKED_DOMAINS = 'www.strategilecompany.com.br,strategilecompany.com.br';
export function Analytics() {
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (umamiUrl && umamiId) {
    return (
      <Script
        src={umamiUrl}
        data-website-id={umamiId}
        data-domains={TRACKED_DOMAINS}
        strategy="afterInteractive"
        defer
      />
    );
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

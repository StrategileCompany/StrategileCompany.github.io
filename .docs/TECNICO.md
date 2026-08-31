# TECNICO — StrategileCompany

## Stack

- **Next.js 14** (App Router, `output: export` — site 100% estático)
- **Tailwind CSS 3.4** + tokens próprios (ink/bone/gold, escala editorial, easings nomeados)
- **framer-motion 11** — toda a coreografia (scroll-driven via `useScroll`+`useTransform`+`useSpring`)
- **lenis** — smooth scroll (desativado sob `prefers-reduced-motion`)
- **figma-squircle** — path do squircle iOS real (cornerSmoothing 0.6) para os ícones
- WebGL puro (sem three.js) no shader de fundo (`components/ShaderBackdrop.tsx`)

## Como rodar

```bash
npm install
npm run dev        # porta 3200
npm run typecheck && npm run lint
npm run build      # gera out/ (estático) e roda scripts/fix-lang.mjs
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`): push na `main` → typecheck + lint + build →
GitHub Pages. Domínio: **https://www.strategilecompany.com.br** (o apex faz 301 para o `www`;
todo link absoluto aponta para o `www`). O `public/CNAME` acompanha o artefato.

### Analytics — Umami self-hosted

Rodando desde 2026-08-31 em https://umami.168-75-103-63.sslip.io (VPS openclaw, contêiner em
`~/umami`, Caddy → `127.0.0.1:3213`). Sem cookie, então o site não precisa de banner de consentimento.

Os valores vivem em `.env.production`, **versionado de propósito**: o `src` do script e o
`data-website-id` aparecem no HTML de todo visitante, logo não são segredo, e versioná-los é o
que faz o deploy do Pages funcionar sem variável cadastrada no Actions. Senha do admin e do banco
ficam só em `~/umami/.env` na VPS.

`components/Analytics.tsx` injeta o script com
`data-domains=www.strategilecompany.com.br,strategilecompany.com.br` — sem essa trava o preview
local entraria na mesma conta, e o id público serviria para forjar tráfego de fora. O componente
também aceita `NEXT_PUBLIC_GA_ID` (GA4) como alternativa, e não emite nada se nada for configurado.

Operação e pendências (o banco não tem backup) em `~/umami/README.md`.

## Arquitetura

```
lib/products.ts            # fonte de verdade dos 10 produtos (cores reais, copy PT/EN, stack)
lib/site.ts                # host canônico, contatos, rotas e helper de hreflang
lib/i18n/                  # dicionário PT/EN + LanguageProvider (rota > localStorage > navigator)
app/robots.ts, sitemap.ts  # SEO gerado a partir de lib/site.ts
app/en/**                  # o site inteiro em inglês, com URL própria
components/icons/AppIcon.tsx       # 10 ícones SVG autorais em squircle iOS
components/device/IphoneFrame.tsx  # frame de iPhone CSS (telas 390×844 escaladas via ResizeObserver)
components/device/screens.tsx      # 10 telas-mock fiéis aos apps reais
components/home/HomeScene.tsx      # set-piece: hero + montagem da grade + iPhone interativo
components/home/{Manifesto,Proof,Capabilities,Process,CtaSection}.tsx
components/StructuredData.tsx      # JSON-LD Organization + WebSite
components/ProductLanding.tsx      # landing por produto (/portfolio/[slug])
components/ShaderBackdrop.tsx      # fragment shader 2D (fbm simplex, ink+gold)
scripts/fix-lang.mjs               # pós-build: <html lang="en"> nas páginas de /en
```

## Gotchas

- **A cena assume `products.length`.** `SCATTER` (posições do hero) precisa ter uma entrada por
  produto, e `GRID_COLS × GRID_ROWS` precisa comportar todos. Hoje: 10 produtos, grade 5×2. Uma
  posição faltando vira `undefined` e derruba a cena inteira. Ao passar de dez, acrescente uma
  linha em `GRID_ROWS`.
- **HomeScene** decide entre `DesktopScene` (≥1024px, cena sticky de 250vh) e `StackedScene`
  (mobile/reduced-motion) após mount — o HTML SSG é o stacked.
- **pointer-events na cena**: opacity 0 NÃO desliga pointer events. O hero CTA e o contêiner
  do iPhone usam pointer-events dirigidos por motion values/classes para não roubar o hover
  dos ícones (bugs já corrigidos — não regredir).
- O transform de centralização do iPhone vive num div INTERNO (o framer sobrescreve o
  transform do contêiner que ele anima).
- Telas-mock são desenhadas em 390×844 px fixos e escaladas — nunca usar unidades relativas
  dentro delas.
- **Metadata por rota.** `generateMetadata` de cada landing precisa declarar `openGraph` e
  `alternates`. Sem isso a página herda o og:url e a og:image da home, e compartilhar um produto
  mostra o card genérico da empresa (bug corrigido em 2026-08-31).
- **`<html lang>` vive num root layout único**, então o Next emite `pt-BR` também em `/en`.
  `scripts/fix-lang.mjs` reescreve o atributo depois do build — é o que o crawler lê.
- As cores de cada produto vêm do código-fonte REAL de cada app: Strategile ciano/slate,
  AppIgreja azul-Bíblia, SmartScan teal+dourado, TantaGrana verde Wise (#163300/#9FE870),
  TaMarkado azul→violeta, Xpid azul, Layer 1 midnight ciano, Roteiro navy/ciano/areia,
  2aFinder laranja `--color-accent` + verde `--color-signal`, Transcribr papel #F6F3ED + âmbar #E2A03F.

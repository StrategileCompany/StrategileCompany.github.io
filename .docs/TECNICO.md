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
npm run build      # gera out/ (estático)
```

Preview local na VPS: `python3 -m http.server 3200 --directory out/` já roda via processo
existente → http://strategile-v1.168.75.103.63.nip.io/ (Caddy).

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`): push na `main` → typecheck + lint + build → GitHub Pages.

## Arquitetura

```
lib/products.ts            # fonte de verdade dos 8 produtos (cores reais, copy PT/EN, stack)
lib/i18n/                  # dicionário PT/EN + LanguageProvider (localStorage + navigator)
components/icons/AppIcon.tsx       # 8 ícones SVG autorais em squircle iOS
components/device/IphoneFrame.tsx  # frame de iPhone CSS (telas 390×844 escaladas via ResizeObserver)
components/device/screens.tsx      # 8 telas-mock fiéis aos apps reais
components/home/HomeScene.tsx      # set-piece: hero + montagem da grade + iPhone interativo
components/home/{Manifesto,Capabilities,CtaSection}.tsx
components/ProductLanding.tsx      # landing por produto (/portfolio/[slug])
components/ShaderBackdrop.tsx      # fragment shader 2D (fbm simplex, ink+gold)
```

## Gotchas

- **HomeScene** decide entre `DesktopScene` (≥1024px, cena sticky de 340vh) e `StackedScene`
  (mobile/reduced-motion) após mount — o HTML SSG é o stacked.
- **pointer-events na cena**: opacity 0 NÃO desliga pointer events. O hero CTA e o contêiner
  do iPhone usam pointer-events dirigidos por motion values/classes para não roubar o hover
  dos ícones (bugs já corrigidos — não regredir).
- O transform de centralização do iPhone vive num div INTERNO (o framer sobrescreve o
  transform do contêiner que ele anima).
- Telas-mock são desenhadas em 390×844 px fixos e escaladas — nunca usar unidades relativas
  dentro delas.
- As cores de cada produto vêm do código-fonte REAL de cada app (descoberta 2026-06-11):
  Strategile ciano/slate, AppIgreja azul-Bíblia, SmartScan teal+dourado, TantaGrana verde
  Wise (#163300/#9FE870), TaMarkado azul→violeta, Xpid azul, layerOne midnight ciano/âmbar,
  Roteiro navy/ciano/areia.

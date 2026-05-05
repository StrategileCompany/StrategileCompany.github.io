# Strategile Company — Site Institucional

Site institucional da Strategile Company. Estatico (SSG), bilingue PT/EN, hospedagem em Cloudflare Pages.

**Producao**: `strategilecompany.com.br`

---

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript 5**
- **Tailwind CSS 3.4** com design system editorial customizado (paleta `ink` + `bone` + `gold`)
- **Framer Motion 11** — animacoes 3D, reveal-by-word, layout transitions
- **Lucide Icons** — set de icones consistente
- **next/font** com Fraunces (serif display) + Inter (sans corpo)
- Build estatico via `output: 'export'` — deploy em Cloudflare Pages, S3, Vercel, etc.

## Como rodar localmente

Requisitos: Node 20+, npm.

```bash
npm install
npm run dev          # http://localhost:3200
```

Outros comandos:

```bash
npm run lint         # eslint (next/core-web-vitals)
npm run typecheck    # tsc --noEmit
npm run build        # build estatico em ./out
npm start            # serve o build (.next standalone)
```

Para servir o `out/` localmente como estaria em producao:

```bash
npx serve out -p 3201
```

## Estrutura de pastas

```
StrategileCompany/
├── app/
│   ├── layout.tsx                 # root layout: Fraunces + Inter, metadata, providers
│   ├── globals.css                # tokens, grain, scrollbar, focus styles
│   ├── page.tsx                   # landing
│   ├── not-found.tsx              # 404
│   ├── portfolio/
│   │   ├── page.tsx               # grid com filtros (all/production/development/concept)
│   │   └── [slug]/page.tsx        # detalhe — generateStaticParams nos 8 slugs
│   ├── sobre/page.tsx             # manifesto + time
│   └── contato/page.tsx           # form + email direto
├── components/
│   ├── Header.tsx                 # sticky + drawer mobile + LangToggle
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── LangToggle.tsx             # PT/EN persistido em localStorage
│   ├── Hero.tsx                   # display gigante + reveal-by-word + parallax
│   ├── Manifesto.tsx
│   ├── Capabilities.tsx
│   ├── PortfolioShowcase.tsx      # secao da home que envolve o coverflow
│   ├── PortfolioCoverflow.tsx     # coverflow 3D (scroll/drag/keys)
│   ├── PortfolioGrid.tsx          # grid filtravel da pagina /portfolio
│   ├── ProductMockup.tsx          # placeholder editorial reutilizavel
│   ├── ProductDetail.tsx          # pagina /portfolio/[slug]
│   ├── TeamCard.tsx               # monograma + bio
│   ├── ContactForm.tsx            # mailto, sem backend
│   ├── PageHeader.tsx
│   ├── RevealText.tsx             # Framer Motion split-words ou fade-up
│   ├── Button.tsx                 # primary/secondary/ghost, polymorphic link/button
│   └── CtaBlock.tsx
├── lib/
│   ├── cn.ts                      # clsx + tailwind-merge
│   ├── products.ts                # 8 produtos, bilingue, mockup colors
│   ├── team.ts                    # 3 socios, bilingue
│   └── i18n/
│       ├── dictionary.ts          # tipo Dict + dicionarios PT e EN
│       └── LanguageProvider.tsx   # context + localStorage + auto-detect navigator
├── tailwind.config.ts             # paleta ink/bone/gold + escala tipografica + easings
├── next.config.mjs                # output:'export', trailingSlash, images.unoptimized
├── tsconfig.json
└── postcss.config.mjs
```

## Design system

### Paleta (dark first, editorial premium)

- `ink-950` (#0A0A0A) — background base, off-black quente
- `ink-900..600` — surfaces, hierarquia de fundo
- `bone-50/100/200/300` (#FAF7F0..#E0D7C5) — texto sobre dark, off-white quente
- `gold-300` (#C9A96B) — UNICO acento — usado em links, eyebrows, dot ativos, focus ring
- **Sem roxo/violet/indigo.** Sem azul-AI. Sem gradientes neon.

### Tipografia

- **Display/headings**: Fraunces (serif, 300/400/500/600/700, italic disponivel) — usado em H1/H2/H3, hero, mockups
- **Corpo**: Inter (sans, 300/400/500/600) — usado em paragrafos, navegacao, micro
- **Hierarquia**: `eyebrow` (0.75rem, tracking 0.16em) → `caption` → `body` → `body-lg` → `h3` → `h2` → `h1` → `display` → `hero` (clamp para responsivo natural)

### Espacamento

8pt baseline. Escala usada: 4/6/8/10/12/16/20/24/32/40/48/56/64/72/96/128px.

### Easings padronizados

- `ease-apple` (0.25, 0.46, 0.45, 0.94) — interacoes de UI
- `ease-editorial` (0.16, 1, 0.3, 1) — reveals e entradas grandes
- `ease-spring` (0.34, 1.56, 0.64, 1) — micro bounce em elementos pequenos

## Como adicionar um novo produto

1. Abra `lib/products.ts` e adicione um novo objeto ao array `products`. Exemplo minimo:

```ts
{
  slug: 'novo-produto',
  name: 'Novo Produto',
  category: { pt: 'Categoria PT', en: 'Category EN' },
  stack: ['Stack item 1', 'Stack item 2'],
  status: 'production', // 'production' | 'development' | 'concept'
  color: { from: '#1F2937', to: '#0B1220', ink: 'light', accent: '#C9A96B' },
  copy: {
    pt: {
      tagline: 'Tagline curta em PT',
      shortDescription: '1 paragrafo resumido',
      longDescription: ['Paragrafo 1', 'Paragrafo 2'],
      metric: 'Opcional — metrica de destaque',
      clients: 'Opcional — segmentos atendidos',
    },
    en: { /* mesmo formato */ },
  },
  url: 'https://opcional.com',
}
```

2. A rota `/portfolio/<slug>` e gerada automaticamente via `generateStaticParams`. O coverflow da home, o grid e a navegacao prev/next se atualizam sem mais nada.
3. Rode `npm run build` e confirme que a nova pagina aparece em `out/portfolio/<slug>/index.html`.

## Como adicionar um novo idioma

Hoje sao PT e EN, com toggle persistido em `localStorage[strategile.locale]`.
Para um terceiro idioma:

1. Em `lib/i18n/dictionary.ts`, adicione `'es'` em `LOCALES` e em `dictionaries`.
2. Em `lib/products.ts`, adicione a chave `es` em `copy`.
3. Em `lib/team.ts`, adicione `es` em `bio` (e `expertise` se quiser).
4. Atualize `LangToggle.tsx` se quiser exibir tres botoes (hoje renderiza `pt` e `en` hardcoded — mude para `LOCALES.map`).

## Como deployar

### Cloudflare Pages (recomendado — alvo da producao)

- Build command: `npm run build`
- Output directory: `out`
- Node version: `20`
- Sem variaveis de ambiente necessarias.

```bash
# Manual via Wrangler:
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name=strategile-company
```

Apontar `strategilecompany.com.br` para o projeto Pages no painel da Cloudflare.

### Outras opcoes

- **Vercel**: detecta Next.js automaticamente. `output: 'export'` ja esta configurado, entao funciona como estatico.
- **S3 + CloudFront**: subir conteudo de `out/` para o bucket; configurar redirecao para `index.html` em paginas dinamicas.
- **Servidor estatico qualquer**: `npx serve out` ou Caddy/Nginx servindo a pasta.

## Acessibilidade & Performance

- Contraste WCAG AA em todo o texto principal (texto bone-100/85 sobre ink-950 = 14:1)
- Skip-to-content no topo do layout
- `prefers-reduced-motion` respeitado em todas as animacoes (Framer Motion `useReducedMotion`)
- Focus rings visiveis (`gold-300/60` com offset)
- Touch targets >= 44px no header/portfolio dots
- `next/font` com `display: swap` — sem layout shift de fonte
- Build totalmente estatico — sem JS no caminho critico alem do que o React precisa

## Conteudo & Copy

- Manifesto e copy editoriais em `lib/i18n/dictionary.ts`
- Bios do time em `lib/team.ts`
- Descricoes longas dos produtos em `lib/products.ts`
- **Para editar texto sem tocar codigo**: tudo esta em portugues e ingles em arquivos `.ts` planos. Use VS Code com busca global.

## Proximos passos sugeridos (apos handoff)

- [ ] Substituir monogramas dos socios por foto profissional (componente `TeamCard` ja tem o slot — basta trocar o `<div>` do monograma por `<Image>`)
- [ ] Substituir `ProductMockup` por screenshots reais quando os produtos forem fotografados (manter o mesmo aspect ratio 4/5 ou 16/9)
- [ ] Configurar dominio `strategilecompany.com.br` na Cloudflare Pages
- [ ] Plugar form de contato em servico real (FormSpree, Resend, ou rota Cloudflare Worker) — hoje o submit dispara mailto:
- [ ] Adicionar OG image custom (1200x630) em `public/og-image.png` e referenciar em `app/layout.tsx`
- [ ] Adicionar `sitemap.xml` e `robots.txt` em `public/`
- [ ] Substituir links sociais placeholder (`#`) por LinkedIn/GitHub/Instagram reais
- [ ] (Opcional) Plausible/Umami analytics — sem cookies, sem JS extra pesado

## Convencoes de codigo

- TypeScript strict mode — zero `any`
- Componentes client-side marcados explicitamente com `'use client'` no topo
- Arquivos `.tsx` para componentes, `.ts` para libs
- `cn()` (clsx + tailwind-merge) para todas as classNames condicionais
- Animacoes via Framer Motion `motion.*` ou variants — nunca CSS `@keyframes` direto fora de `globals.css`
- Texto SEMPRE bilingue — toda string nova vai em `dictionary.ts`

## Licenca

Codigo proprietario — Strategile Company.

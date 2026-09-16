# Divisão de venda de agentes — subpágina `/agentes` (T-011, T-012, T-013)
Data: 2026-09-16

## Objetivo
Construir `/agentes` e `/en/agentes` no site institucional **em branch, sem publicar**: pitch em
2 parágrafos na voz do estúdio, 3 cartas de exemplo com dados estáticos (sem preço), CTA único para
`https://agentes.strategilecompany.com.br/vitrine`, mais uma chamada menor na home. Publicar é
decisão do dono (T-019 pitch, T-018 preço).

## Decisões
- **Branch `feat/divisao-agentes` a partir de `origin/main` (b85b31c)**, nunca `main`. Medido
  antes do push: `.github/workflows/deploy.yml` publica só em `push: branches: [main]` +
  `workflow_dispatch` — push da branch não dispara o Pages.
- **Dados estáticos, não fetch.** `lib/agentes.ts` copia `nome`/`area`/`resumo` de
  `/api/vitrine/agentes` (HTTP 200, 3 cartas, `total: 3`, lido uma vez em 2026-09-16). Nenhum
  `fetch` em build/runtime. Sem `preco_mensal_centavos` (3/3 `null` e T-018 é do dono) e sem
  atributo numérico (congelaria medição). `cargo` omitido: traz hostname interno da VPS.
- **Pitch = rascunho de `.docs/MARKETING.md` §2**, em `lib/i18n/dictionary.ts` com comentário
  `RASCUNHO (T-019)`. Nenhuma das 4 frases proibidas do FAQ da vitrine entrou.
- **"Agentes" não entra na grade** (gotcha #1 do TECNICO: a cena assume `products.length`).
  Chamada na home é `AgentesCallout` entre `Capabilities` e `Process`, faixa + `MagneticButton`.
- **Metadata por rota** (gotcha 2026-08-31): as duas páginas declaram `alternates` e `openGraph`
  próprios via `alternatesFor()`/`absoluteUrl()`; rota entrou em `allRoutes()` (sitemap + hreflang),
  prioridade 0.8 no sitemap.
- Repo usa **npm** (`package-lock.json`, `npm ci` no workflow) — não há lockfile pnpm.

## Arquivos
- `lib/agentes.ts` — novo: `VITRINE_URL` + 3 cartas estáticas PT/EN
- `components/agentes/AgentesPage.tsx` — novo: hero, pitch, cartas, CTA
- `components/home/AgentesCallout.tsx` — novo: chamada menor na home
- `app/agentes/page.tsx`, `app/en/agentes/page.tsx` — novos: rotas + metadata própria
- `lib/i18n/dictionary.ts` — chaves `agentes` e `homeAgentes` (tipo + PT + EN)
- `lib/site.ts` — `/agentes/` em `allRoutes()`; `app/sitemap.ts` — prioridade 0.8
- `app/page.tsx`, `app/en/page.tsx` — `<AgentesCallout />` entre Capabilities e Process
- `.docs/BACKLOG.md` (T-011/012/013 em-andamento), `.docs/PRODUTO.md`, `.docs/MARKETING.md`

## Estado atual — PUBLICADO em 2026-09-16
- Dono aprovou T-019 (pitch = rascunho, sem alteração) e T-018 (cartas sem preço) e autorizou
  publicar. Merge `--no-ff` de `origin/feat/divisao-agentes` em `main`: **`ee7d1b3`**; `npm ci &&
  npm run build` verde no main mergeado antes do push.
- Pages: runs 35139040964 e 35139041192 (mesmo SHA) → `success`.
- Ao vivo (19:14 UTC): `/agentes/` 200, `/en/agentes/` 200, sem barra 301; `<title>` "Agentes ·
  Strategile Company" / "Agents · Strategile Company"; home com `href="/agentes/"`; sitemap com
  2 `<loc>` de agentes (`grep -c agentes` dá 6 por contar as linhas de `hreflang`).
- Branch remota `feat/divisao-agentes` apagada depois do 200 medido.

## Estado antes da publicação (histórico)
- `npm run typecheck` e `npm run lint` limpos; `npm run build` verde: 31 páginas, `out/agentes/`
  e `out/en/agentes/` gerados, sitemap 24 → 26 `<loc>`, `fix-lang` marcou 13 páginas `/en`.
- **Prova visual (Playwright, Chromium 1228 local, `out/` servido em 127.0.0.1:4173):** 6 PNGs em
  `<scratchpad>/site-agentes-{home,agentes,en-agentes}-{1280,390}.png`. Medido em 390 com
  `isMobile: true` + página-controle: controle `innerWidth` 390 = as 3 rotas 390; `scrollX` 0 após
  `scrollTo(9999,0)` e `scrollWidth` 390 nas 3 — zero rolagem lateral real e zero alargamento de
  viewport. Metadata por rota conferida no DOM: canonical/og:url `/agentes/` e `/en/agentes/`,
  og:locale `pt_BR`/`en_US`, hreflang `en` apontando para `/en/agentes/`, `<html lang>` certo.
- ~~Falta (decisão do dono): T-019 texto do pitch, T-018 preço, e publicar~~ — feito em 2026-09-16, ver acima.
- **Fora deste repo:** link de volta no rodapé da vitrine (T-013, repo `Cluster`).

## Problemas
- Heredoc no Git Bash da sessão quebra com `unexpected EOF` (CRLF no delimitador) — arquivos
  novos via ferramenta Write, edições via script Python com asserção de âncora única.
- `README.md` ainda diz "hospedagem em Cloudflare Pages" e lista componentes que não existem
  (`PortfolioCoverflow`, `PortfolioGrid`) — fora do escopo, não tocado; T-016 só corrigiu "8 produtos".

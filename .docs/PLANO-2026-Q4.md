# Plano de trabalho — StrategileCompany (site institucional) — 2026-Q4 (out–dez)

> Padrão da casa (2026-09-15). Um arquivo por repositório em `.docs/PLANO-2026-Q4.md`.
> Vivo no Hipocampo: resumo em `D:\Brain\system\plano-trabalho-2026-q4.md`; fila viva em
> `.docs/BACKLOG.md` (repo **não migrado** — não há `ISSUE-TRACKER.md`, e isso está correto).
> Revisar no fim de cada mês; o que mudou entra como T-NNN, nunca só aqui.

## 1. Situação em 2026-09-15 (medido)

- **Produção:** `https://www.strategilecompany.com.br` → **200** (`curl`, agora). Servido pelo
  **GitHub Pages** (`Server: GitHub.com`, CNAME → `strategilecompany.github.io`); o apex faz 301
  para o `www`. Repo `StrategileCompany/StrategileCompany.github.io`, **público**, branch `main`.
  A VPS openclaw **não serve o site** — medido em três lugares (`pm2 list`, `Caddyfile`, `crontab`).
  > Cuidado com o homônimo: `strategile.com.br` é o site do **produto Strategile**, não o
  > institucional. Confundir os dois já custou uma premissa errada na auditoria de hoje.
- **Fila:** `.docs/BACKLOG.md`, `Proximo ID: T-011` antes desta revisão → **T-020** depois.
  3 tasks ativas herdadas (T-006 pendente, T-007 pendente fora deste repo, T-008 ideia) + 7 novas
  desta rodada. **2 aguardando decisão do dono** (T-018 preço, T-019 pitch).
- **Automação ligada:** Actions `deploy.yml` (push em `main` → typecheck + lint + build → Pages);
  Umami self-hosted na VPS; `~/scripts/cron/umami-backup.sh` diário às 07:58. Detalhe na §7.
- **Estado dos docs:** `CLAUDE.md`, `CONCEITO.md`, `TECNICO.md`, `PRODUTO.md`, `BACKLOG.md`
  presentes e coerentes. `MARKETING.md` **criado nesta rodada** (não existia). `.docs/sessions/`
  ainda não existe — nasce no primeiro trabalho longo (T-011). `AGENTS.md` e `.mcp.json` ausentes,
  fora de escopo (§6).
- **Pendências pela metade encerradas nesta organização:**
  1. `git pull` do behind-1 (`1342007`, `.clusteros/STANDARDS.md` regenerado) — feito, `main` e
     `origin/main` em `0 0`.
  2. `TECNICO.md` dizia que o banco do Umami não tinha backup; tem desde 2026-08-31 (T-009) —
     corrigido no commit `448cc2a` (T-015).
  3. `README.md:77` dizia "8 produtos"; o site tem 10 desde 2026-08-31 — corrigido no mesmo
     commit (T-016).

### O achado que ordena o trimestre

A divisão de venda de agentes **não existe no site, em nenhuma forma**
(`grep -rniE 'agente|vitrine|sslip|frota' app components lib` — nenhuma ocorrência é rota, seção
ou link; `sslip` dá zero). Mas a vitrine **já está no ar e é pública**:

```
https://agentes.strategilecompany.com.br/vitrine -> 200, 238.587 bytes, TLS válido  (medido agora)
<title>Agentes Strategile — funcionários de IA que tocam setores inteiros
/admin -> 404   /api/frota/agentes -> 404   /api/vitrine/agentes -> 200 (público, sem auth)
```

Caddy `:706` com os três hosts e `bind 10.0.0.143`; upstream `cluster-web` na 3100. Zona DNS no
**Registro.br** (`d.sec.dns.br`/`e.sec.dns.br`), **não no Cloudflare** — as sessões do Cluster
tratam esse subdomínio como "pendência do dono" quando ele **já está feito**, exatamente o padrão
que produziu o caso da conta Apple. Custo para usar: **R$ 0,00, já foi pago.**

E a ligação não existe nas duas direções: `grep -oE 'href="[^"]+"'` no HTML da vitrine não traz
**nenhum** link para `www.strategilecompany.com.br`. Os dois sites não se conhecem.

## 2. Objetivo do trimestre (1 frase mensurável)

**Até 31/12/2026, a divisão de agentes tem endereço próprio no site institucional
(`/agentes` e `/en/agentes` respondendo 200), a home aponta para ela, e a vitrine aponta de volta
para o estúdio — os três links medidos por `curl`/`grep`, não declarados.**

Princípio que ordena a execução e não se negocia: **o site NÃO duplica a vitrine.** A vitrine é
app Next dinâmico com `revalidate 60` lendo `job_runs` do Postgres; o site é export estático no
Pages. Reproduzir cartas com número no estático congelaria medição e violaria a regra do
`PRODUTO.md` (*"Só afirmar o que está de pé"*). O site faz uma coisa: apresenta a divisão e
entrega o visitante à vitrine.

## 3. Métrica que diz se deu certo

| Métrica | Hoje (medido 2026-09-15) | Meta dez/2026 | Onde se mede |
|---|---|---|---|
| Rotas da divisão no site | **0** | 2 (`/agentes`, `/en/agentes`) | `curl -o /dev/null -w %{http_code}` |
| `<loc>` no `sitemap.xml` | **24** (12 rotas × 2 idiomas) | 26 | `curl .../sitemap.xml \| grep -c '<loc>'` |
| Links home → `/agentes` | **0** | 1 (faixa entre Capabilities e Process) | `grep href` no HTML publicado |
| Links vitrine → institucional | **0** (só a URL da imagem OG) | 1 (rodapé) | `grep -oE 'href="[^"]+"'` na vitrine |
| Sessões em `/agentes` | — (rota inexistente) | baseline de 30 dias fechado | Umami (`data-domains` já trava o domínio) |
| Cartas publicadas na vitrine | **3** (`agent.strategile`, `agent.bugs`, `agent.vps`) | 3 com preço decidido | `/api/vitrine/agentes` |
| Cartas com `preco_mensal_centavos` | **0 de 3** (3/3 `null`) | decisão do dono aplicada | idem |
| Clones mortos do site na VPS | **~1,0 GB** em 4 diretórios | 0 (após conferência) | `du -sh ~/projects/StrategileCompany*` |

## 4. Ordem de trabalho (10 itens no máximo)

| # | Item (problema do usuário) | Tamanho | Task | Mês |
|---|---|---|---|---|
| 1 | A documentação trata como pendente um subdomínio que já está no ar | PP | T-014 | out |
| 2 | O site não fala a mesma língua comercial da vitrine | P | T-019 | out |
| 3 | Quem visita o site não descobre que a Strategile vende agentes de IA | M | T-011 | out |
| 4 | A home não oferece caminho para a divisão de agentes | P | T-012 | out–nov |
| 5 | Quem chega pela vitrine não descobre o estúdio que a construiu | PP | T-013 (repo Cluster) | nov |
| 6 | Quatro clones do site ocupam ~1 GB numa VPS com swap cheio | P | T-017 | nov |
| 7 | O site não está registrado no Google Search Console | P | T-006 | nov |
| 8 | As cartas da vitrine mostram preço "sob consulta" e barra vazia | M | T-018 (repo Cluster) | dez |
| 9 | A prova do site é só número agregado, sem imagem de sistema real | P | T-008 | dez |

Ordem deliberada: **T-014 e T-019 vêm antes da página** porque custam minutos e evitam que
`/agentes` nasça em cima de documento errado e de texto inventado na hora.

### Amarras de implementação de T-011 (medidas, não deduzidas)

- **Toda rota nasce em duplicata.** Não existe `app/[locale]`: o PT vive na raiz e o EN sob `/en`,
  com os mesmos componentes. `/agentes/` **e** `/en/agentes/`.
- A rota precisa entrar em `lib/site.ts:allRoutes()` — sem isso fica fora do `sitemap.xml` e do
  `hreflang`.
- Chaves novas nas duas línguas em `lib/i18n/dictionary.ts`.
- `openGraph` + `alternates` próprios na rota (gotcha "Metadata por rota" do `TECNICO.md`; bug já
  corrigido uma vez em 2026-08-31 — **não regredir**).
- **"Agentes" NÃO vira o 11º ícone da grade.** `SCATTER` precisa de uma entrada por produto e
  `GRID_COLS × GRID_ROWS` precisa comportar todos; posição faltando vira `undefined` e derruba a
  cena inteira. E conceitualmente é divisão de serviço, não produto do portfólio.
- Se `/agentes` mudar de endereço depois, o padrão é o stub de `public/` com `meta refresh` +
  `canonical` + `noindex` (T-010), porque `output: export` não suporta `redirects()`.

## 5. Depende do dono

- ~~**Texto do pitch da divisão**~~ → T-019, T-011: **aprovado pelo dono em 2026-09-16** (rascunho de
  `.docs/MARKETING.md` §2 sem alteração) e publicado em `ee7d1b3`.
- ~~**Preço dos agentes**~~ → T-018: **decidido pelo dono em 2026-09-16 — opção (i), cartas sem preço
  no site.** Registro do conflito que existia: o `PRODUTO.md` manda *"Nunca exibir preços"* no institucional, e a vitrine tem seção
  de preço. Opções: (i) preço só na vitrine e o site nunca mostra número — **recomendado**;
  (ii) preço nos dois, com exceção escrita no `PRODUTO.md`; (iii) "sob consulta" nos dois.
- **FAQ da vitrine** → T-018/T-013. A sessão de 06/09 do Cluster marca 4 frases como promessas
  **não medidas** (isolamento entre empresas, dados não treinam modelo, "nunca vemos sua senha",
  termos de contrato). Mandar tráfego do institucional para elas é assinar embaixo: ou se corrige
  o FAQ, ou se linka sabendo disso.
- **Confirmar `agentes.strategilecompany.com.br` como endereço definitivo** → T-014. Se sim,
  `agentes.blackfindr.com.br` (hoje **NXDOMAIN**) sai do bloco do Caddy e da documentação.
- **Posição da faixa na home** → T-012. Sugerido entre `Capabilities` e `Process`, porque
  `Capabilities` já traz *"IA aplicada ao negócio"* (`dictionary.ts:164`) e a divisão é o
  aprofundamento natural dele. Decisão editorial.
- **Verificação de propriedade no Search Console** → T-006. Só o dono pode verificar o domínio.
- **Renomear o repositório `Rosetta` → Layer 1** → T-007. Marcado "o dono fará na máquina local".
- **Rotina Infantil**: 4 páginas legais vivem neste repo sem estar no portfólio. Fica assim, vira
  produto nº 11 (exige mexer em `GRID_ROWS`) ou muda de casa?

## 6. Fora de escopo neste trimestre

- **Fetch build-time da API da vitrine.** Tecnicamente funciona (`/api/vitrine/agentes` responde
  200 sem auth), mas os dados de hoje não sustentam a página — 3 cartas, 3/3 sem preço, 2 de 18
  atributos sem valor, incluindo `confiabilidade` do `agent.strategile` (5 execuções decididas
  contra um mínimo de 20). Pior: `output: export` resolve o fetch **no build**, então VPS fora do
  ar = **deploy do site quebrado**. Fica para quando houver preço e ≥20 execuções por carta, e
  mesmo aí com `try/catch` + fallback estático.
- **Onda 2 (runner multi-tenant), Onda 3 (gestão), cota do `/ensaio`, revogação por `status`.**
  São do repo Cluster e **travam o primeiro cliente, não a página** — a vitrine já vende "sob
  consulta" na internet aberta há dias; linkar não expõe nada novo.
- **Preço no site institucional** — enquanto a regra do `PRODUTO.md` valer.
- **"Agentes" como 11º produto do portfólio** — ver §4.
- **Causa da falha de deploy de 2026-08-06** (25m40s contra ~1m20s do normal). Não investigada;
  os deploys seguintes passaram e o site está no ar. Volta ao radar se repetir.
- **`AGENTS.md` e `.mcp.json`** — ausentes e não exigidos pelo `.clusteros/STANDARDS.md` §2.

## 7. Automação e agentes ligados ao projeto

| Nome | Onde roda | Horário | Owner | KPI | Estado |
|---|---|---|---|---|---|
| `deploy.yml` (Pages) | GitHub Actions, `ubuntu-latest` | push em `main` / `workflow_dispatch` | Geraldo | build verde em ~1m20s | **Ativo.** 10 runs, 9 success / 1 failure (2026-08-06). **Custo zero: o repo é público** — `ubuntu-latest` aqui não viola `custo-zero-por-padrao.md` |
| Umami (analytics) | VPS openclaw, contêiner `~/umami`, Caddy → `127.0.0.1:3213` | contínuo | Geraldo | sessões por rota, sem cookie | **Ativo** (`docker ps` → `healthy`). `data-domains` trava os domínios do site |
| `umami-backup.sh` | VPS, cron | diário 07:58 | Geraldo | dump > 1 KB, retenção 14 dias | **Ativo por registro** (T-009, restauração testada). *Não conferi a execução de hoje* |
| Vitrine `cluster-web` | VPS, pm2 na 3100 → Caddy `:706` | contínuo, `revalidate 60` | Cluster | `/vitrine` 200 | **Ativo** — medido 200 / 238.587 bytes agora |
| — (sem cron próprio do site) | — | — | — | — | O site institucional **não tem job próprio**; os 4 clones em `~/projects/StrategileCompany*` são inertes (T-017) |

---

### Apêndice — o que ficou medido e o que não

**Medido nesta rodada (2026-09-15):** `curl` em `www.strategilecompany.com.br` (200) e em
`agentes.strategilecompany.com.br/vitrine` (200, 238.587 B, TLS válido, título conferido);
`git log`, `git status --short` (limpo), `git rev-list --left-right --count main...origin/main`
(`0 0`); `git show --stat 448cc2a`; leitura integral de `.docs/{CONCEITO,TECNICO,PRODUTO,BACKLOG}.md`.

**Herdado da auditoria de hoje** (medições dela, não repetidas por mim): estado da VPS
(`pm2`, `docker ps`, `Caddyfile`, `crontab`, `du -sh`, `free -h`), `nslookup`, `gh repo view`,
`gh run list`, `/api/vitrine/agentes`, `grep` no HTML da vitrine.

**Não conferido:** se o cron do backup do Umami rodou hoje; o banco `agentes.*` na VPS (só a API
pública); referências aos clones da VPS fora do `crontab` do `ubuntu` — **conferir antes** de
arquivar (T-017); causa da falha de deploy de 2026-08-06; termos de uso das assinaturas que rodam
o cérebro dos agentes.

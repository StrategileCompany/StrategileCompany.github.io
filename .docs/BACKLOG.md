# BACKLOG — StrategileCompany

Ultima Revisao: 2026-09-16
Sprint Ativo: —
Proximo ID: T-020

---

## Tasks Ativas

### T-006 — Registrar o site no Google Search Console
- **Status:** pendente
- **Descricao:** o `sitemap.xml` e o `robots.txt` passaram a existir em 2026-08-31. Falta
  verificar a propriedade `www.strategilecompany.com.br` e submeter o sitemap para o Google
  começar a indexar as rotas PT e EN.

### T-007 — Renomear o repositório Rosetta para Layer 1
- **Status:** pendente (fora deste repositório)
- **Descricao:** o nome público já é *Layer 1* em todo o site. O repositório `Rosetta` ainda usa
  o nome antigo em pastas, README e URL de preview. O dono fará a renomeação na máquina local —
  não mexer daqui.

### T-008 — Foto/prova visual dos sistemas em operação
- **Status:** ideia
- **Descricao:** a faixa de prova hoje usa números agregados. Com autorização de um ou dois
  clientes, uma linha de logos ou uma frase atribuída aumentaria bastante a conversão. Depende
  de conversa comercial, não de código.

### T-014 — A documentação trata como pendente um subdomínio que já está no ar
- **Status:** pendente
- **Tamanho:** PP
- **Criado:** 2026-09-15
- **Descricao:** `agentes.strategilecompany.com.br` resolve para 168.75.103.63 com TLS válido e
  serve a vitrine (Caddyfile:706, `bind 10.0.0.143`), mas as sessões do Cluster ainda o listam
  como pendência do dono; corrigir a sessão de 2026-09-06 e **subir o fato para
  `~/.claude/rules/`**, porque subdomínio de empresa é infra compartilhada e não memória de
  projeto.

### T-017 — Quatro clones do site ocupam ~1 GB numa VPS com swap cheio
- **Status:** pendente
- **Tamanho:** P
- **Criado:** 2026-09-15
- **Descricao:** `~/projects/StrategileCompany{,-v2,-v3,-v4}` somam ~1,0 GB e nada na VPS serve o
  site (o Pages serve); `free -h` mostra swap em 7,8 de 8,0 GiB — **conferir antes** se algum
  systemd timer, outro crontab ou job do Company OS referencia esses caminhos, e só então
  arquivar.

---

## Historico

### T-019 — O site não fala a mesma língua comercial da vitrine
- **Status:** concluido
- **Concluido:** 2026-09-16 — aprovado pelo dono em 2026-09-16: **pitch = rascunho aprovado** sem
  alteração (`.docs/MARKETING.md` §2 / `lib/i18n/dictionary.ts`). Publicado em ee7d1b3.
- **Tamanho:** P
- **Criado:** 2026-09-15
- **Descricao:** `.docs/MARKETING.md` nasceu em 2026-09-15 com o pitch da divisão de agentes em
  **rascunho marcado "a validar com o dono"** — enquanto ele não validar o texto, `/agentes` não
  tem o que dizer, porque tudo ali é promessa em nome da Strategile.

### T-018 — As cartas da vitrine mostram preço "sob consulta" e barra vazia
- **Status:** concluido — decisão tomada
- **Concluido:** 2026-09-16 — aprovado pelo dono em 2026-09-16: **cartas sem preço no site** (como
  está); preço, se houver, fica só na vitrine (repo `Cluster`). Publicado em ee7d1b3.
- **Tamanho:** M
- **Criado:** 2026-09-15
- **Descricao:** `/api/vitrine/agentes` traz 3 cartas com `preco_mensal_centavos: null` em 3 de 3
  e 2 de 18 atributos sem valor (inclusive `confiabilidade` do `agent.strategile`, com 5
  execuções decididas contra um mínimo de 20) — **depende da decisão do dono sobre preço**, que
  colide com a regra do `PRODUTO.md` de nunca exibir preços no institucional.

### T-013 — Quem chega pela vitrine não descobre o estúdio que a construiu
- **Status:** concluido (lado do site)
- **Concluido:** 2026-09-16 — ee7d1b3. **Só o lado do site** (a porta `/agentes` → vitrine) está
  publicado; **o link de volta no rodapé da vitrine continua por fazer no repo `Cluster`** — não
  foi tocado aqui e não é rastreado por este backlog.
- **Tamanho:** PP
- **Criado:** 2026-09-15
- **Descricao:** o HTML da vitrine não tem **nenhum** link para `www.strategilecompany.com.br`
  (medido por `grep -oE 'href="[^"]+"'`, 2026-09-15); falta o link de volta no rodapé. **O
  trabalho vive em `cluster-web`, não neste repositório** — aqui é só referência cruzada, para o
  plano do site não perder de vista a outra metade da ligação.

### T-012 — A home não oferece caminho para a divisão de agentes
- **Status:** concluido
- **Concluido:** 2026-09-16 — ee7d1b3 (home ao vivo com `href="/agentes/"`, medido 19:14 UTC)
- **Feito:** `components/home/AgentesCallout.tsx` entre `<Capabilities />` e
  `<Process />` em `app/page.tsx` e `app/en/page.tsx` (chaves `homeAgentes`). Faixa + botão, sem
  cartas nem números — não é ícone da grade.
- **Tamanho:** P
- **Criado:** 2026-09-15
- **Descricao:** faixa de uma linha + `MagneticButton` entre `<Capabilities />` e `<Process />`,
  nas duas línguas, sem cartas nem números — a home não pode virar vitrine. Depende de T-011.

### T-011 — Quem visita o site não descobre que a Strategile vende agentes de IA
- **Status:** concluido
- **Concluido:** 2026-09-16 — ee7d1b3 (merge de `feat/divisao-agentes` em `main`; Pages runs 35139040964 e 35139041192 `success`; `/agentes/` e `/en/agentes/` medidos 200 às 19:14 UTC)
- **Pitch:** veio de `.docs/MARKETING.md` §2 e vive em `lib/i18n/dictionary.ts` (`agentes`, PT e EN);
  **aprovado pelo dono em 2026-09-16** (T-019), sem alteração do rascunho.
  As 3 cartas (`lib/agentes.ts`) copiam nome/área/resumo de `/api/vitrine/agentes` lidos uma vez
  em 2026-09-16 — sem fetch, sem preço, sem atributo numérico.
- **Tamanho:** M
- **Criado:** 2026-09-15
- **Descricao:** criar a subpágina `/agentes` e `/en/agentes` com pitch, 3 cartas de exemplo
  **estáticas** (sem fetch) e CTA único para `https://agentes.strategilecompany.com.br/vitrine`,
  registrando a rota em `lib/site.ts:allRoutes()`, as chaves em `lib/i18n/dictionary.ts` e
  `openGraph`/`alternates` próprios — **sem** virar o 11º ícone da grade, que quebraria a cena.

### T-016 — O README descrevia um site de 8 produtos que hoje tem 10
- **Status:** concluido
- **Tamanho:** P
- **Criado:** 2026-09-15
- **Concluido:** 2026-09-15 — 448cc2a
- **Descricao:** `README.md:77` era do commit inicial (2026-05-05) e nunca acompanhou o T-004, que
  levou o portfólio de 8 para 10 produtos em 2026-08-31.

### T-015 — O TECNICO.md afirmava que o Umami não tem backup, mas ele tem
- **Status:** concluido
- **Tamanho:** PP
- **Criado:** 2026-09-15
- **Concluido:** 2026-09-15 — 448cc2a
- **Descricao:** o `TECNICO.md` foi tocado por `b1eaf45` e o backup registrado em `bfef2b5` — dois
  commits do mesmo dia na ordem errada, e a frase "(o banco não tem backup)" ficou contradizendo o
  T-009, concluído em 2026-08-31.


### T-010 — Slugs publicos alinhados ao nome do produto
- **Status:** concluido
- **Concluido:** 2026-09-06
- **Descricao:** as URLs expunham nomes internos de repositorio — `/portfolio/findr/` e
  `/portfolio/spid-app/` para produtos que o site chama de **2aFinder** e **Xpid**. Mesma classe
  do que o `PRODUTO.md` ja proibia para o Layer 1. Slugs trocados para `2afinder` e `xpid` em
  `lib/products.ts` e nos mapas por slug (`components/device/screens.tsx`,
  `components/icons/AppIcon.tsx`) — os nomes dos componentes (`FindrScreen`, `XpidGlyph`)
  ficaram como estao, sao identificadores, nao URLs. As quatro URLs antigas (PT e EN) viraram
  stubs de redirecionamento em `public/`, com `meta refresh`, `canonical` para o endereco novo e
  `noindex` — `output: export` nao suporta `redirects()` do Next, entao o stub estatico e o
  caminho possivel no GitHub Pages.

### T-009 — Backup do banco do Umami
- **Status:** concluido
- **Concluido:** 2026-08-31
- **Descricao:** `~/scripts/cron/umami-backup.sh`, diário às 07:58 (minuto e hora livres na
  grade da VPS), retenção de 14 dias em `~/backups/umami`. Segue o padrão do
  `spidapp-backup.sh` e acrescenta três guardas: falha explícita se o contêiner não estiver
  de pé, dump em arquivo temporário para não deixar `.gz` truncado no lugar do backup do dia,
  e recusa de dump suspeito (< 1 KB). **A restauração foi testada** num banco temporário:
  25 tabelas, o website preservado, zero erros.

### T-005 — Ligar analytics no site
- **Status:** concluido
- **Concluido:** 2026-08-31
- **Descricao:** Umami self-hosted na VPS (contêiner em `~/umami`, Caddy →
  `127.0.0.1:3213`, painel em https://umami.168-75-103-63.sslip.io). Analytics sem cookie,
  então o site segue sem banner de consentimento. A senha padrão do admin foi trocada na
  instalação — o painel está exposto na internet. O script traz `data-domains` para que só
  os domínios do site alimentem a conta. Detalhes em `~/umami/README.md`.

### T-004 — Varredura completa: contato, SEO, portfólio e prova
- **Status:** concluido
- **Concluido:** 2026-08-31
- **Descricao:** varredura cruzando os painéis do cluster (inventário medido da VPS,
  `company_products`, journal) com o site publicado. Entregas:
  **Contato** — WhatsApp ativado (`5522997552969`, mensagem pré-preenchida por idioma), e-mail
  mantido em `strategilesoftware@gmail.com` (o domínio não tem MX), `og.png` reduzido de 650 KB
  em 2400×1260 para 108 KB em 1200×630.
  **SEO** — `app/robots.ts` e `app/sitemap.ts`; `openGraph` e `canonical` próprios por rota
  (antes toda landing herdava o card da home); host canônico alinhado no `www`; JSON-LD
  Organization + WebSite; site inteiro em inglês sob `/en` com `hreflang` e `lang` corrigido no
  pós-build; `components/Analytics.tsx` plugável; `public/CNAME` de volta.
  **Portfólio** — de 8 para 10 produtos, com 2aFinder e Transcribr (ícone, tela-mock e copy
  fiéis ao produto real); `layerOne` virou **Layer 1**, com copy reescrita sobre o que o Rosetta
  realmente entrega e status corrigido de `concept` para `production`; selo de maturidade de
  volta na landing e no índice; grade da cena estendida para 5×2.
  **Conteúdo** — seções `Proof` (números agregados e setores) e `Process` (as quatro etapas do
  trabalho).
  **Peso** — `icons/strategile.png` 108 KB → 52 KB, `icons/app-igreja.png` 48 KB → 12 KB.

### T-003 — Imagem OG (open graph) do site
- **Status:** concluido
- **Concluido:** 2026-08-31
- **Descricao:** a arte tinha sido gerada em 2026-07-19 mas nunca chegou a ser publicada — o
  `og.png` respondia 404 em produção. Otimizada para 1200×630 / 108 KB e referenciada em todas
  as rotas.

### T-002 — Conectar domínio strategilecompany.com.br (CNAME + DNS)
- **Status:** concluido
- **Concluido:** antes de 2026-08-30 (constatado na varredura T-004)
- **Descricao:** o DNS já aponta para o GitHub Pages e o site responde em
  `www.strategilecompany.com.br`. O arquivo `public/CNAME` foi restabelecido como rede de
  segurança — o domínio vivia apenas na configuração do repositório.

### T-001 — Site definitivo: tela inicial interativa com ícones autorais e iPhone
- **Status:** concluido
- **Concluido:** 2026-06-11
- **Descricao:** Redesign completo a partir da avaliação das 4 versões de teste (v1–v4) e da
  documentação real dos 8 apps. Entregas: sistema de ícones SVG autorais em squircle iOS
  (figma-squircle, cores de marca reais), frame de iPhone em CSS com telas-mock fiéis, cena
  scroll-driven (hero → montagem da grade → hover abre o app no iPhone → clique abre a
  landing), manifesto e capacidades, landings por produto, copy bilíngue com ortografia
  completa, shader WebGL próprio, Lenis, acessibilidade (reduced-motion, focus, aria).

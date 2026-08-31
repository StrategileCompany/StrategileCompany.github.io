# BACKLOG — StrategileCompany

Ultima Revisao: 2026-08-31
Sprint Ativo: —
Proximo ID: T-010

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

---

## Historico

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

# PRODUTO — StrategileCompany

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Hero coreografado → tela inicial interativa → manifesto → prova → capacidades → processo → contato |
| `/portfolio` | Índice dos 10 produtos em grade de ícones, com a maturidade de cada um |
| `/portfolio/[slug]` | Landing por produto: ícone + tagline + iPhone com tela real, o que faz, capacidades, engenharia, stack, navegação prev/next |
| `/en`, `/en/portfolio`, `/en/portfolio/[slug]` | O site inteiro em inglês, com URL própria e indexável |
| `/agentes`, `/en/agentes` | [x] no ar desde 2026-09-16 (`https://www.strategilecompany.com.br/agentes/`, `/en/agentes/`) — divisão de agentes: pitch aprovado (T-019), 3 cartas estáticas sem preço (T-018), CTA único para a vitrine |
| `/sitemap.xml`, `/robots.txt` | Gerados por `app/sitemap.ts` e `app/robots.ts` |
| 404 | "Tela não encontrada." |

## Fluxos principais

1. **Descoberta**: scroll no hero → ícones se montam na grade 5×2 → hover abre o app no iPhone →
   clique abre a landing.
2. **Mobile**: hero limpo → grade 3 colunas estilo tela inicial → tap abre a landing (sem hover).
3. **Contato**: dois caminhos lado a lado — `mailto:strategilesoftware@gmail.com` e WhatsApp
   (`wa.me/5522997552969`, com mensagem pré-preenchida no idioma da página).
4. **Idioma**: o toggle PT/EN navega entre `/` e `/en` — a rota é a autoridade sobre o idioma.
   Fora de `/en`, a preferência salva em localStorage e o idioma do navegador decidem.

## Os 10 produtos (ordem da grade)

| # | Produto | Setor | Maturidade |
|---|---|---|---|
| 1 | Strategile | Inteligência de varejo multi-loja | produção |
| 2 | TaMarkado | Agendamento e gestão de clientes | desenvolvimento |
| 3 | Xpid | Vendas offline-first para autônomos | desenvolvimento |
| 4 | Roteiro Temporada | Gestão de locação de temporada | produção |
| 5 | Layer 1 | Gestão sob medida sobre o ERP existente | produção |
| 6 | AppIgreja | Gestão eclesiástica multi-igreja | produção |
| 7 | SmartScan | Coleta e conferência de estoque | produção |
| 8 | TantaGrana | Finanças pessoais com IA | desenvolvimento |
| 9 | 2aFinder | Comparador de preços LLM-first | produção |
| 10 | Transcribr | Gravação e transcrição com IA | produção |

> **Layer 1 é o repositório `Rosetta`.** O nome público é sempre *Layer 1*; o repositório ainda
> não foi renomeado. Não usar "Rosetta", "layerOne", "CAMADA" nem "Dataluz" no site.

## Divisão de agentes (subpágina)

Divisão comercial nova: a Strategile vende **agentes de IA que tocam setores inteiros**. A vitrine
é um produto separado, dinâmico, que já está no ar em
`https://agentes.strategilecompany.com.br/vitrine` (medido 200 com TLS válido em 2026-09-15).

> **Princípio: o site não duplica a vitrine.** A vitrine lê o banco com `revalidate 60`; o site é
> export estático. Repetir carta com número aqui congelaria medição e brigaria com a regra
> *"Só afirmar o que está de pé"*. O institucional apresenta a divisão e entrega o visitante.

| Item | Onde | Estado |
|---|---|---|
| Subpágina `/agentes` — pitch + 3 cartas estáticas + CTA para a vitrine | `app/agentes/page.tsx` | [x] no ar em 2026-09-16 (`ee7d1b3`) — T-011 |
| Mesma subpágina em inglês | `app/en/agentes/page.tsx` | [x] no ar em 2026-09-16 (`ee7d1b3`) — T-011 |
| Rota registrada em `allRoutes()` (sitemap + `hreflang`) | `lib/site.ts` | [x] no ar em 2026-09-16 (`ee7d1b3`) — T-011 |
| Chaves PT/EN da subpágina | `lib/i18n/dictionary.ts` | [x] no ar em 2026-09-16 (`ee7d1b3`) — T-011 |
| `openGraph` + `alternates` próprios da rota | `app/agentes/page.tsx` | [x] no ar em 2026-09-16 (`ee7d1b3`) — T-011 |
| Faixa na home entre `Capabilities` e `Process` | `components/home/` | [x] no ar em 2026-09-16 (`ee7d1b3`) — T-012 |
| Link de volta da vitrine para o estúdio | repo `Cluster` (`cluster-web`) | [ ] pendente — T-013 |
| Texto do pitch validado pelo dono | `.docs/MARKETING.md` | [x] aprovado pelo dono em 2026-09-16 — T-019 |

**Restrições que valem para esta subpágina:**

- **"Agentes" não entra na grade de ícones.** A cena assume `products.length`: `SCATTER` precisa
  de uma entrada por produto e `GRID_COLS × GRID_ROWS` precisa comportar todos — posição faltando
  vira `undefined` e derruba a cena. É divisão de serviço, não 11º produto do portfólio.
- **Dados estáticos, não `fetch`.** `output: export` resolve `fetch` no build; VPS fora do ar
  viraria deploy quebrado. Além disso as 3 cartas de hoje têm preço `null` e atributo sem valor.
- **Sem preço na subpágina** enquanto valer a regra de conteúdo abaixo (decisão do dono pendente,
  T-018).
- Se a rota mudar de endereço, o padrão é o stub de `public/` com `meta refresh` + `canonical` +
  `noindex` (T-010), porque `output: export` não suporta `redirects()`.

## Regras de conteúdo

- **Nunca** exibir avaliações de usuários nem preços
- Prova social só em números agregados e setores atendidos — nunca nome de cliente sem autorização
- Pouco foco nos sócios — o protagonista é o portfólio e a capacidade técnica
- Texto curto por produto: tagline, essência (1–2 frases), 2 parágrafos, 3 capacidades, 1 fato de
  engenharia
- **Só afirmar o que está de pé.** A copy de cada produto sai do código e da documentação real
  dele; recurso construído mas não entregue não vira promessa na landing
- Ortografia PT-BR completa (todos os diacríticos) nas duas línguas do dicionário

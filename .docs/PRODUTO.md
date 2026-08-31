# PRODUTO — StrategileCompany

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Hero coreografado → tela inicial interativa → manifesto → prova → capacidades → processo → contato |
| `/portfolio` | Índice dos 10 produtos em grade de ícones, com a maturidade de cada um |
| `/portfolio/[slug]` | Landing por produto: ícone + tagline + iPhone com tela real, o que faz, capacidades, engenharia, stack, navegação prev/next |
| `/en`, `/en/portfolio`, `/en/portfolio/[slug]` | O site inteiro em inglês, com URL própria e indexável |
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

## Regras de conteúdo

- **Nunca** exibir avaliações de usuários nem preços
- Prova social só em números agregados e setores atendidos — nunca nome de cliente sem autorização
- Pouco foco nos sócios — o protagonista é o portfólio e a capacidade técnica
- Texto curto por produto: tagline, essência (1–2 frases), 2 parágrafos, 3 capacidades, 1 fato de
  engenharia
- **Só afirmar o que está de pé.** A copy de cada produto sai do código e da documentação real
  dele; recurso construído mas não entregue não vira promessa na landing
- Ortografia PT-BR completa (todos os diacríticos) nas duas línguas do dicionário

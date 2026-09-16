# MARKETING — StrategileCompany

> Criado em 2026-09-15. Existe por um motivo concreto: com a divisão de agentes, a empresa passa a
> falar em **dois lugares** (o site institucional e a vitrine em
> `agentes.strategilecompany.com.br`). Sem um texto de referência, os dois nascem dizendo coisas
> diferentes sobre a mesma coisa. Este arquivo é a fonte do que se diz; o `CONCEITO.md` continua
> sendo a fonte do que a empresa **é**.

## 1. Posicionamento do site

**"Software sob medida para o problema que é só seu."**

O protagonista é o serviço — consultoria, desenvolvimento e IA aplicada. O portfólio de 10
produtos é a **prova** de que o estúdio entrega, não a prateleira de onde se compra.

> O posicionamento anterior, *"software de abrir todo dia"*, foi descartado em 2026-07-18: prendia
> a empresa a produtos de prateleira quando o que se vende é o trabalho sob medida.

**Para quem:** clientes em potencial avaliando a capacidade do estúdio; parceiros e contatos
comerciais; referência pública da marca, bilíngue PT/EN com rota própria por idioma.

**Como a marca soa:** sóbria, específica, sem superlativo. Número agregado em vez de adjetivo.
Maturidade declarada por produto (produção / desenvolvimento / conceito) em vez de promessa.

### Os dois domínios — não confundir

| Domínio | O que é | Quem serve |
|---|---|---|
| `www.strategilecompany.com.br` | **Institucional** — o estúdio | GitHub Pages |
| `agentes.strategilecompany.com.br` | **Vitrine** da divisão de agentes | VPS openclaw → Caddy → `cluster-web` |
| `strategile.com.br` | O **produto Strategile** (varejo multi-loja) | outro site, outra marca |

Escrever "Strategile" sem qualificar, num contexto de agentes, já causou engano documentado.
A divisão se chama **Agentes Strategile** e mora no domínio da **Company**.

## 2. Pitch da divisão de agentes

> ⚠️ **RASCUNHO — a validar com o dono (T-019).** Nada abaixo foi aprovado. Tudo o que a página
> `/agentes` disser é promessa feita em nome da Strategile, e o texto final é decisão dele, não do
> agente que escreveu este arquivo. Enquanto não houver validação, `/agentes` não pode ir ao ar.
>
> **Estado em 2026-09-16:** o rascunho abaixo já está em código, na branch `feat/divisao-agentes`
> (`lib/i18n/dictionary.ts`, chaves `agentes` e `homeAgentes`, PT e EN) — mudar o texto é mudar
> lá. Construída e provada localmente, **não publicada**: `main` não foi tocada.

### Frase-âncora (a validar)

*"Funcionários de IA que tocam setores inteiros."* — é o título que a vitrine já usa em produção
(medido em 2026-09-15), e por isso é o candidato natural: muda-lo no site institucional criaria
duas promessas diferentes para o mesmo produto.

### Dois parágrafos (a validar)

1. *A Strategile constrói software sob medida há anos. A divisão de agentes é o passo seguinte:
   em vez de entregar uma ferramenta para alguém operar, entregamos o operador — um agente que
   assume um setor, executa a rotina dele todo dia e deixa registro do que decidiu.*

2. *Cada agente nasce do mesmo método que constrói os sistemas da casa: entender o processo real,
   medir antes de prometer, e mostrar o que está de pé. A vitrine lista as funções disponíveis, o
   que cada uma já executou e em que condições — sem número inventado.*

### O que o pitch NÃO pode dizer (checado contra o que está medido)

Estas quatro frases aparecem hoje no FAQ da vitrine e a própria sessão de 2026-09-06 do Cluster as
marca como **promessas não medidas**. Nenhuma delas entra no site institucional sem que o dono
decida corrigi-las ou assiná-las:

- *"um agente da empresa A não enxerga nada da empresa B"* — verdade hoje só porque não há cliente
  rodando; a Onda 2 (runner multi-tenant) está pendente.
- *"seus dados não treinam modelo"* — depende dos termos das assinaturas que rodam o cérebro dos
  agentes, **não conferidos**.
- *"a gente nunca vê sua senha"* — o operador **pode** decifrar.
- *"sem contrato longo / cancela quando quiser"* — termo comercial, decisão do dono.

### Preço

Hoje as 3 cartas publicadas trazem `preco_mensal_centavos: null` — a vitrine mostra "sob consulta".
O `PRODUTO.md` proíbe exibir preço no institucional. **Recomendação: preço só na vitrine, e o site
nunca mostra número** — preserva a regra do site e mantém o número onde ele pode ser medido e
atualizado com um `UPDATE`. Decisão do dono (T-018).

## 3. Canais

| Canal | Estado | Como se mede |
|---|---|---|
| **Site institucional** | no ar, bilíngue, 24 `<loc>` no sitemap | Umami |
| **Vitrine de agentes** | no ar (200, medido 2026-09-15) | Umami (a instrumentar) |
| **Subpágina `/agentes` + `/en/agentes`** | [ ] construída na branch `feat/divisao-agentes` (2026-09-16), **não publicada** — aguarda T-019 (pitch) e T-018 (preço) | cliques de saída para a vitrine |
| **WhatsApp** | `wa.me/5522997552969`, mensagem pré-preenchida por idioma | cliques de saída |
| **E-mail** | `strategilesoftware@gmail.com` (o domínio não tem MX) | manual |
| **Google Search Console** | **não registrado** — T-006 pendente | impressões e cliques orgânicos |
| Redes sociais | não existem para a marca | — |

**Umami é a medição.** Self-hosted na VPS openclaw (contêiner `~/umami`, Caddy → `127.0.0.1:3213`,
painel em `https://umami.168-75-103-63.sslip.io`), sem cookie — por isso o site não precisa de
banner de consentimento. `components/Analytics.tsx` injeta o script com
`data-domains=www.strategilecompany.com.br,strategilecompany.com.br`, o que impede que o preview
local entre na mesma conta e que o id público sirva para forjar tráfego de fora. Backup do banco:
diário às 07:58, retenção de 14 dias (T-009).

> Ao publicar `/agentes`, a métrica que importa não é visita: é **clique de saída para a vitrine**.
> A subpágina é uma porta, e porta se mede por quem atravessa.

## 4. Princípios de comunicação

- **O site não duplica a vitrine.** A vitrine é dinâmica e lê o banco; o site é export estático.
  Repetir carta com número aqui congelaria medição. O institucional apresenta a divisão e entrega
  o visitante — uma coisa só, bem feita.
- **Só afirmar o que está de pé.** A copy sai do código e da documentação real; recurso construído
  mas não entregue não vira promessa.
- **Nunca exibir preços nem avaliações de usuários** no institucional.
- **Prova social só em número agregado e setor atendido** — nunca nome de cliente sem autorização.
- **Pouco foco nos sócios.** O protagonista é o portfólio e a capacidade técnica.
- **Layer 1 é o nome público** do repositório `Rosetta`. Nunca escrever "Rosetta", "layerOne",
  "CAMADA" nem "Dataluz" em material público.
- **Ortografia PT-BR completa** (todos os diacríticos) nas duas línguas do dicionário.

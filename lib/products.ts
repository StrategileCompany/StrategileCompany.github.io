import type { Locale } from './i18n/dictionary';

export type ProductStatus = 'production' | 'development' | 'concept';
export type ProductPlatform = 'mobile' | 'web' | 'hybrid';

export type ProductCopy = {
  /** Uma linha com alma — aparece junto ao ícone e no hero da landing */
  tagline: string;
  /** O que é, em 1–2 frases concretas */
  essence: string;
  /** Parágrafos da landing (2, curtos) */
  description: string[];
  /** 3 capacidades concretas do produto */
  capabilities: string[];
  /** Um fato de engenharia que transmite profundidade */
  fact: string;
};

export type Product = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  platform: ProductPlatform;
  status: ProductStatus;
  /** Cor de acento do produto — auras, detalhes, links na landing */
  accent: string;
  /** Gradiente do squircle do ícone — ignorado quando iconImage é 'bleed' */
  iconGradient: [string, string];
  /**
   * Ícone real do app, exportado do próprio projeto. Quando ausente, o ícone é
   * o glifo vetorial autoral em AppIcon.tsx.
   * - 'bleed': a arte tem fundo próprio e preenche o squircle inteiro
   * - 'glyph': a arte é transparente e assenta sobre o iconGradient
   */
  iconImage?: { src: string; mode: 'bleed' | 'glyph' };
  copy: Record<Locale, ProductCopy>;
  stack: string[];
};

export const products: Product[] = [
  {
    slug: 'strategile',
    name: 'Strategile',
    category: { pt: 'Inteligência de varejo multi-loja', en: 'Multi-store retail intelligence' },
    platform: 'hybrid',
    status: 'production',
    accent: '#22D3EE',
    iconGradient: ['#1E293B', '#0F172A'],
    iconImage: { src: '/icons/strategile.png', mode: 'bleed' },
    copy: {
      pt: {
        tagline: 'Estoque otimizado. Metas batidas.',
        essence:
          'Plataforma de inteligência operacional para redes varejistas. Conversa com o ERP via pull não-invasivo e adiciona os algoritmos que o ERP não tem.',
        description: [
          'A Strategile não substitui o ERP — ela conversa com ele. Um pull diário traz movimentos de venda, compra e transferência. A partir daí entram os algoritmos: sugestão de pedido por lead-time real, balanceamento de estoque entre lojas, identificação de obsoleto, leitura de margem por SKU.',
          'No bolso da equipe, o app leva metas em tempo real, ranking de vendedores e um chat de BI que responde perguntas em linguagem natural — inclusive por voz — gerando SQL validado direto no banco. Calibrada em segmentos onde estoque parado vira prejuízo medido: pet shops, materiais de construção, autopeças, distribuidores.',
        ],
        capabilities: [
          'Sugestão de pedido por giro real e balanceamento de estoque entre lojas',
          'Chat de BI que transforma pergunta em SQL validado — inclusive por voz',
          'Agente on-premise que conecta o ERP sem abrir portas no firewall',
        ],
        fact: 'Quatro stacks coordenadas — web Blazor com mais de 30 telas, app Flutter, servidor TypeScript e agente Go via WebSocket somente de saída, com sandbox SELECT-only em duas camadas.',
      },
      en: {
        tagline: 'Optimized inventory. Targets met.',
        essence:
          "Operational intelligence platform for retail chains. Talks to the ERP via non-invasive pull and adds the algorithms the ERP doesn't have.",
        description: [
          "Strategile doesn't replace the ERP — it talks to it. A daily pull brings in sales, purchases and transfers. From there, the algorithms kick in: order suggestion by real lead time, multi-store inventory balancing, obsolete-stock detection, SKU-level margin reading.",
          'In the team\'s pocket, the app carries real-time targets, a sales ranking and a BI chat that answers natural-language questions — voice included — generating validated SQL straight against the database. Calibrated in segments where idle inventory becomes measurable loss: pet shops, building supplies, auto parts, distributors.',
        ],
        capabilities: [
          'Order suggestion by real turnover and multi-store inventory balancing',
          'A BI chat that turns questions into validated SQL — voice included',
          'An on-premise agent that connects the ERP without opening firewall ports',
        ],
        fact: 'Four coordinated stacks — a 30+ screen Blazor web app, a Flutter app, a TypeScript server and a Go agent over outbound-only WebSocket, with a two-layer SELECT-only sandbox.',
      },
    },
    stack: ['Blazor WebAssembly', '.NET 8', 'Azure Functions', 'SQL Server', 'Flutter'],
  },
  {
    slug: 'tamarkado',
    name: 'TaMarkado',
    category: { pt: 'Agendamento e gestão de clientes', en: 'Scheduling & client management' },
    platform: 'web',
    status: 'development',
    accent: '#3B82F6',
    iconGradient: ['#3B82F6', '#8B5CF6'],
    copy: {
      pt: {
        tagline: 'Tá marcado. Tá confirmado.',
        essence:
          'Agenda e gestão de clientes para salões, clínicas e profissionais autônomos — com confirmação de horário e comunicação direto pelo WhatsApp.',
        description: [
          'Agenda por dia, semana e mês com status de confirmação em cada horário. Cadastro de clientes com importação direta dos contatos do Google e histórico de serviços prestados.',
          'A comunicação fecha o ciclo: mensagens personalizadas de WhatsApp com templates e filtros prontos — aniversariantes, inativos, inadimplentes. Multi-tenant: cada empresa opera isolada na mesma plataforma.',
        ],
        capabilities: [
          'Agenda multi-profissional com status de confirmação por horário',
          'Mensagens de WhatsApp com templates e filtros de público',
          'Importação de clientes direto dos contatos do Google',
        ],
        fact: 'Backend serverless multi-tenant: 20 controllers em Azure Functions, ~54 endpoints REST e pipeline próprio de 5 middlewares.',
      },
      en: {
        tagline: 'Booked. Confirmed.',
        essence:
          'Scheduling and client management for salons, clinics and independent professionals — with appointment confirmation and WhatsApp communication built in.',
        description: [
          'Day, week and month calendar with confirmation status on every slot. Client registry with direct Google Contacts import and full service history.',
          'Communication closes the loop: personalized WhatsApp messages with templates and ready-made audience filters — birthdays, inactive, overdue. Multi-tenant: each business operates in isolation on the same platform.',
        ],
        capabilities: [
          'Multi-professional calendar with per-slot confirmation status',
          'WhatsApp messages with templates and audience filters',
          'Client import straight from Google Contacts',
        ],
        fact: 'Serverless multi-tenant backend: 20 Azure Functions controllers, ~54 REST endpoints, a custom 5-middleware pipeline.',
      },
    },
    stack: ['.NET 10', 'Azure Functions', 'Blazor WebAssembly', 'SQL Server', 'Google People API'],
  },
  {
    slug: 'xpid',
    name: 'Xpid',
    category: { pt: 'Vendas offline-first para autônomos', en: 'Offline-first sales for independents' },
    platform: 'mobile',
    status: 'development',
    accent: '#2563EB',
    iconGradient: ['#3B82F6', '#1D4ED8'],
    copy: {
      pt: {
        tagline: 'O caderninho de fiado virou app.',
        essence:
          'Vendas, estoque e financeiro para o vendedor porta a porta. Roda 100% offline no celular e sincroniza quando a internet voltar.',
        description: [
          'Tudo que o vendedor autônomo precisa cabe no bolso: venda com crediário parcelado, estoque com conversão de unidades — ovo, bandeja, cartela, caixa —, lucro real com custeio FIFO e cupom impresso em térmica Bluetooth, na rua.',
          'O motor é offline-first de verdade: cada operação persiste localmente e entra numa fila idempotente que sincroniza com a nuvem depois. Sem sinal, sem problema — a venda nunca espera.',
        ],
        capabilities: [
          'Funciona 100% offline, com sincronização idempotente depois',
          'Crediário e fiado com parcelas, recebimentos e fechamento mensal',
          'Cupom não fiscal em impressora térmica Bluetooth',
        ],
        fact: 'Estoque event-sourced com custeio FIFO por lotes e fila de sincronização com UUID idempotente — 27 telas mobile mais painel web.',
      },
      en: {
        tagline: 'The street ledger became an app.',
        essence:
          'Sales, inventory and finances for door-to-door sellers. Runs 100% offline on the phone and syncs when the internet comes back.',
        description: [
          'Everything the independent seller needs fits in a pocket: installment sales, inventory with unit conversion — egg, tray, carton, box —, real profit with FIFO costing and receipts printed on a Bluetooth thermal printer, on the street.',
          "The engine is truly offline-first: every operation persists locally and joins an idempotent queue that syncs to the cloud later. No signal, no problem — the sale never waits.",
        ],
        capabilities: [
          'Works 100% offline, with idempotent sync afterwards',
          'Installment sales with receivables and automatic monthly closing',
          'Non-fiscal receipts on Bluetooth thermal printers',
        ],
        fact: 'Event-sourced inventory with batch FIFO costing and an idempotent sync queue — 27 mobile screens plus a web panel.',
      },
    },
    stack: ['React Native', 'SQLite', 'Node.js', 'Neon Postgres', 'ESC/POS Bluetooth'],
  },
  {
    slug: 'roteiro-temporada',
    name: 'Roteiro Temporada',
    category: { pt: 'Gestão de locação de temporada', en: 'Vacation rental management' },
    platform: 'hybrid',
    status: 'production',
    accent: '#0A7AAE',
    iconGradient: ['#0A7AAE', '#122E63'],
    copy: {
      pt: {
        tagline: 'Cada reserva, dividida com justiça.',
        essence:
          'Gestão financeira e operacional para quem administra imóveis de temporada. Sincroniza Airbnb e Booking e divide cada reserva entre gestor, proprietário e equipe.',
        description: [
          'As reservas chegam sozinhas — sincronização com Airbnb e Booking via iCal e BEDS24 — e o dinheiro de cada uma é distribuído automaticamente segundo a regra contratual de cada imóvel, em dez cenários de split configuráveis.',
          'O acerto entre gestor e proprietário, que era a parte tensa do negócio, vira uma matriz clara de quem deve para quem. Baixa de pagamento em um toque, conciliação bancária via Open Finance e guias digitais para o hóspede.',
        ],
        capabilities: [
          'Sincronização automática de reservas com Airbnb e Booking',
          'Split de receita entre gestor, proprietário e equipe de limpeza',
          'Acerto bilateral transparente e conciliação via Open Finance',
        ],
        fact: 'Motor financeiro próprio com regra de acerto bilateral e dez cenários de split por reserva.',
      },
      en: {
        tagline: 'Every booking, split fairly.',
        essence:
          'Financial and operational management for vacation rental managers. Syncs Airbnb and Booking and splits every booking between manager, owner and staff.',
        description: [
          'Bookings arrive on their own — Airbnb and Booking sync via iCal and BEDS24 — and the money from each one is distributed automatically per property contract rule, across ten configurable split scenarios.',
          'The settlement between manager and owner, once the tense part of the business, becomes a clear who-owes-whom matrix. One-tap payment registration, bank reconciliation via Open Finance and digital guest guides.',
        ],
        capabilities: [
          'Automatic booking sync with Airbnb and Booking',
          'Revenue split between manager, owner and cleaning staff',
          'Transparent bilateral settlement and Open Finance reconciliation',
        ],
        fact: 'A custom financial engine with a bilateral settlement rule and ten split scenarios per booking.',
      },
    },
    stack: ['React', 'TypeScript', 'Supabase', 'Stripe', 'PWA', 'Open Finance'],
  },
  {
    slug: 'layer-one',
    name: 'Layer 1',
    category: {
      pt: 'Gestão sob medida sobre o ERP existente',
      en: 'Custom management on the existing ERP',
    },
    platform: 'web',
    status: 'production',
    accent: '#6BDFEB',
    iconGradient: ['#0A1A24', '#040C12'],
    copy: {
      pt: {
        tagline: 'O ERP que ele já tem, finalmente legível.',
        essence:
          'Plataforma que constrói sistemas de gestão personalizados por cliente em cima do ERP que a empresa já usa. Sem trocar de sistema, sem copiar dado.',
        description: [
          'O nome vem da Pedra de Roseta: decifrar uma escrita desconhecida comparando-a com um texto conhecido. É o que o motor central faz — recebe o schema opaco de um ERP e os relatórios que aquele ERP imprime, e deriva o significado de cada tabela e campo até os números baterem com o que o cliente já reconhece como verdade.',
          'O acesso ao banco do ERP é somente leitura, atrás de um portão de consulta de seis camadas, por um túnel reverso que sai de dentro da rede do cliente — nenhuma porta aberta, nenhum espelho, nenhum cache de resultado. A auditoria guarda o SQL executado e a contagem de linhas; nunca o conteúdo.',
        ],
        capabilities: [
          'Telas de venda, financeiro e estoque montadas por cliente, sem fork de código',
          'Portão de consulta somente-leitura em seis camadas, com auditoria de cada SQL',
          'Túnel reverso instalado por script, sem abrir porta na rede do cliente',
        ],
        fact: 'Faturamento e CMV reconciliados exato contra o DRE do próprio ERP do cliente em três meses seguidos — 537 testes automatizados guardam o motor.',
      },
      en: {
        tagline: 'The ERP they already have, finally readable.',
        essence:
          'A platform that builds per-client management systems on top of the ERP the company already runs. No system replacement, no data copying.',
        description: [
          'The name comes from the Rosetta Stone: deciphering an unknown script by comparing it to a known text. That is what the core engine does — it takes an ERP\'s opaque schema and the reports that ERP prints, and derives the meaning of every table and field until the numbers match what the client already accepts as true.',
          'Access to the ERP database is read-only, behind a six-layer query gate, through a reverse tunnel that dials out from inside the client network — no open ports, no mirror, no cached results. The audit trail keeps the executed SQL and the row count; never the contents.',
        ],
        capabilities: [
          'Sales, finance and inventory screens assembled per client, with no code fork',
          'Six-layer read-only query gate, with every SQL statement audited',
          'Reverse tunnel installed by script, with no open port on the client network',
        ],
        fact: "Revenue and COGS reconciled exactly against the client's own ERP income statement for three consecutive months — 537 automated tests guard the engine.",
      },
    },
    stack: ['Next.js', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Playwright'],
  },
  {
    slug: 'app-igreja',
    name: 'AppIgreja',
    category: { pt: 'Gestão eclesiástica multi-igreja', en: 'Multi-church management' },
    platform: 'hybrid',
    status: 'production',
    accent: '#4FC3F7',
    // Branco como na tela inicial do celular — é o fundo que dá contraste à bíblia azul
    iconGradient: ['#FFFFFF', '#E7EDF4'],
    iconImage: { src: '/icons/app-igreja.png', mode: 'glyph' },
    copy: {
      pt: {
        tagline: 'Unidade e comunhão, sem planilha.',
        essence:
          'SaaS multi-tenant para gestão administrativa, financeira e eclesiástica de igrejas e convenções.',
        description: [
          'Uma plataforma que conecta diretoria, pastores, líderes e membros em uma única ferramenta. Transparência financeira sem planilha, agenda unificada, cadastro de membros com histórico de participação, conteúdo devocional centralizado.',
          'Substitui o emaranhado de planilhas e grupos de WhatsApp que toda tesouraria conhece. Construído com tom respeitoso ao contexto eclesiástico — interface, vocabulário e fluxo pensados para o dia a dia da igreja.',
        ],
        capabilities: [
          'Contribuição via PIX com QR code gerado no próprio aparelho',
          'Carteirinha digital do membro com verificação pública por QR',
          'Tesouraria com fechamento de período e relatórios em PDF',
        ],
        fact: 'App publicado na Play Store com 58 páginas web e 18 telas mobile — o payload PIX (EMV BR Code) e o CRC16 foram implementados do zero.',
      },
      en: {
        tagline: 'Unity and fellowship, no spreadsheets.',
        essence:
          'Multi-tenant SaaS for the administrative, financial and ecclesiastical management of churches and conventions.',
        description: [
          'One platform connecting board, pastors, leaders and members in a single tool. Financial transparency without spreadsheets, a unified calendar, member registry with participation history, centralized devotional content.',
          'Replaces the tangle of spreadsheets and WhatsApp groups every treasury knows. Built with a tone respectful of the ecclesiastical context — interface, vocabulary and flow designed for the church\'s daily life.',
        ],
        capabilities: [
          'PIX giving with QR codes generated on the device itself',
          'Digital membership card with public QR verification',
          'Treasury with period closing and PDF reports',
        ],
        fact: 'Published on the Play Store with 58 web pages and 18 mobile screens — the PIX payload (EMV BR Code) and CRC16 were implemented from scratch.',
      },
    },
    stack: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'smart-scan',
    name: 'SmartScan',
    category: { pt: 'Coleta e conferência de estoque', en: 'Stock counting & receiving' },
    platform: 'hybrid',
    status: 'production',
    accent: '#2DD4BF',
    iconGradient: ['#14938A', '#0A4F4A'],
    copy: {
      pt: {
        tagline: 'O bipe que vira estoque contado.',
        essence:
          'Ecossistema de coleta e conferência de estoque: o operador escaneia no celular, o servidor da loja conversa com o ERP, a SEFAZ e a impressora de etiquetas.',
        description: [
          'O operador escaneia códigos de barras no celular para montar orçamentos e conferências — em modo cego ou assistido, com som de ok e erro, modo offline e sessões colaborativas em tempo real entre vários aparelhos.',
          'Um serviço instalado no servidor da própria loja conecta tudo ao SQL Server do ERP, consulta NF-e na SEFAZ com certificado digital e imprime etiquetas em impressoras Zebra. Um painel web acompanha a frota de dispositivos licenciados.',
        ],
        capabilities: [
          'Conferência cega ou assistida com sessões colaborativas em tempo real',
          'Integração com o ERP via SQL Server, NF-e na SEFAZ e etiquetas Zebra',
          'PWA offline-first servida pelo servidor da própria loja',
        ],
        fact: 'O serviço Windows roda com atualização e rollback automáticos, fala SOAP com a SEFAZ usando certificado digital e sincroniza sessões de leitura entre aparelhos via Socket.IO.',
      },
      en: {
        tagline: 'The beep that becomes counted stock.',
        essence:
          "A stock counting and receiving ecosystem: operators scan on their phones while the store's own server talks to the ERP, the tax authority and the label printer.",
        description: [
          'Operators scan barcodes on their phones to build quotes and stock counts — blind or assisted mode, with ok/error sounds, offline support and real-time collaborative sessions across devices.',
          "A service installed on the store's own server connects everything to the ERP's SQL Server, queries e-invoices at the tax authority with a digital certificate and prints labels on Zebra printers. A web panel tracks the licensed device fleet.",
        ],
        capabilities: [
          'Blind or assisted counting with real-time collaborative sessions',
          'ERP integration via SQL Server, e-invoice queries and Zebra labels',
          "Offline-first PWA served by the store's own server",
        ],
        fact: 'The Windows service runs with automatic update and rollback, speaks SOAP to the tax authority using a digital certificate and syncs scanning sessions across devices via Socket.IO.',
      },
    },
    stack: ['Flutter', 'React PWA', 'Node.js', 'SQL Server', 'Socket.IO', 'Zebra ZPL'],
  },
  {
    slug: 'tantagrana',
    name: 'TantaGrana',
    category: { pt: 'Finanças pessoais com IA', en: 'AI-powered personal finance' },
    platform: 'hybrid',
    status: 'development',
    accent: '#9FE870',
    iconGradient: ['#1E4400', '#0D2200'],
    copy: {
      pt: {
        tagline: 'Uma frase vira lançamento.',
        essence:
          'Finanças pessoais com rigor contábil: você escreve ou fala "paguei 45,90 de mercado ontem no Nubank" — e o assistente registra na conta e categoria certas.',
        description: [
          'Cada receita, despesa ou transferência gera duas partidas dobradas que sempre somam zero — contabilidade de verdade, não lista de gastos. Multi-tenant para separar pessoa física, empresa e família no mesmo login.',
          'O diferencial é o assistente: uma IA com tool calling registra a transação a partir de uma frase, por texto ou voz, e pergunta quando falta informação. A importação de extratos CSV detecta transferências entre contas automaticamente.',
        ],
        capabilities: [
          'Assistente que registra transações por texto ou voz',
          'Partidas dobradas de verdade — cada lançamento soma zero',
          'Pessoa física, empresa e família separadas no mesmo login',
        ],
        fact: 'Motor contábil próprio: toda transação gera exatamente dois lançamentos atômicos, e o assistente opera com tool calling real — registrar receita, despesa e transferência — incluindo voz com speech-to-text.',
      },
      en: {
        tagline: 'One sentence becomes an entry.',
        essence:
          'Personal finance with accounting rigor: you type or say "paid 45.90 for groceries yesterday on Nubank" — and the assistant books it to the right account and category.',
        description: [
          'Every income, expense or transfer generates two double-entry postings that always sum to zero — real accounting, not an expense list. Multi-tenant to keep person, business and family separate under one login.',
          'The differentiator is the assistant: an AI with tool calling books the transaction from a sentence, by text or voice, asking when information is missing. CSV imports detect transfers between accounts automatically.',
        ],
        capabilities: [
          'An assistant that books transactions by text or voice',
          'True double-entry — every transaction sums to zero',
          'Person, business and family separated under one login',
        ],
        fact: 'A custom accounting engine: every transaction creates exactly two atomic postings, and the assistant runs on real tool calling — income, expense and transfer — including voice with speech-to-text.',
      },
    },
    stack: ['.NET 10', 'Blazor WebAssembly', 'Azure Functions', 'SQL Server', 'Agent Framework'],
  },
  {
    slug: '2afinder',
    name: '2aFinder',
    category: {
      pt: 'Comparador de preços LLM-first',
      en: 'LLM-first price comparison',
    },
    platform: 'web',
    status: 'production',
    accent: '#F3821D',
    iconGradient: ['#F3821D', '#AE4200'],
    copy: {
      pt: {
        tagline: 'Feito para a IA achar antes de você.',
        essence:
          'Vitrine de produtos brasileira desenhada primeiro para agentes de IA e depois para humanos. Guarda produtos do fabricante, não anúncios de loja.',
        description: [
          'Quando alguém pede a um assistente "ache o melhor notebook 16 GB", o modelo hoje se vira sozinho: busca, abre páginas, lê HTML sujo e perde metade da informação. Falta uma fonte estruturada e legível por máquina sobre produtos brasileiros — e é esse o lugar que o 2aFinder ocupa.',
          'O catálogo é do fabricante: sabemos quais variantes existem, então um filtro restritivo devolve exatamente o que foi pedido, sem afrouxar em silêncio. Cada oferta carrega preço com hora, histórico de noventa dias e um score de confiança em três eixos — plataforma, vendedor e produto.',
        ],
        capabilities: [
          'Catálogo canônico por fabricante — produtos de verdade, não anúncios',
          'Preço com hora de coleta e histórico de noventa dias',
          'Confiança em três eixos: plataforma, vendedor e produto',
        ],
        fact: 'Cada rota publica dados estruturados schema.org para o agente ler sem raspar HTML, e a busca dispara descoberta, preço e confiança em paralelo, com orçamento de tempo por perna.',
      },
      en: {
        tagline: 'Built for the AI to find it first.',
        essence:
          'A Brazilian product showcase designed for AI agents first and humans second. It stores manufacturer products, not store listings.',
        description: [
          'When someone asks an assistant to "find the best 16 GB laptop", the model is on its own today: it searches, opens pages, reads messy HTML and loses half the information. There is no structured, machine-readable source about Brazilian products — and that is the gap 2aFinder fills.',
          'The catalogue belongs to the manufacturer: we know which variants exist, so a restrictive filter returns exactly what was asked, with no silent loosening. Every offer carries a timestamped price, ninety days of history and a three-axis trust score — platform, seller and product.',
        ],
        capabilities: [
          'Canonical manufacturer catalogue — real products, not listings',
          'Timestamped prices with ninety days of history',
          'Three-axis trust: platform, seller and product',
        ],
        fact: 'Every route publishes schema.org structured data so an agent can read it without scraping HTML, and each search fans out discovery, pricing and trust in parallel under a per-leg time budget.',
      },
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Turborepo', 'Node.js'],
  },
  {
    slug: 'transcribr',
    name: 'Transcribr',
    category: {
      pt: 'Gravação e transcrição com IA',
      en: 'AI recording & transcription',
    },
    platform: 'web',
    status: 'production',
    accent: '#E2A03F',
    iconGradient: ['#F6F3ED', '#DED7C8'],
    copy: {
      pt: {
        tagline: 'A reunião acabou. O documento já existe.',
        essence:
          'Gravador que roda no navegador do celular ou do computador e devolve transcrição, resumo, decisões e tarefas — sem instalar app e sem escrever prompt.',
        description: [
          'Reunião, chamada ou entrevista: você aperta gravar na aba do navegador e pronto. Não há aplicativo para instalar, nem gravador de mesa para comprar — o que aparelhos dedicados de trezentos dólares fazem, acontece no aparelho que a pessoa já tem no bolso.',
          'Quando a gravação termina, a IA já entregou os documentos: a transcrição corrida, o resumo, as decisões tomadas e as tarefas com responsável. Nada de importar arquivo depois nem de escrever instrução — o trabalho de virar documento já foi feito.',
        ],
        capabilities: [
          'Duas horas de reunião sem perder nada, direto no navegador',
          'Transcrição, resumo, decisões e tarefas prontos ao fim da gravação',
          'Sem app para instalar e sem hardware dedicado',
        ],
        fact: 'A cada quinze segundos o trecho gravado já sobe para o servidor — se a conexão cair, a bateria acabar ou a aba fechar, o que já foi dito continua salvo.',
      },
      en: {
        tagline: 'The meeting is over. The document already exists.',
        essence:
          'A recorder that runs in the browser on phone or desktop and returns transcript, summary, decisions and tasks — no app to install, no prompt to write.',
        description: [
          'Meeting, call or interview: you hit record in a browser tab and that is it. There is no application to install and no desk recorder to buy — what dedicated three-hundred-dollar devices do happens on the phone already in your pocket.',
          'By the time the recording stops, the AI has delivered the documents: the full transcript, the summary, the decisions made and the tasks with an owner. No importing a file afterwards, no writing instructions — the work of becoming a document is already done.',
        ],
        capabilities: [
          'Two-hour meetings with nothing lost, straight in the browser',
          'Transcript, summary, decisions and tasks ready when recording stops',
          'No app to install and no dedicated hardware',
        ],
        fact: 'Every fifteen seconds the recorded chunk is already on the server — if the connection drops, the battery dies or the tab closes, what was said stays saved.',
      },
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'MinIO', 'PWA'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getAdjacentProducts(slug: string): { prev: Product; next: Product } {
  const idx = products.findIndex((p) => p.slug === slug);
  const safeIdx = idx === -1 ? 0 : idx;
  const prev = products[(safeIdx - 1 + products.length) % products.length];
  const next = products[(safeIdx + 1) % products.length];
  return { prev, next };
}

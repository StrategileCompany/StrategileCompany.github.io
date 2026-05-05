import type { Locale } from './i18n/dictionary';

export type ProductStatus = 'production' | 'development' | 'concept';

export type ProductColor = {
  /** Cor base do mockup gradient */
  from: string;
  to: string;
  /** Texto sobre o mockup (light/dark) */
  ink: 'light' | 'dark';
  /** Acento em pequenos detalhes do mockup */
  accent: string;
};

export type ProductCopy = {
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  metric?: string;
  clients?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: { pt: string; en: string };
  stack: string[];
  status: ProductStatus;
  color: ProductColor;
  copy: Record<Locale, ProductCopy>;
  url?: string;
};

export const products: Product[] = [
  {
    slug: 'strategile',
    name: 'Strategile',
    category: { pt: 'Gestao SaaS B2B · Varejo Multi-loja', en: 'B2B SaaS · Multi-store Retail' },
    stack: ['Blazor WebAssembly (.NET 8)', 'Azure Functions', 'Dapper', 'SQL Server', 'Flutter Mobile', 'Syncfusion Charts'],
    status: 'production',
    color: { from: '#1F2937', to: '#0B1220', ink: 'light', accent: '#C9A96B' },
    copy: {
      pt: {
        tagline: 'Estoque otimizado. Metas batidas.',
        shortDescription:
          'Plataforma de inteligencia operacional para redes varejistas com 3+ lojas. Integra ao ERP via pull nao-invasivo e adiciona algoritmos proprietarios.',
        longDescription: [
          'A Strategile nao substitui o ERP — ela conversa com ele. Pull diario (ou em tempo real) traz movimentos de venda, compra e transferencia. A partir dai entram os algoritmos: sugestao de pedido por lead-time real, balanceamento de estoque entre lojas, identificacao de obsoleto, leitura de margem por SKU.',
          'CRM integrado para orcamentos abertos, dashboards de metas em tempo real para gerentes, app mobile para vendedor e separacao. Calibrada em pet shops, materiais de construcao, autopeças e distribuidores — segmentos onde estoque parado vira prejuizo medido.',
        ],
        metric: 'Reducao media de 18% no estoque obsoleto',
        clients: 'Pet shops, materiais de construcao, autopeças, distribuidores',
      },
      en: {
        tagline: 'Optimized inventory. Targets met.',
        shortDescription:
          'Operational intelligence platform for retail chains with 3+ stores. Integrates with the ERP via non-invasive pull and adds proprietary algorithms.',
        longDescription: [
          "Strategile doesn't replace the ERP — it talks to it. A daily (or real-time) pull brings in sales, purchases, and transfers. From there, the algorithms kick in: order suggestion by real lead time, multi-store inventory balancing, obsolete-stock detection, SKU-level margin reading.",
          "Integrated CRM for open quotes, real-time goal dashboards for managers, a mobile app for sales reps and pickers. Calibrated across pet shops, building supplies, auto parts, and distributors — segments where idle inventory becomes measurable loss.",
        ],
        metric: 'Average 18% reduction in obsolete stock',
        clients: 'Pet shops, building supplies, auto parts, distributors',
      },
    },
  },
  {
    slug: 'app-igreja',
    name: 'AppIgreja',
    category: { pt: 'SaaS Multi-igreja · Gestao Eclesiastica', en: 'Multi-church SaaS · Church Management' },
    stack: ['React 18 + TypeScript', 'Material-UI v5', 'Redux Toolkit', 'Node.js + Express', 'PostgreSQL', 'JWT + BCrypt'],
    status: 'production',
    color: { from: '#1A1F2E', to: '#0B0F18', ink: 'light', accent: '#DCC58D' },
    copy: {
      pt: {
        tagline: 'Unidade e comunhao para sua familia de fe.',
        shortDescription:
          'SaaS multi-tenant para gestao administrativa, financeira e eclesiastica de igrejas e convenções.',
        longDescription: [
          'Plataforma multi-tenant que conecta diretoria, pastores, lideres e membros em uma unica ferramenta. Transparencia financeira sem planilha, agenda unificada, cadastro de membros com historico de participacao, conteudo devocional centralizado.',
          'Substitui o emaranhado de planilhas e WhatsApps que toda tesouraria conhece. Construido com tom respeitoso ao contexto eclesiastico — interface, vocabulario e fluxo pensados para o dia a dia da igreja.',
        ],
        clients: 'Convenções, igrejas locais, ministerios',
      },
      en: {
        tagline: 'Unity and fellowship for your church family.',
        shortDescription:
          'Multi-tenant SaaS for the administrative, financial, and ecclesiastical management of churches and conventions.',
        longDescription: [
          'A multi-tenant platform connecting board, pastors, leaders, and members in a single tool. Financial transparency without spreadsheets, unified calendar, member registry with participation history, centralized devotional content.',
          'Replaces the tangle of spreadsheets and WhatsApp chats every treasury knows. Built with a tone respectful to the ecclesiastical context — interface, vocabulary, and flow designed for the church’s daily life.',
        ],
        clients: 'Conventions, local churches, ministries',
      },
    },
  },
  {
    slug: 'smart-scan',
    name: 'SmartScan',
    category: { pt: 'PDV Mobile · Varejo Fisico', en: 'Mobile POS · Physical Retail' },
    stack: ['Flutter', 'API .NET', 'SQL Server', 'Camera scan', 'Bluetooth printer'],
    status: 'production',
    color: { from: '#162B22', to: '#08130F', ink: 'light', accent: '#C9A96B' },
    copy: {
      pt: {
        tagline: 'Liberta o vendedor do balcao.',
        shortDescription:
          'Conjunto de ferramentas mobile para varejo fisico — conferencia de mercadoria, consulta de preço e orcamento direto no corredor.',
        longDescription: [
          'Tres modulos em um app: conferencia de mercadoria recebida (cruza NF-e com fisico via scan de codigo de barras), consulta de preço e estoque na palma da mao, montagem de orçamento direto no corredor com o cliente.',
          'Substitui prancheta + planilha + computador fixo do caixa. O vendedor passa do balcao para o lado do cliente, fecha venda onde a duvida acontece, e a equipe de recebimento conferi com agilidade que planilha nao da.',
        ],
        clients: 'Materiais de construcao, autopeças, varejo fisico em geral',
      },
      en: {
        tagline: 'Free your salespeople from the counter.',
        shortDescription:
          'A set of mobile tools for physical retail — goods receiving, price lookup, and quote building right in the aisle.',
        longDescription: [
          'Three modules in one app: receiving check (cross-references invoices with physical goods via barcode scan), in-hand price and stock lookup, and quote building beside the customer in the aisle.',
          "Replaces the clipboard, the spreadsheet, and the cashier's fixed computer. Salespeople move from behind the counter to beside the customer and close deals where doubt arises, while the receiving team works at a speed no spreadsheet can match.",
        ],
        clients: 'Building supplies, auto parts, physical retail',
      },
    },
  },
  {
    slug: 'tantagrana',
    name: 'TantaGrana',
    category: { pt: 'Financas Pessoais', en: 'Personal Finance' },
    stack: ['.NET 10', 'Azure Functions', 'Blazor WebAssembly', 'MudBlazor', 'SQL Server', 'Clean Architecture'],
    status: 'development',
    color: { from: '#2A1F12', to: '#120A05', ink: 'light', accent: '#DCC58D' },
    copy: {
      pt: {
        tagline: 'Gestao estrategica das suas finanças.',
        shortDescription:
          'App de controle e gestao estrategica de finanças pessoais. Categorizacao inteligente, projecao de fluxo, metas com acompanhamento visual.',
        longDescription: [
          'Categorizacao automatica que aprende com o usuario, projecao de fluxo de caixa pessoal incluindo cartoes parcelados, e metas financeiras com visualizacao do progresso real versus planejado.',
          'Foco em decisao, nao em registro. Quanto menos a pessoa precisa digitar, mais ela usa. Quanto mais usa, mais clareza tem do proprio dinheiro.',
        ],
      },
      en: {
        tagline: 'Strategic management of your finances.',
        shortDescription:
          'Personal finance app for control and strategic management. Smart categorization, cash flow projection, visual goal tracking.',
        longDescription: [
          'Automatic categorization that learns from the user, personal cash-flow projection including credit-card installments, and financial goals with visual tracking of real versus planned progress.',
          'Focused on decision, not registration. The less the user types, the more they use it. The more they use it, the more clarity they get about their own money.',
        ],
      },
    },
  },
  {
    slug: 'tamarkado',
    name: 'TaMarkado',
    category: { pt: 'Agendamento · CRM', en: 'Scheduling · CRM' },
    stack: ['.NET 10', 'Azure Functions', 'Blazor WebAssembly', 'MudBlazor', 'SQL Server'],
    status: 'development',
    color: { from: '#1A1A2E', to: '#0A0A14', ink: 'light', accent: '#C9A96B' },
    copy: {
      pt: {
        tagline: 'Sua agenda, seus clientes, sua estrategia.',
        shortDescription:
          'Sistema completo de agendamento e gestao estrategica de clientes para negocios de servico.',
        longDescription: [
          'Agenda multi-profissional, lembretes automaticos via WhatsApp e email, historico do cliente com servicos prestados, indicadores comerciais que dizem para onde a operacao esta indo.',
          'Pensado para barbearias, clinicas, estudios, consultorios — onde o relacionamento com o cliente e a relacao economica e onde planilha simplesmente nao escala.',
        ],
        clients: 'Barbearias, clinicas, estudios, consultorios',
      },
      en: {
        tagline: 'Your schedule, your clients, your strategy.',
        shortDescription:
          'A complete scheduling and strategic client management system for service businesses.',
        longDescription: [
          "Multi-professional calendar, automated WhatsApp and email reminders, client history with delivered services, business indicators that show where the operation is heading.",
          "Designed for barbershops, clinics, studios, and offices — where the client relationship is the economic relationship and where spreadsheets simply don't scale.",
        ],
        clients: 'Barbershops, clinics, studios, offices',
      },
    },
  },
  {
    slug: 'spid-app',
    name: 'SpidApp / Xpid',
    category: { pt: 'Vendas Autonomas · Mobile', en: 'Autonomous Sales · Mobile' },
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'WhatsApp integration'],
    status: 'development',
    color: { from: '#2D1A1A', to: '#180A0A', ink: 'light', accent: '#DCC58D' },
    copy: {
      pt: {
        tagline: 'Do estoque ao financeiro, na palma da mao.',
        shortDescription:
          'Sistema de vendas para vendedor autonomo que opera porta a porta e via WhatsApp.',
        longDescription: [
          'Controle de estoque por movimentos (FIFO/custo medio), vendas com crediario parcelado, financeiro consolidado com fechamento mensal automatico, conciliacao de recebimentos.',
          'O vendedor autonomo carrega no bolso o que antes precisava de tres ferramentas: estoque, agenda e financeiro. Saida, entrada, dividas — tudo em um aparelho.',
        ],
      },
      en: {
        tagline: 'From stock to finance, in the palm of your hand.',
        shortDescription:
          'Sales system for autonomous sellers operating door-to-door and through WhatsApp.',
        longDescription: [
          'Inventory control by movements (FIFO/average cost), installment sales, consolidated finances with automatic monthly closing, receivables reconciliation.',
          'The autonomous seller carries in their pocket what used to require three tools: stock, schedule, and finance. Sales, intake, debts — all on one device.',
        ],
      },
    },
  },
  {
    slug: 'layer-one',
    name: 'Layer One / CAMADA',
    category: { pt: 'Infraestrutura · IA Empresarial', en: 'Infrastructure · Enterprise AI' },
    stack: ['Hono 4 (TypeScript)', 'Next.js 16', 'PostgreSQL + Drizzle', 'Go Agent', 'Better Auth', 'Claude via OpenRouter'],
    status: 'concept',
    color: { from: '#0F1F2A', to: '#050C12', ink: 'light', accent: '#C9A96B' },
    copy: {
      pt: {
        tagline: 'A camada que faz a IA falar o dialeto do seu ERP.',
        shortDescription:
          'Camada semantica entre bancos de dados/ERPs e IA empresarial. Multi-ERP, agnostico de fornecedor.',
        longDescription: [
          'Combina tres elementos: agente seguro em Go (sem abrir portas, conexao saindo do cliente), dicionario de traducao em tres niveis (ERP base, segmento, cliente) e interface conversacional que transforma SQL tecnico em respostas auditaveis na linguagem de negocio.',
          'Resolve o problema real de IA empresarial: nao adianta o modelo saber SQL se ele nao sabe que "produto" no seu sistema chama-se "MERC_COD" e que "venda perdida" e calculada de cinco formas diferentes dependendo do segmento.',
        ],
      },
      en: {
        tagline: "The layer that makes AI speak your ERP's dialect.",
        shortDescription:
          'Semantic layer between databases/ERPs and enterprise AI. Multi-ERP, vendor-agnostic.',
        longDescription: [
          "Combines three elements: a secure Go agent (no open ports, outbound connection only), a three-level translation dictionary (base ERP, vertical, client), and a conversational interface that turns technical SQL into auditable answers in business language.",
          'Solves the real enterprise-AI problem: it’s no use the model knowing SQL if it doesn’t know that "product" in your system is called "MERC_COD" and that "lost sale" is calculated five different ways depending on the segment.',
        ],
      },
    },
  },
  {
    slug: 'roteiro-temporada',
    name: 'Roteiro Temporada',
    category: { pt: 'SaaS · Gestao de Propriedades', en: 'SaaS · Property Management' },
    stack: ['React + TypeScript', 'Vercel Serverless', 'Supabase', 'Stripe', 'PWA'],
    status: 'production',
    color: { from: '#1F2A1F', to: '#0A1308', ink: 'light', accent: '#DCC58D' },
    copy: {
      pt: {
        tagline: 'Transparencia financeira para anfitrioes e proprietarios.',
        shortDescription:
          'PWA de gestao financeira e operacional para gestores de imoveis de temporada (Airbnb, Booking).',
        longDescription: [
          'Conciliacao bilateral entre gestor e proprietario do imovel, distribuicao automatica de receitas conforme regra contratual, controle de equipe de limpeza, guias digitais de hospedagem.',
          'Resolve a parte chata do negocio: a confianca entre o anfitriao gestor e o proprietario do apartamento. Tudo auditavel, tudo claro, tudo a um clique.',
        ],
        clients: 'Anfitrioes profissionais, gestores de imoveis de temporada',
      },
      en: {
        tagline: 'Financial transparency for hosts and property owners.',
        shortDescription:
          'PWA for financial and operational management of vacation-rental managers (Airbnb, Booking).',
        longDescription: [
          'Bilateral reconciliation between the manager and the property owner, automatic revenue distribution per contractual rule, cleaning-team control, digital guest guides.',
          "Solves the hard part of the business: trust between the host-manager and the apartment owner. Everything auditable, everything clear, everything one click away.",
        ],
        clients: 'Professional hosts, vacation-rental managers',
      },
    },
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

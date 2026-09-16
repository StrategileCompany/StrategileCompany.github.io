export type Locale = 'pt' | 'en';
export const LOCALES: Locale[] = ['pt', 'en'];
export const DEFAULT_LOCALE: Locale = 'pt';

export type Dict = {
  meta: {
    siteName: string;
    description: string;
  };
  nav: {
    portfolio: string;
    studio: string;
    contact: string;
    skipToContent: string;
  };
  langToggle: {
    label: string;
    pt: string;
    en: string;
  };
  hero: {
    kicker: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  homescreen: {
    kicker: string;
    title: string;
    subtitle: string;
    hoverHint: string;
    tapHint: string;
    open: string;
    phoneTag: string;
  };
  manifesto: {
    kicker: string;
    fields: string;
    statementA: string;
    statementEm: string;
    statementB: string;
    lines: string[];
  };
  capabilities: {
    kicker: string;
    title: string;
    items: { title: string; detail: string }[];
  };
  proof: {
    kicker: string;
    title: string;
    metrics: { value: string; label: string }[];
    sectorsLabel: string;
    sectors: string[];
  };
  process: {
    kicker: string;
    title: string;
    lead: string;
    steps: { title: string; detail: string }[];
  };
  cta: {
    kicker: string;
    title: string;
    body: string;
    action: string;
    email: string;
    whatsapp: string;
    whatsappLabel: string;
    whatsappText: string;
  };
  footer: {
    tagline: string;
    backToTop: string;
  };
  product: {
    kicker: string;
    whatItDoes: string;
    capabilities: string;
    stack: string;
    engineering: string;
    next: string;
    prev: string;
    backHome: string;
    status: { production: string; development: string; concept: string };
    platform: { mobile: string; web: string; hybrid: string };
  };
  notFound: {
    title: string;
    body: string;
    back: string;
  };
  /** Subpágina /agentes — divisão de venda de agentes (T-011) */
  agentes: {
    kicker: string;
    title: string;
    lead: string;
    /** Pitch em 2 parágrafos, na voz do estúdio */
    pitch: string[];
    examplesKicker: string;
    examplesTitle: string;
    examplesLead: string;
    ctaKicker: string;
    ctaTitle: string;
    ctaBody: string;
    ctaAction: string;
    ctaHint: string;
    backHome: string;
  };
  /** Chamada menor na home, entre Capabilities e Process (T-012) */
  homeAgentes: {
    kicker: string;
    title: string;
    body: string;
    action: string;
  };
};

const pt: Dict = {
  meta: {
    siteName: 'Strategile Company',
    description:
      'Consultoria, desenvolvimento de software sob medida e IA aplicada para automatizar processos e profissionalizar operações de empresas de vários setores.',
  },
  nav: {
    portfolio: 'Portfólio',
    studio: 'Expertise',
    contact: 'Contato',
    skipToContent: 'Pular para o conteúdo',
  },
  langToggle: {
    label: 'Idioma',
    pt: 'PT',
    en: 'EN',
  },
  hero: {
    kicker: 'Strategile Company · Software sob medida',
    titleA: 'Software sob medida',
    titleB: 'para o problema que é só seu.',
    subtitle:
      'Fazemos consultoria, desenvolvemos sistemas e aplicamos IA onde ela resolve — para automatizar processos, medir resultados e profissionalizar a operação. Confira algumas das nossas criações.',
    ctaPrimary: 'Ver a tela inicial',
    ctaSecondary: 'Falar com um especialista',
    scrollHint: 'role para abrir',
  },
  homescreen: {
    kicker: 'Portfólio',
    title: 'Nossa tela inicial.',
    subtitle: 'Alguns dos nossos sistemas. Cada um resolve a operação de um setor. Encoste em um ícone para abrir.',
    hoverHint: 'Encoste em um ícone',
    tapHint: 'Toque para conhecer',
    open: 'Abrir projeto',
    phoneTag: 'software sob medida',
  },
  manifesto: {
    kicker: 'Expertise',
    fields: 'Do varejo à gestão de igrejas.',
    statementA: 'Automatizamos o processo,',
    statementEm: 'integramos o que estava solto e medimos o resultado',
    statementB: '— e a operação deixa de depender de planilha.',
    lines: ['Processos que rodam sozinhos.', 'Indicadores em tempo real.', 'IA aplicada onde resolve.'],
  },
  capabilities: {
    kicker: 'Capacidades',
    title: 'O que sabemos construir.',
    items: [
      {
        title: 'Automação de processos',
        detail:
          'Importação, conciliação, fechamento de mês: o que era digitado à mão passa a acontecer sozinho.',
      },
      {
        title: 'Dashboards em tempo real',
        detail: 'Metas, estoque e margem na tela do gestor, no momento em que mudam.',
      },
      {
        title: 'Integrações',
        detail: 'ERP, WhatsApp, Open Finance, Airbnb e Booking, NF-e, impressora Bluetooth.',
      },
      {
        title: 'Mobile offline-first',
        detail: 'Apps que operam sem sinal e sincronizam depois, com impressão no local.',
      },
      {
        title: 'IA aplicada ao negócio',
        detail:
          'Chatbots e camadas semânticas que respondem em linguagem natural sobre os dados da empresa, com resposta auditável.',
      },
      {
        title: 'Engenharia como ofício',
        detail:
          '.NET, Go, TypeScript, Flutter — a ferramenta certa para cada operação.',
      },
    ],
  },
  proof: {
    kicker: 'Prova',
    title: 'Não é portfólio de conceito.',
    metrics: [
      { value: '10', label: 'sistemas construídos pela casa' },
      { value: '7', label: 'setores com operação real' },
      { value: '4', label: 'linguagens em produção' },
    ],
    sectorsLabel: 'Onde os nossos sistemas rodam hoje',
    sectors: [
      'Varejo multi-loja',
      'Materiais de construção',
      'Pet',
      'Autopeças',
      'Igrejas e convenções',
      'Locação de temporada',
      'Vendas porta a porta',
    ],
  },
  process: {
    kicker: 'Como trabalhamos',
    title: 'Do problema ao sistema no ar.',
    lead:
      'Software sob medida dá errado quando ninguém combina o que vai ser entregue. Por isso o caminho é sempre o mesmo, e cada etapa termina em algo que você consegue ver.',
    steps: [
      {
        title: 'Diagnóstico',
        detail:
          'Entendemos a operação como ela é hoje — inclusive os contornos, as planilhas paralelas e o que ninguém documentou.',
      },
      {
        title: 'Escopo',
        detail:
          'O que entra na primeira entrega e o que fica para depois, por escrito, antes de escrever uma linha de código.',
      },
      {
        title: 'Construção',
        detail:
          'Entregas curtas, com o sistema rodando de verdade a cada etapa — nada de desaparecer por três meses.',
      },
      {
        title: 'Operação',
        detail:
          'No ar com suporte, ajuste e evolução. A maior parte do nosso portfólio está nesta fase há anos.',
      },
    ],
  },
  cta: {
    kicker: 'Contato',
    title: 'Tem uma operação que nenhum sistema pronto resolve?',
    body:
      'Talvez seja a hora de uma solução personalizada. Descreva o problema com o máximo de detalhe — quanto mais específico, mais rápido sabemos como ajudar.',
    action: 'Falar com um especialista',
    email: 'strategilesoftware@gmail.com',
    whatsapp: '5522997552969',
    whatsappLabel: 'WhatsApp',
    whatsappText: 'Olá! Vim pelo site e quero falar sobre um projeto.',
  },
  footer: {
    tagline: 'Software sob medida. Feito no Brasil.',
    backToTop: 'Voltar ao topo',
  },
  product: {
    kicker: 'Projeto',
    whatItDoes: 'O que ele faz',
    capabilities: 'Capacidades',
    stack: 'Stack',
    engineering: 'Engenharia',
    next: 'Próximo projeto',
    prev: 'Projeto anterior',
    backHome: 'Voltar à tela inicial',
    status: {
      production: 'Em produção',
      development: 'Em desenvolvimento',
      concept: 'Conceito',
    },
    platform: {
      mobile: 'Mobile',
      web: 'Web',
      hybrid: 'Web + Mobile',
    },
  },
  notFound: {
    title: 'Tela não encontrada.',
    body: 'O endereço que você abriu não existe — ou ainda não foi construído.',
    back: 'Voltar à tela inicial',
  },
  // Pitch aprovado pelo dono em 2026-09-16 (T-019) — fonte: .docs/MARKETING.md §2. Tudo aqui é
  // promessa em nome da Strategile: mudar o texto é decisão dele. Nada de preço (T-018: cartas
  // sem preço no site) nem número medido.
  agentes: {
    kicker: 'Agentes Strategile',
    title: 'Funcionários de IA que tocam setores inteiros.',
    lead: 'A divisão de agentes da Strategile Company: em vez de uma ferramenta para alguém operar, o operador.',
    pitch: [
      'A Strategile constrói software sob medida há anos. A divisão de agentes é o passo seguinte: em vez de entregar uma ferramenta para alguém operar, entregamos o operador — um agente que assume um setor, executa a rotina dele todo dia e deixa registro do que decidiu.',
      'Cada agente nasce do mesmo método que constrói os sistemas da casa: entender o processo real, medir antes de prometer, e mostrar o que está de pé. A vitrine lista as funções disponíveis, o que cada uma já executou e em que condições — sem número inventado.',
    ],
    examplesKicker: 'Exemplos',
    examplesTitle: 'Três exemplos do que a vitrine lista.',
    examplesLead:
      'Cada agente é um cargo com rotina própria. O que ele já executou, com que constância e em que condições fica na vitrine — onde o número é medido, não escrito.',
    ctaKicker: 'Vitrine',
    ctaTitle: 'Veja as funções disponíveis e o que cada uma já executou.',
    ctaBody: 'A vitrine acompanha a execução real dos agentes. A lista completa vive lá.',
    ctaAction: 'Abrir a vitrine de agentes',
    ctaHint: 'agentes.strategilecompany.com.br',
    backHome: 'Voltar à tela inicial',
  },
  homeAgentes: {
    kicker: 'Divisão de agentes',
    title: 'Funcionários de IA que tocam setores inteiros.',
    body:
      'Além do software sob medida, a Strategile agora entrega o operador: agentes que assumem um setor, executam a rotina todo dia e deixam registro do que decidiram.',
    action: 'Conhecer a divisão de agentes',
  },
};

const en: Dict = {
  meta: {
    siteName: 'Strategile Company',
    description:
      'Consulting, custom software development and applied AI to automate processes and professionalize operations across many sectors.',
  },
  nav: {
    portfolio: 'Portfolio',
    studio: 'Expertise',
    contact: 'Contact',
    skipToContent: 'Skip to content',
  },
  langToggle: {
    label: 'Language',
    pt: 'PT',
    en: 'EN',
  },
  hero: {
    kicker: 'Strategile Company · Custom software',
    titleA: 'Custom software',
    titleB: "for a problem that's yours alone.",
    subtitle:
      "We consult, build systems and apply AI where it actually helps — to automate processes, measure results and professionalize operations. Take a look at some of what we've built.",
    ctaPrimary: 'See the home screen',
    ctaSecondary: 'Talk to a specialist',
    scrollHint: 'scroll to open',
  },
  homescreen: {
    kicker: 'Portfolio',
    title: 'Our home screen.',
    subtitle: 'Some of our systems. Each one runs the operation of a different sector. Hover an icon to open it.',
    hoverHint: 'Hover an icon',
    tapHint: 'Tap to explore',
    open: 'Open project',
    phoneTag: 'custom software',
  },
  manifesto: {
    kicker: 'Expertise',
    fields: 'From retail to church management.',
    statementA: 'We automate the process,',
    statementEm: 'connect what was scattered and measure the result',
    statementB: '— the operation stops depending on spreadsheets.',
    lines: ['Processes that run themselves.', 'Real-time indicators.', 'AI applied where it fits.'],
  },
  capabilities: {
    kicker: 'Capabilities',
    title: 'What we know how to build.',
    items: [
      {
        title: 'Process automation',
        detail:
          'Imports, reconciliation, month-end close: what used to be typed by hand now happens on its own.',
      },
      {
        title: 'Real-time dashboards',
        detail: "Targets, inventory and margin on the manager's screen, the moment they change.",
      },
      {
        title: 'Integrations',
        detail: 'ERP, WhatsApp, Open Finance, Airbnb and Booking, e-invoices, Bluetooth printers.',
      },
      {
        title: 'Offline-first mobile',
        detail: 'Apps that run without signal and sync later, with on-site printing.',
      },
      {
        title: 'Applied AI',
        detail:
          "Chatbots and semantic layers that answer in plain language over the company's data, with auditable results.",
      },
      {
        title: 'Engineering as craft',
        detail:
          '.NET, Go, TypeScript, Flutter — the right tool for each operation.',
      },
    ],
  },
  proof: {
    kicker: 'Proof',
    title: 'Not a portfolio of concepts.',
    metrics: [
      { value: '10', label: 'systems built in-house' },
      { value: '7', label: 'sectors with live operations' },
      { value: '4', label: 'languages in production' },
    ],
    sectorsLabel: 'Where our systems run today',
    sectors: [
      'Multi-store retail',
      'Building supplies',
      'Pet',
      'Auto parts',
      'Churches and conventions',
      'Vacation rentals',
      'Door-to-door sales',
    ],
  },
  process: {
    kicker: 'How we work',
    title: 'From the problem to a system in production.',
    lead:
      'Custom software goes wrong when nobody agrees on what will be delivered. That is why the path is always the same, and every stage ends in something you can actually see.',
    steps: [
      {
        title: 'Diagnosis',
        detail:
          'We map the operation as it really is today — including the workarounds, the side spreadsheets and whatever nobody wrote down.',
      },
      {
        title: 'Scope',
        detail:
          'What goes into the first delivery and what waits, in writing, before a single line of code is written.',
      },
      {
        title: 'Build',
        detail:
          'Short deliveries, with the system actually running at every stage — no disappearing for three months.',
      },
      {
        title: 'Operation',
        detail:
          'Live, with support, tuning and evolution. Most of our portfolio has been in this phase for years.',
      },
    ],
  },
  cta: {
    kicker: 'Contact',
    title: 'Got an operation no off-the-shelf system can solve?',
    body:
      "Maybe it's time for something built for you. Describe the problem in as much detail as possible — the more specific, the faster we'll know how to help.",
    action: 'Talk to a specialist',
    email: 'strategilesoftware@gmail.com',
    whatsapp: '5522997552969',
    whatsappLabel: 'WhatsApp',
    whatsappText: 'Hi! I came from the site and would like to talk about a project.',
  },
  footer: {
    tagline: 'Custom software. Made in Brazil.',
    backToTop: 'Back to top',
  },
  product: {
    kicker: 'Project',
    whatItDoes: 'What it does',
    capabilities: 'Capabilities',
    stack: 'Stack',
    engineering: 'Engineering',
    next: 'Next project',
    prev: 'Previous project',
    backHome: 'Back to the home screen',
    status: {
      production: 'In production',
      development: 'In development',
      concept: 'Concept',
    },
    platform: {
      mobile: 'Mobile',
      web: 'Web',
      hybrid: 'Web + Mobile',
    },
  },
  notFound: {
    title: 'Screen not found.',
    body: "The address you opened doesn't exist — or hasn't been built yet.",
    back: 'Back to the home screen',
  },
  // ⚠ DRAFT (T-019): translation of the PT pitch above — same status, not yet approved.
  agentes: {
    kicker: 'Strategile Agents',
    title: 'AI employees that run entire departments.',
    lead: "Strategile Company's agents division: instead of a tool for someone to operate, the operator.",
    pitch: [
      'Strategile has been building custom software for years. The agents division is the next step: instead of delivering a tool for someone to operate, we deliver the operator — an agent that takes over a department, runs its routine every day and leaves a record of what it decided.',
      'Every agent is born from the same method that builds our systems: understand the real process, measure before promising, and show what is actually running. The showcase lists the available roles, what each one has already executed and under which conditions — no made-up numbers.',
    ],
    examplesKicker: 'Examples',
    examplesTitle: 'Three examples of what the showcase lists.',
    examplesLead:
      'Each agent is a role with a routine of its own. What it has already executed, how consistently and under which conditions lives in the showcase — where the number is measured, not written.',
    ctaKicker: 'Showcase',
    ctaTitle: 'See the available roles and what each one has already executed.',
    ctaBody: "The showcase follows the agents' real execution. The full list lives there.",
    ctaAction: 'Open the agents showcase',
    ctaHint: 'agentes.strategilecompany.com.br',
    backHome: 'Back to the home screen',
  },
  homeAgentes: {
    kicker: 'Agents division',
    title: 'AI employees that run entire departments.',
    body:
      'Beyond custom software, Strategile now delivers the operator: agents that take over a department, run its routine every day and leave a record of what they decided.',
    action: 'Meet the agents division',
  },
};

export const dictionaries: Record<Locale, Dict> = { pt, en };

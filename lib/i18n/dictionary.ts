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
  cta: {
    kicker: string;
    title: string;
    body: string;
    action: string;
    email: string;
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
  cta: {
    kicker: 'Contato',
    title: 'Tem uma operação que nenhum sistema pronto resolve?',
    body:
      'Talvez seja a hora de uma solução personalizada. Descreva o problema com o máximo de detalhe — quanto mais específico, mais rápido sabemos como ajudar.',
    action: 'Falar com um especialista',
    email: 'strategilesoftware@gmail.com',
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
  cta: {
    kicker: 'Contact',
    title: 'Got an operation no off-the-shelf system can solve?',
    body:
      "Maybe it's time for something built for you. Describe the problem in as much detail as possible — the more specific, the faster we'll know how to help.",
    action: 'Talk to a specialist',
    email: 'strategilesoftware@gmail.com',
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
};

export const dictionaries: Record<Locale, Dict> = { pt, en };

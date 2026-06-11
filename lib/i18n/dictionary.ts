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
      'Estúdio de software que constrói produtos para operações reais — varejo, serviços, fé, finanças e infraestrutura de IA.',
  },
  nav: {
    portfolio: 'Portfólio',
    studio: 'Estúdio',
    contact: 'Contato',
    skipToContent: 'Pular para o conteúdo',
  },
  langToggle: {
    label: 'Idioma',
    pt: 'PT',
    en: 'EN',
  },
  hero: {
    kicker: 'Strategile Company · Estúdio de software',
    titleA: 'Software de abrir',
    titleB: 'todo dia.',
    subtitle:
      'Construímos produtos que carregam operações reais — o estoque da rede, a agenda do salão, o fiado da rua, a tesouraria da igreja e a camada entre o ERP e a IA.',
    ctaPrimary: 'Ver a tela inicial',
    ctaSecondary: 'Falar com o estúdio',
    scrollHint: 'role para abrir',
  },
  homescreen: {
    kicker: 'Portfólio',
    title: 'Nossa tela inicial.',
    subtitle: 'Oito produtos, oito operações diferentes. Encoste em um ícone para abrir.',
    hoverHint: 'Encoste em um ícone',
    tapHint: 'Toque para conhecer',
    open: 'Abrir projeto',
    phoneTag: 'software em produção',
  },
  manifesto: {
    kicker: 'Estúdio',
    fields: 'Varejo. Serviços. Fé. Finanças. Infraestrutura de IA.',
    statementA: 'Não somos especialistas em um setor.',
    statementEm: 'Somos especialistas em transformar operação em software',
    statementB: '— qualquer operação.',
    lines: ['Chão de loja, não boardroom.', 'Produto, não pitch.', 'Código como ofício.'],
  },
  capabilities: {
    kicker: 'Capacidades',
    title: 'O que sabemos construir.',
    items: [
      {
        title: 'Mobile offline-first',
        detail:
          'Apps que vendem sem sinal e sincronizam depois, com fila idempotente e impressão térmica na rua.',
      },
      {
        title: 'SaaS multi-tenant',
        detail: 'Uma plataforma, muitas empresas isoladas — do salão de bairro à convenção de igrejas.',
      },
      {
        title: 'IA aplicada ao negócio',
        detail: 'Camadas semânticas que ensinam o modelo a falar a língua do ERP, com resposta auditável.',
      },
      {
        title: 'Integrações de verdade',
        detail: 'ERP, WhatsApp, Open Finance, Airbnb e Booking, NF-e, impressora Bluetooth.',
      },
      {
        title: 'Dashboards em tempo real',
        detail: 'Metas, estoque e margem na tela do gerente — no momento em que mudam.',
      },
      {
        title: 'Engenharia como ofício',
        detail:
          'Event sourcing, arquitetura limpa, .NET, Go, TypeScript, Flutter — a ferramenta certa para cada operação.',
      },
    ],
  },
  cta: {
    kicker: 'Contato',
    title: 'Tem uma operação teimando em não virar software?',
    body:
      'Conta pra gente o problema — de preferência o concreto, com cheiro de chão de loja. É com esse tipo que a gente trabalha melhor.',
    action: 'Escrever para o estúdio',
    email: 'strategilesoftware@gmail.com',
  },
  footer: {
    tagline: 'Feito no Brasil. Em produção todos os dias.',
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
      'A software studio building products for real operations — retail, services, faith, finance and AI infrastructure.',
  },
  nav: {
    portfolio: 'Portfolio',
    studio: 'Studio',
    contact: 'Contact',
    skipToContent: 'Skip to content',
  },
  langToggle: {
    label: 'Language',
    pt: 'PT',
    en: 'EN',
  },
  hero: {
    kicker: 'Strategile Company · Software studio',
    titleA: 'Software you open',
    titleB: 'every day.',
    subtitle:
      "We build products that carry real operations — the chain's inventory, the salon's calendar, the street ledger, the church treasury and the layer between the ERP and AI.",
    ctaPrimary: 'See the home screen',
    ctaSecondary: 'Talk to the studio',
    scrollHint: 'scroll to open',
  },
  homescreen: {
    kicker: 'Portfolio',
    title: 'Our home screen.',
    subtitle: 'Eight products, eight different operations. Hover an icon to open it.',
    hoverHint: 'Hover an icon',
    tapHint: 'Tap to explore',
    open: 'Open project',
    phoneTag: 'software in production',
  },
  manifesto: {
    kicker: 'Studio',
    fields: 'Retail. Services. Faith. Finance. AI infrastructure.',
    statementA: "We're not specialists in one industry.",
    statementEm: "We're specialists in turning operations into software",
    statementB: '— any operation.',
    lines: ['Shop floor, not boardroom.', 'Product, not pitch.', 'Code as craft.'],
  },
  capabilities: {
    kicker: 'Capabilities',
    title: 'What we know how to build.',
    items: [
      {
        title: 'Offline-first mobile',
        detail:
          'Apps that sell without signal and sync later, with idempotent queues and thermal printing on the street.',
      },
      {
        title: 'Multi-tenant SaaS',
        detail: 'One platform, many isolated businesses — from the neighborhood salon to a convention of churches.',
      },
      {
        title: 'Applied AI',
        detail: "Semantic layers that teach the model to speak the ERP's language, with auditable answers.",
      },
      {
        title: 'Real integrations',
        detail: 'ERP, WhatsApp, Open Finance, Airbnb and Booking, e-invoices, Bluetooth printers.',
      },
      {
        title: 'Real-time dashboards',
        detail: "Targets, inventory and margin on the manager's screen — the moment they change.",
      },
      {
        title: 'Engineering as craft',
        detail:
          'Event sourcing, clean architecture, .NET, Go, TypeScript, Flutter — the right tool for each operation.',
      },
    ],
  },
  cta: {
    kicker: 'Contact',
    title: 'Got an operation refusing to become software?',
    body:
      "Tell us the problem — preferably the concrete kind, with shop-floor smell. That's the kind we work best with.",
    action: 'Write to the studio',
    email: 'strategilesoftware@gmail.com',
  },
  footer: {
    tagline: 'Made in Brazil. In production every day.',
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

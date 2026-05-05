export type Locale = 'pt' | 'en';
export const LOCALES: Locale[] = ['pt', 'en'];
export const DEFAULT_LOCALE: Locale = 'pt';

export type Dict = {
  meta: {
    siteName: string;
    tagline: string;
    description: string;
  };
  nav: {
    portfolio: string;
    about: string;
    contact: string;
    skipToContent: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    eyebrow: string;
    title: { line1: string; line2: string };
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  manifesto: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { title: string; body: string }[];
  };
  portfolioSection: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
    dragHint: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    sub: string;
    button: string;
  };
  portfolio: {
    title: string;
    sub: string;
    filters: { all: string; production: string; development: string; concept: string };
    statusLabels: Record<'production' | 'development' | 'concept', string>;
    nextProduct: string;
    prevProduct: string;
    visitSite: string;
    backToPortfolio: string;
    productMeta: {
      category: string;
      stack: string;
      status: string;
      metric: string;
      clients: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    manifestoTitle: string;
    manifestoBody: string[];
    teamTitle: string;
    teamSub: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      submitting: string;
      messagePlaceholder: string;
    };
    direct: {
      label: string;
      email: string;
    };
  };
  footer: {
    address: { label: string; lines: string[] };
    social: { label: string };
    copyright: string;
    builtWith: string;
  };
  langToggle: {
    label: string;
    pt: string;
    en: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  pt: {
    meta: {
      siteName: 'Strategile Company',
      tagline: 'Software de impacto operacional.',
      description:
        'Estudio de engenharia que constroi plataformas para varejo, vendas e gestao financeira. Oito produtos em producao, milhares de usuarios ativos.',
    },
    nav: {
      portfolio: 'Portfolio',
      about: 'Sobre',
      contact: 'Contato',
      skipToContent: 'Pular para o conteudo',
      closeMenu: 'Fechar menu',
      openMenu: 'Abrir menu',
    },
    hero: {
      eyebrow: 'Strategile Company',
      title: {
        line1: 'Software de impacto',
        line2: 'operacional.',
      },
      sub: 'Construimos plataformas para varejo, vendas e gestao financeira que viram receita mensuravel. Oito produtos em producao, milhares de usuarios ativos.',
      ctaPrimary: 'Ver portfolio',
      ctaSecondary: 'Conversar com a gente',
      scrollHint: 'Role para descobrir',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: 'Nao construimos software. Construimos vantagem competitiva.',
      paragraphs: [
        'Cada plataforma que entregamos resolve um problema operacional concreto — estoque obsoleto que sumiu da gondola, financeiro de igreja transparente para o membro, vendedor autonomo com controle de credito na palma da mao.',
        'Nao somos uma fabrica de telas. Somos um time pequeno e seletivo de engenheiros e operadores que entende o chao do varejo, do servico e da gestao. Software bom e o que vira lucro mensuravel — o resto e ruido.',
      ],
    },
    capabilities: {
      eyebrow: 'O que fazemos',
      title: 'Produtos especialistas. Engenharia seria.',
      sub: 'Nao somos generalistas. Cada vertical exige profundidade — e e nisso que apostamos.',
      items: [
        {
          title: 'Varejo & Logistica',
          body: 'Sugestao de pedido, balanceamento entre lojas, PDV mobile, conferencia de NF-e versus fisico. Algoritmos proprietarios calibrados em campo.',
        },
        {
          title: 'Gestao Financeira',
          body: 'Plataformas de finanças pessoais, conciliacao automatica, distribuicao de receita, fluxo de caixa projetado.',
        },
        {
          title: 'SaaS Multi-tenant',
          body: 'Arquitetura serverless, multi-empresa, multi-loja, multi-tenant. Escalavel sem inflar custo.',
        },
        {
          title: 'IA Empresarial',
          body: 'Camadas semanticas que traduzem o dialeto do ERP do cliente em linguagem de negocio. Auditavel, multi-fornecedor.',
        },
      ],
    },
    portfolioSection: {
      eyebrow: 'Portfolio em foco',
      title: 'Oito produtos. Um padrao.',
      sub: 'Arraste para explorar. Cada projeto e um problema real virando software.',
      cta: 'Ver portfolio completo',
      dragHint: 'Arraste · scroll · setas',
    },
    cta: {
      eyebrow: 'Vamos conversar',
      title: 'Tem um problema operacional teimando?',
      sub: 'Conta pra gente. Se for o tipo de problema que viramos software, voce ja sai dessa conversa com clareza.',
      button: 'Iniciar conversa',
    },
    portfolio: {
      title: 'Portfolio.',
      sub: 'Plataformas em producao e em construcao — varejo, financas, gestao, infraestrutura de IA.',
      filters: {
        all: 'Todos',
        production: 'Em producao',
        development: 'Em desenvolvimento',
        concept: 'Conceito',
      },
      statusLabels: {
        production: 'Em producao',
        development: 'Em desenvolvimento',
        concept: 'Conceito · Validacao',
      },
      nextProduct: 'Proximo',
      prevProduct: 'Anterior',
      visitSite: 'Visitar projeto',
      backToPortfolio: 'Voltar ao portfolio',
      productMeta: {
        category: 'Categoria',
        stack: 'Stack',
        status: 'Status',
        metric: 'Metrica',
        clients: 'Clientes',
      },
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Tres socios. Um padrao.',
      manifestoTitle: 'Engenharia proxima do chao.',
      manifestoBody: [
        'A Strategile Company nasceu da inquietacao de quem viu cedo, na operacao de varejo, planilhas e ERPs antigos engessando decisoes que custavam caro. Construimos software que vira lucro mensuravel — nao demos, nao prototipos, nao fluxos genericos.',
        'Trabalhamos pequeno por escolha. Cada cliente e um caso, cada produto e calibrado em campo. Engenharia e estrategia conversam diariamente. Quando um produto sai daqui, ja passou pelo chao da loja, pela mesa do tesoureiro, pela rotina do vendedor que carrega ele no bolso.',
      ],
      teamTitle: 'Time',
      teamSub: 'Tres frentes. Uma diretriz.',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar.',
      sub: 'Conta seu problema operacional. Respondemos em ate dois dias uteis.',
      form: {
        name: 'Seu nome',
        email: 'Email',
        company: 'Empresa',
        message: 'Sobre o que quer falar?',
        submit: 'Enviar mensagem',
        submitting: 'Enviando...',
        messagePlaceholder: 'Descreva brevemente o problema, segmento e tamanho da operacao.',
      },
      direct: {
        label: 'Ou direto por email',
        email: 'contato@strategilecompany.com.br',
      },
    },
    footer: {
      address: {
        label: 'Endereco',
        lines: ['Strategile Company', 'Brasil — atendimento remoto', 'CNPJ em registro'],
      },
      social: { label: 'Onde estamos' },
      copyright: 'Strategile Company. Todos os direitos reservados.',
      builtWith: 'Construido em Next.js, com calma e cuidado.',
    },
    langToggle: { label: 'Idioma', pt: 'PT', en: 'EN' },
  },
  en: {
    meta: {
      siteName: 'Strategile Company',
      tagline: 'Operational software that compounds.',
      description:
        'An engineering studio building retail, sales, and financial platforms that turn into measurable revenue. Eight products in production, thousands of active users.',
    },
    nav: {
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      skipToContent: 'Skip to content',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
    },
    hero: {
      eyebrow: 'Strategile Company',
      title: {
        line1: 'Operational software',
        line2: 'that compounds.',
      },
      sub: 'We build retail, sales, and financial platforms that turn into measurable revenue. Eight products in production, thousands of active users.',
      ctaPrimary: 'View portfolio',
      ctaSecondary: 'Talk to us',
      scrollHint: 'Scroll to explore',
    },
    manifesto: {
      eyebrow: 'Manifesto',
      title: "We don't build software. We build competitive advantage.",
      paragraphs: [
        'Every platform we ship solves a concrete operational problem — obsolete stock vanishing from shelves, transparent church finances for the membership, autonomous sellers with credit control in their pocket.',
        "We're not a screen factory. We're a small, selective team of engineers and operators who understand the retail floor, the service desk, and the back office. Good software is the kind that turns into measurable profit — the rest is noise.",
      ],
    },
    capabilities: {
      eyebrow: 'What we do',
      title: 'Specialist products. Serious engineering.',
      sub: "We don't generalize. Each vertical demands depth — and that's where we bet.",
      items: [
        {
          title: 'Retail & Logistics',
          body: 'Order suggestion, multi-store balancing, mobile POS, invoice-vs-physical reconciliation. Proprietary algorithms calibrated in the field.',
        },
        {
          title: 'Financial Management',
          body: 'Personal finance platforms, automated reconciliation, revenue distribution, projected cash flow.',
        },
        {
          title: 'Multi-tenant SaaS',
          body: 'Serverless architecture, multi-company, multi-store, multi-tenant. Scalable without inflating cost.',
        },
        {
          title: 'Enterprise AI',
          body: "Semantic layers that translate the client's ERP dialect into business language. Auditable, vendor-agnostic.",
        },
      ],
    },
    portfolioSection: {
      eyebrow: 'Selected work',
      title: 'Eight products. One standard.',
      sub: 'Drag to explore. Each project is a real problem turning into software.',
      cta: 'See full portfolio',
      dragHint: 'Drag · scroll · arrows',
    },
    cta: {
      eyebrow: "Let's talk",
      title: 'Got an operational problem dragging on?',
      sub: "Tell us. If it's the kind of problem we turn into software, you'll leave the conversation with clarity.",
      button: 'Start the conversation',
    },
    portfolio: {
      title: 'Portfolio.',
      sub: 'Platforms in production and in flight — retail, finance, management, AI infrastructure.',
      filters: {
        all: 'All',
        production: 'In production',
        development: 'In development',
        concept: 'Concept',
      },
      statusLabels: {
        production: 'In production',
        development: 'In development',
        concept: 'Concept · Validation',
      },
      nextProduct: 'Next',
      prevProduct: 'Previous',
      visitSite: 'Visit project',
      backToPortfolio: 'Back to portfolio',
      productMeta: {
        category: 'Category',
        stack: 'Stack',
        status: 'Status',
        metric: 'Metric',
        clients: 'Clients',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'Three partners. One standard.',
      manifestoTitle: 'Engineering close to the floor.',
      manifestoBody: [
        'Strategile Company was born from the impatience of those who saw, early on, retail operations being held back by spreadsheets and aging ERPs. We build software that turns into measurable profit — not demos, not prototypes, not generic flows.',
        'We stay small by choice. Each client is a case, each product is calibrated in the field. Engineering and strategy talk every day. By the time a product leaves us, it has been through the store floor, the treasurer’s desk, and the routine of the salesperson carrying it in their pocket.',
      ],
      teamTitle: 'Team',
      teamSub: 'Three fronts. One direction.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk.",
      sub: 'Tell us about your operational problem. We answer within two business days.',
      form: {
        name: 'Your name',
        email: 'Email',
        company: 'Company',
        message: 'What would you like to discuss?',
        submit: 'Send message',
        submitting: 'Sending...',
        messagePlaceholder: 'Briefly describe the problem, segment, and operation size.',
      },
      direct: {
        label: 'Or directly by email',
        email: 'contato@strategilecompany.com.br',
      },
    },
    footer: {
      address: {
        label: 'Address',
        lines: ['Strategile Company', 'Brazil — remote operations', 'CNPJ in registration'],
      },
      social: { label: 'Where to find us' },
      copyright: 'Strategile Company. All rights reserved.',
      builtWith: 'Built on Next.js, with care.',
    },
    langToggle: { label: 'Language', pt: 'PT', en: 'EN' },
  },
};

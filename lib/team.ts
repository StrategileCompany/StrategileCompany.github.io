import type { Locale } from './i18n/dictionary';

export type TeamMember = {
  slug: string;
  name: string;
  initials: string;
  role: { pt: string; en: string };
  expertise: { pt: string[]; en: string[] };
  bio: Record<Locale, string[]>;
};

export const team: TeamMember[] = [
  {
    slug: 'raphael-mendes',
    name: 'Raphael Mendes',
    initials: 'RM',
    role: { pt: 'CEO — Chief Executive Officer', en: 'CEO — Chief Executive Officer' },
    expertise: {
      pt: ['Estrategia Comercial', 'Crescimento', 'Gestao Estrategica'],
      en: ['Commercial Strategy', 'Growth', 'Strategic Management'],
    },
    bio: {
      pt: [
        'Lidera a direcao comercial e estrategica da Strategile Company. Conecta produto, mercado e crescimento — garantindo que cada vertical em que entramos seja uma escolha deliberada, nao acidente.',
        'Formacao em gestao, anos de campo construindo operacao em mercados onde a margem nao perdoa desatencao.',
      ],
      en: [
        "Leads Strategile Company's commercial and strategic direction. Connects product, market, and growth — making sure every vertical we enter is a deliberate choice, never an accident.",
        'Background in management, years in the field building operations in markets where margins do not forgive inattention.',
      ],
    },
  },
  {
    slug: 'bruno-fernandes',
    name: 'Bruno Fernandes',
    initials: 'BF',
    role: { pt: 'CTO — Chief Technology Officer', en: 'CTO — Chief Technology Officer' },
    expertise: {
      pt: ['Arquitetura Tecnologica', 'Sistemas de Alta Performance', 'Engenharia'],
      en: ['Technology Architecture', 'High-Performance Systems', 'Engineering'],
    },
    bio: {
      pt: [
        'Responsavel pela arquitetura tecnologica do portfolio. Define a stack, os padroes e a disciplina de engenharia — do .NET serverless aos PWAs em campo.',
        'Penso em sistemas que duram. Codigo bom envelhece bem.',
      ],
      en: [
        "Responsible for the technology architecture of the portfolio. Defines the stack, the patterns, and the engineering discipline — from serverless .NET to in-field PWAs.",
        'Thinks in systems that last. Good code ages well.',
      ],
    },
  },
  {
    slug: 'geraldo-pacheco-furtado-jr',
    name: 'Geraldo Pacheco Furtado Jr',
    initials: 'GP',
    role: { pt: 'COO — Chief Operating Officer', en: 'COO — Chief Operating Officer' },
    expertise: {
      pt: ['Visao de Produto', 'Operacoes', 'Customer Success', 'Varejo & Logistica'],
      en: ['Product Vision', 'Operations', 'Customer Success', 'Retail & Logistics'],
    },
    bio: {
      pt: [
        'Conduz a visao de produto e a operacao de Customer Success. Veio do chao do varejo — sabe como o estoque obsoleto se acumula, sabe como o gerente apaga incendio na sexta a tarde, e isso vira algoritmo.',
        'Ponte entre o cliente e a engenharia. Cada feature passa por uma pergunta: isso reduz custo, gera receita ou libera tempo da operacao?',
      ],
      en: [
        'Leads product vision and Customer Success operations. Came from the retail floor — knows how obsolete stock accumulates, knows how the manager fights fires on Friday afternoons, and that turns into algorithms.',
        'Bridge between client and engineering. Every feature passes one question: does this cut cost, generate revenue, or free operational time?',
      ],
    },
  },
];

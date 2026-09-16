import type { Locale } from './i18n/dictionary';

/**
 * Endereço definitivo da vitrine da divisão de agentes. Domínio da Company
 * (não do produto Strategile), já no ar com TLS válido — medido 2026-09-15.
 */
export const VITRINE_URL = 'https://agentes.strategilecompany.com.br/vitrine';

export type AgentExample = {
  /** id da carta na vitrine — rastreia de onde o texto veio */
  id: string;
  name: Record<Locale, string>;
  area: Record<Locale, string>;
  summary: Record<Locale, string>;
};

/**
 * Três cartas de exemplo com dados ESTÁTICOS curados.
 *
 * `nome`, `area` e `resumo` foram copiados UMA vez de
 * `https://agentes.strategilecompany.com.br/api/vitrine/agentes` em 2026-09-16
 * (resposta: 3 cartas, `total: 3`). Nenhum `fetch` em build nem em runtime:
 * `output: export` resolveria o fetch no build, e VPS fora do ar viraria deploy
 * quebrado. O site apresenta a divisão e entrega o visitante à vitrine — não a
 * duplica.
 *
 * Sem preço (T-018 é decisão do dono; nada de "sob consulta" com barra vazia) e
 * sem atributo numérico: número medido vive na vitrine, onde é atualizado. Aqui
 * congelaria.
 */
export const agentExamples: AgentExample[] = [
  {
    id: 'agent.strategile',
    name: { pt: 'Administrador Strategile', en: 'Strategile Administrator' },
    area: { pt: 'Direção', en: 'Management' },
    summary: {
      pt: 'Lê a empresa inteira todos os dias — produtos, jobs, custos e o que parou de rodar — e diz o que merece atenção agora e o que já pode ser aposentado.',
      en: 'Reads the whole company every day — products, jobs, costs and whatever stopped running — and says what deserves attention now and what can already be retired.',
    },
  },
  {
    id: 'agent.bugs',
    name: { pt: 'Caçador de Defeitos', en: 'Defect Hunter' },
    area: { pt: 'Qualidade', en: 'Quality' },
    summary: {
      pt: 'Lê logs, execuções falhadas e CI de todos os projetos ao mesmo tempo, e correlaciona: o defeito que aparece em três lugares costuma ter uma causa só.',
      en: 'Reads logs, failed runs and CI across every project at once, and correlates: the defect that shows up in three places usually has a single cause.',
    },
  },
  {
    id: 'agent.vps',
    name: { pt: 'Agente da VPS', en: 'VPS Agent' },
    area: { pt: 'Infraestrutura', en: 'Infrastructure' },
    summary: {
      pt: 'Cuida do servidor: serviços de pé, disco, memória, backups e certificados. Avisa antes de faltar espaço, não depois que o site caiu.',
      en: 'Looks after the server: services up, disk, memory, backups and certificates. Warns before space runs out, not after the site went down.',
    },
  },
];

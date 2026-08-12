/**
 * Fonte única dos dados do escritório.
 * Canais oficiais vêm daqui — nenhuma página escreve contato na mão.
 * Ver `_memoria/empresa.md` na raiz do MazyOS.
 */

export const SITE = {
  nome: 'Douglas Kovaleski',
  assinatura: 'Kovaleski Advogados',
  subtitulo: 'Advocacia Criminal e Empresarial no Rio de Janeiro',
  /** Exigida pelo Provimento 205/2021 do CFOB em toda peça de publicidade. */
  oab: 'OAB/RJ 249.333',
  url: 'https://kovaleskiadvogados.netlify.app',
  descricao:
    'Advogado criminalista no Rio de Janeiro. Atuação em prisão em flagrante, audiência de custódia, inquérito, processo criminal e execução penal. Atendimento direto com o advogado.',
} as const;

export const CONTATO = {
  whatsappNumero: '5521990267742',
  whatsappExibicao: '(21) 99026-7742',
  email: 'douglaskovaleski.adv@gmail.com',
  instagram: 'advdouglaskovaleski',
  instagramUrl: 'https://www.instagram.com/advdouglaskovaleski/',
} as const;

/** Monta o link do WhatsApp com mensagem pré-preenchida por contexto. */
export function whatsapp(mensagem?: string): string {
  const base = `https://wa.me/${CONTATO.whatsappNumero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

/**
 * As situações moram na coleção `src/content/situacoes/` — texto em markdown,
 * editável sem mexer em código. Use `getCollection('situacoes')` para lê-las.
 */

/** O fluxo divulgado publicamente. Ver `_memoria/empresa.md`. */
export const ETAPAS = [
  {
    numero: '01',
    titulo: 'Contato',
    texto:
      'Você fala direto com quem vai cuidar do seu caso pelo WhatsApp. Sem intermediário, sem central de atendimento.',
  },
  {
    numero: '02',
    titulo: 'Análise técnica',
    texto:
      'Entendo o cenário concreto: o que aconteceu, em que fase está e o que já foi feito ou dito.',
  },
  {
    numero: '03',
    titulo: 'Estratégia',
    texto:
      'Defino com você o caminho técnico para o caso e explico o que esperar de cada etapa.',
  },
  {
    numero: '04',
    titulo: 'Acompanhamento',
    texto:
      'Atuação até o fim, com você sabendo em que pé o processo está.',
  },
] as const;

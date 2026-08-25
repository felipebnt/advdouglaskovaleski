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

/**
 * Mensagem padrão dos botões sem contexto próprio (home, rodapé, botão
 * flutuante, 404, obrigado). Páginas com mensagem específica (situações,
 * empresarial, canais-oficiais) continuam passando a delas.
 */
export const MENSAGEM_PADRAO = 'Olá, preciso de orientação jurídica urgente';

/** Monta o link do WhatsApp com mensagem pré-preenchida por contexto. */
export function whatsapp(mensagem: string = MENSAGEM_PADRAO): string {
  const base = `https://wa.me/${CONTATO.whatsappNumero}`;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * IDs de rastreamento. Desde 25/08/2026 o GTM é o único container carregado
 * pelo código — é ele quem injeta qualquer outra tag (Google Ads, Analytics
 * etc.), configurada de dentro do próprio painel do GTM, não aqui.
 */
export const RASTREIO = {
  gtm: 'GTM-T9VZKWVF',
  /**
   * Não é mais carregada direto pelo site (era antes de 25/08/2026). Mantida
   * só como referência de qual ID cadastrar dentro da tag do GTM — extraída
   * do site antigo (kovaleskiadvogados.netlify.app) em 12/08/2026, sem rótulo
   * de conversão configurado (isso se cria no próprio Google Ads: Ferramentas
   * > Conversões).
   */
  googleAds: 'AW-18036409326',
} as const;

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

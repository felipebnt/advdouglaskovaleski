/**
 * Os marcos do eixo de prazos.
 *
 * Cada valor precisa ser verificável no Código de Processo Penal — é a
 * peça do site que sustenta a tese de que a condução inicial decide o resto,
 * e prazo errado num site de advogado é o pior defeito possível.
 */
export type Marco = {
  valor: string;
  rotulo: string;
};

/*
 * Os três primeiros prazos correm da prisão; o último corre do recebimento
 * dos autos pelo Ministério Público. Daí o "+": sem ele, um eixo que vai de
 * "10 dias" para "5 dias" parece tempo andando para trás.
 */
export const MARCOS: Marco[] = [
  { valor: '0h', rotulo: 'Prisão em flagrante' },
  { valor: '24h', rotulo: 'Audiência de custódia' },
  { valor: '10 dias', rotulo: 'Conclusão do inquérito' },
  { valor: '+5 dias', rotulo: 'Oferecimento da denúncia' },
];

export const RESSALVA =
  'Prazos gerais do Código de Processo Penal para o investigado preso. Os três primeiros contam da prisão; o último, do recebimento dos autos pelo Ministério Público. Variam conforme a lei aplicável ao caso.';

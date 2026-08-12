/**
 * A frente empresarial.
 *
 * O eixo do site é o relógio: no criminal, o prazo já está correndo quando a
 * pessoa chega. Aqui é o contrário. O empresário procura antes, e a pergunta
 * dele não é "quanto tempo eu tenho" e sim "quando eu deveria ter chamado".
 *
 * Por isso cada serviço carrega um `momento` em vez de um prazo. É o mesmo
 * elemento visual da situação criminal (o filete dourado em caixa alta),
 * com o sentido invertido: não o tempo que resta, e sim a hora de ligar.
 */
export type Servico = {
  titulo: string;
  /** Quando esse serviço deixa de ser opcional. Ocupa a linha do relógio. */
  momento: string;
  texto: string;
};

/**
 * Frente preventiva. É o carro-chefe da área: manter a empresa organizada
 * para que a decisão do dia a dia não vire passivo depois.
 */
export const PREVENCAO: Servico[] = [
  {
    titulo: 'Consultoria jurídica preventiva',
    momento: 'Antes de decidir',
    texto:
      'Orientação contínua sobre as decisões do dia a dia: um contrato novo, uma cobrança, uma rescisão, uma proposta de sociedade. A dúvida é tratada na hora em que aparece, não depois que a decisão já foi tomada.',
  },
  {
    titulo: 'Elaboração e revisão de contratos',
    momento: 'Antes de assinar',
    texto:
      'Contratos comerciais, prestação de serviços, fornecedores, parceiros e acordos de confidencialidade (NDA). Redigidos do zero ou revisados cláusula a cláusula antes da assinatura.',
  },
  {
    titulo: 'Direito societário',
    momento: 'Antes de mexer no quadro de sócios',
    texto:
      'Constituição de empresas, alterações contratuais, entrada e saída de sócios e reorganização societária. O que está escrito no contrato social é o que vale no dia em que a sociedade se desfaz.',
  },
  {
    titulo: 'Assessoria trabalhista empresarial',
    momento: 'Antes de contratar e antes de demitir',
    texto:
      'Consultoria para o empregador: documentos de admissão e de desligamento, políticas internas e organização das rotinas que costumam gerar passivo trabalhista.',
  },
  {
    titulo: 'Compliance e gestão de riscos',
    momento: 'Antes da fiscalização',
    texto:
      'Implementação de políticas internas e adequação da operação às normas do setor. Serve para a empresa saber onde está exposta antes que alguém de fora aponte.',
  },
  {
    titulo: 'LGPD e proteção de dados',
    momento: 'Antes de coletar o primeiro dado',
    texto:
      'Adequação à Lei Geral de Proteção de Dados: mapeamento do que a empresa coleta, política de privacidade, termos de uso e documentos internos de tratamento.',
  },
];

/**
 * Frente contenciosa. Existe porque prevenção não é garantia: quando o
 * conflito aparece mesmo assim, a representação é feita pelo mesmo advogado
 * que já conhece a operação.
 */
export const CONFLITO: Servico[] = [
  {
    titulo: 'Cobrança e recuperação de créditos',
    momento: 'Assim que o pagamento atrasa',
    texto:
      'Cobrança extrajudicial e, quando ela não resolve, ação judicial contra o cliente inadimplente. Quanto mais cedo a cobrança começa, mais caminhos ainda estão abertos.',
  },
  {
    titulo: 'Negociação e resolução de conflitos',
    momento: 'Antes de virar processo',
    texto:
      'Mediação, negociação estratégica e acordo extrajudicial. Nem todo conflito precisa de um juiz para terminar, e encerrar por acordo mantém a relação comercial de pé.',
  },
  {
    titulo: 'Defesa em processos judiciais',
    momento: 'Quando a citação chega',
    texto:
      'Atuação em ações cíveis, empresariais, trabalhistas e de consumo envolvendo a empresa, tanto na defesa quanto na propositura.',
  },
];

/** Como o acompanhamento começa. Espelha as ETAPAS do lado criminal. */
export const PASSOS = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    texto:
      'Conversamos sobre a operação: o que a empresa faz, com quem contrata, como paga e como recebe. É aí que aparece onde ela está exposta.',
  },
  {
    numero: '02',
    titulo: 'Prioridade',
    texto:
      'Nem tudo precisa ser resolvido no mesmo mês. Definimos juntos o que é urgente, o que é importante e o que pode esperar.',
  },
  {
    numero: '03',
    titulo: 'Organização',
    texto:
      'Contratos, documentos societários e políticas internas são elaborados ou revisados na ordem que ficou definida.',
  },
  {
    numero: '04',
    titulo: 'Acompanhamento',
    texto:
      'A partir daí o apoio é contínuo. A dúvida do dia a dia é tratada direto com o advogado, sem abrir chamado e sem esperar a próxima reunião.',
  },
] as const;

export const PERGUNTAS = [
  {
    pergunta: 'Preciso ter um departamento jurídico para contratar esse apoio?',
    resposta:
      'Não. O acompanhamento preventivo existe justamente para a empresa que não tem estrutura jurídica interna. A demanda chega direto ao advogado e é tratada por ele.',
  },
  {
    pergunta: 'O apoio é pontual ou contínuo?',
    resposta:
      'As duas formas existem. Um contrato pode ser revisado de forma avulsa. Mas boa parte do risco de uma empresa nasce nas decisões do dia a dia, e é por isso que o formato principal é o acompanhamento contínuo.',
  },
  {
    pergunta: 'A empresa já tem um processo em andamento. Ainda faz sentido?',
    resposta:
      'Sim. A defesa no processo faz parte do trabalho. Em paralelo, vale entender que decisão levou até ali, porque o mesmo tipo de cláusula ou de rotina costuma se repetir em outros contratos da empresa.',
  },
  {
    pergunta: 'Como fica o sigilo das informações da empresa?',
    resposta:
      'O que é dito no atendimento é coberto pelo sigilo profissional, e isso vale para contratos, quadro de sócios, faturamento e qualquer documento entregue. Nenhuma informação de cliente é usada em conteúdo, em exemplo ou em conversa.',
  },
] as const;

---
name: Kovaleski Advogados
description: Sistema visual escuro e serifado onde o prazo processual é a unidade de composição.
colors:
  dourado: "#c9973f"
  dourado-claro: "#d8b06a"
  dourado-fraco: "rgba(201, 151, 63, 0.28)"
  dourado-tenue: "rgba(201, 151, 63, 0.12)"
  preto: "#05070a"
  marinho: "#0e2036"
  marinho-claro: "#16304d"
  texto: "#f5f1ea"
  texto-suave: "rgba(245, 241, 234, 0.72)"
  texto-fraco: "rgba(245, 241, 234, 0.5)"
typography:
  display:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.24
    letterSpacing: "0.08em"
  display-compacto:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(1.7rem, 2.7vw, 2.4rem)"
    fontWeight: 500
    lineHeight: 1.24
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(1.35rem, 2.8vw, 1.95rem)"
    fontWeight: 500
    lineHeight: 1.24
    letterSpacing: "0.06em"
  title:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)"
    fontWeight: 500
    lineHeight: 1.24
    letterSpacing: "0.05em"
  body:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.68
  lead:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.24em"
  button:
    fontFamily: "Cinzel, 'Times New Roman', serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.14em"
  marker:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "8px"
  md: "14px"
  pill: "999px"
spacing:
  container-inline: "1.5rem"
  secao: "clamp(3.5rem, 8vw, 6rem)"
components:
  botao-contorno:
    backgroundColor: "transparent"
    textColor: "{colors.dourado-claro}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.6rem"
  botao-contorno-hover:
    backgroundColor: "{colors.dourado}"
    textColor: "{colors.preto}"
  botao-solido:
    backgroundColor: "{colors.dourado}"
    textColor: "{colors.preto}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.6rem"
  botao-solido-hover:
    backgroundColor: "{colors.dourado-claro}"
    textColor: "{colors.preto}"
  botao-discreto:
    backgroundColor: "transparent"
    textColor: "{colors.texto-suave}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.6rem"
  cartao:
    backgroundColor: "transparent"
    textColor: "{colors.texto-suave}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  selo:
    backgroundColor: "rgba(9, 16, 28, 0.94)"
    textColor: "{colors.texto-suave}"
    rounded: "{rounded.md}"
    padding: "1rem 1.15rem"
  # Carrega o número da OAB desde 12/08/2026. Antes disso era só posicionamento.
  pilula-contexto:
    backgroundColor: "transparent"
    textColor: "{colors.dourado}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 1rem"
  pilula-nav:
    backgroundColor: "rgba(14, 32, 54, 0.4)"
    textColor: "{colors.texto-suave}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.5rem"
  etapa:
    backgroundColor: "transparent"
    textColor: "{colors.texto-suave}"
    borderTop: "1px solid {colors.dourado-fraco}"
    padding: "1.25rem 0 0"
  pergunta:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    borderBottom: "1px solid {colors.dourado-tenue}"
    padding: "1.1rem 0"
---

# Design System: Kovaleski Advogados

## Overview

**Creative North Star: "O Relógio do Processo"**

O sistema tem uma unidade de composição, e ela não é visual: é o prazo. Todo momento que este produto descreve tem um relógio correndo, e o relógio é o que a tela mostra primeiro. Vinte e quatro horas até a audiência de custódia. Dez dias para a conclusão do inquérito. Quarenta e cinco dias de internação provisória. O sistema existe para tornar esses números visíveis, ordenados e verdadeiros.

A consequência é que ornamento aqui precisa codificar algo. Uma régua marca uma sequência real. Um tique dourado marca uma posição real no tempo. Um filete separa o que de fato é separado. Nada é acrescentado porque a tela parecia vazia, e é por isso que a paleta cabe em duas cores e o repertório de forma cabe em uma linha de 1px.

A base é escura porque a tela é lida no escuro, no celular, quase sempre por alguém em pânico. Sobre ela, um dourado envelhecido único e duas serifas que se dividem por função: uma carrega os números, a outra carrega as palavras. A autoridade do sistema vem da precisão, nunca do volume. É um sistema que prova competência acertando o prazo, não anunciando resultado.

**Key Characteristics:**

- Fundo escuro permanente, do preto ao marinho, nunca claro
- Um único destaque: dourado envelhecido, usado com escassez
- Duas serifas com divisão de trabalho fixa: números e títulos em uma, prosa na outra
- Zero sombra. A profundidade vem de gradiente e de linha de 1px
- Ornamento só quando codifica informação verdadeira
- Movimento lento, único e sempre dispensável

## Colors

Duas famílias e nada mais: um chão escuro que vai do preto ao marinho, e um dourado envelhecido que aparece pouco e por isso pesa.

### Primary

- **Dourado envelhecido / bronze** (`#c9973f`): o único destaque do sistema. Marca palavra-chave dentro de título, tique de eixo, contorno de botão, filete divisor, rótulo de prazo. Aparece em pouca área de tela por decisão, não por economia.
- **Variação clara** (`#d8b06a`): texto sobre fundo escuro quando o dourado cheio não teria contraste suficiente, e estado de hover do botão sólido.
- **Dourado a 28%** (`rgba(201, 151, 63, 0.28)`): borda de card e de campo em repouso. É a moldura padrão do sistema.
- **Dourado a 12%** (`rgba(201, 151, 63, 0.12)`): separador entre seções e borda de elemento fixo. Presente sem chamar atenção.

### Neutral

- **Fundo principal** (`#05070a`): o chão de tudo. Fundo de página, de seção e de card em repouso.
- **Marinho do gradiente** (`#0e2036`): o meio do gradiente de topo, que sobe do preto e volta ao preto dentro da própria faixa.
- **Marinho claro** (`#16304d`): halo atrás de figura recortada. Nunca é fundo de bloco.
- **Texto principal** (`#f5f1ea`): branco levemente quente. Título e corpo de leitura.
- **Texto a 72%** (`rgba(245, 241, 234, 0.72)`): parágrafo de apoio e texto de card.
- **Texto a 50%** (`rgba(245, 241, 234, 0.5)`): legenda, ressalva e metadado.

### Named Rules

**A Regra do Destaque Único.** O dourado é a única cor do sistema. Qualquer outro matiz vivo está proibido, incluindo o vermelho de alerta e o verde de sucesso. Um estado de erro se comunica por palavra e por posição, nunca por cor nova.

**A Regra do Fundo Escuro.** Não existe superfície clara neste sistema. Nem card, nem modal, nem tabela, nem impressão. Se um componente parece exigir fundo branco, o componente está errado.

## Typography

**Display Font:** Cinzel (fallback Times New Roman, serif)
**Body Font:** Cormorant Garamond (fallback Georgia, serif)

**Character:** duas serifas clássicas com temperamentos opostos. Cinzel é capitular, lapidar e desconfortável em texto corrido, então carrega só título, número e rótulo. Cormorant é leve, tem altura-x baixa e lê bem em bloco, então carrega toda a prosa. A divisão é o que dá ritmo ao sistema: quando um número aparece em Cinzel no meio de um parágrafo em Cormorant, ele vira marco sem precisar de caixa nem de cor.

### Hierarchy

- **Display** (500, `clamp(1.9rem, 4.6vw, 3.1rem)`, 1.24, tracking 0.08em, caixa alta): título de página. Um por tela.
- **Display compacto** (500, `clamp(1.7rem, 2.7vw, 2.4rem)`, 1.24, tracking 0.06em, caixa alta): o mesmo papel dentro do hero da home, que é o único lugar do site onde o título divide a largura com um retrato e um card. Na escala cheia ele quebrava em cinco linhas numa coluna de três. Existe só ali; qualquer outra página usa Display.
- **Headline** (500, `clamp(1.35rem, 2.8vw, 1.95rem)`, 1.24, tracking 0.06em, caixa alta): título de seção.
- **Title** (500, `clamp(1.1rem, 2vw, 1.3rem)`, 1.24, tracking 0.05em, caixa alta): título de card e de subitem.
- **Body** (400, 1.3rem, 1.68): prosa. Medida de leitura travada em 68ch. O corpo é maior que o usual de propósito, porque a altura-x baixa do Cormorant faz 1.3rem ler como 1.1rem.
- **Lead** (400, 1.4rem, 1.68, cor a 72%): parágrafo de abertura sob um título.
- **Label** (500, 0.78rem, tracking 0.24em, caixa alta, dourado): sobrancelha acima do título. Nomeia a seção, não a descreve.
- **Marker** (600, 0.78rem, tracking 0.14em, caixa alta, dourado, em Cormorant): o rótulo de prazo dos cards. Fica na serifa de leitura porque é frase, não numeral.

### Escala de rótulo

Todo texto pequeno de caixa alta sai de quatro degraus, expostos como variáveis CSS. Nome por tamanho, nunca por componente, porque o mesmo degrau serve botão, legenda e sobrancelha.

| Token | Valor | Onde aparece |
|---|---|---|
| `--txt-nano` | 0.62rem | assinatura secundária, rótulo de campo em card |
| `--txt-micro` | 0.65rem | migalha de navegação, item de menu, metadado de artigo |
| `--txt-mini` | 0.78rem | sobrancelha de seção, marcador de prazo |
| `--txt-pequeno` | 0.85rem | rótulo de botão, resumo de pergunta, legenda de eixo |

### Escala de texto secundário

Todo texto de apoio sai de três degraus, mais um exclusivo para algarismo.

| Token | Valor | Onde aparece |
|---|---|---|
| `--txt-nota` | 0.95rem | ressalva, nota de rodapé, legenda de eixo |
| `--txt-apoio` | 1.05rem | texto de lista, link de rodapé, descrição de etapa |
| `--txt-card` | 1.15rem | corpo de card e valor de contato |
| `--txt-numeral` | 1.6rem | numeral das etapas (01, 02, 03, 04) |

Antes eram dez tamanhos entre 0.62 e 0.88rem e sete entre 0.95 e 1.2rem, vinte valores literais ao todo. Ficaram oito degraus tokenizados.

A consolidação arredondou para cima onde houve dúvida. Num site lido sob estresse, em conexão ruim e às vezes de madrugada, o erro barato é o texto grande demais.

Sobram dois literais fora da escala, ambos intencionais: `1.3rem` e `1.4rem` são os próprios papéis Body e Lead, e `1.2rem` é o título comprimido da seção de prazos em tela de altura reduzida, onde o `clamp` padrão não caberia.

Fora deles há um único `clamp` próprio, o do Display compacto no hero da home. Ele é papel tipográfico, não valor solto: está declarado na hierarquia acima e vale só naquele hero.

### Named Rules

**A Regra da Divisão de Serifas.** Numeral e título em Cinzel. Palavra corrida em Cormorant. Um rótulo que é frase inteira fica em Cormorant mesmo em caixa alta, porque Cinzel em frase longa vira ruído.

**A Regra do Corpo Grande.** Nenhum texto de leitura abaixo de 1.3rem. O público lê no celular, sob estresse, às vezes de madrugada. Reduzir corpo para caber mais conteúdo é sempre a decisão errada.

**A Regra dos Degraus Fechados.** Rótulo de caixa alta usa `--txt-nano`, `--txt-micro`, `--txt-mini` ou `--txt-pequeno`. Texto secundário usa `--txt-nota`, `--txt-apoio` ou `--txt-card`. Nenhum valor literal novo nessas faixas. Se um caso parece exigir um degrau extra, quase sempre ele cabe no vizinho, e na dúvida arredonda-se para cima.

## Layout

Coluna central de no máximo 1120px com respiro lateral de 1.5rem. Texto de leitura travado em 68ch dentro dela, o que na prática cria duas larguras: a larga, para grades e composições, e a estreita, para prosa.

Ritmo vertical por seção em `clamp(3.5rem, 8vw, 6rem)`, o que faz o espaçamento crescer com a tela em vez de saltar em degraus. Grades usam `repeat(auto-fit, minmax(min(100%, 300px), 1fr))`, então a quebra acontece por espaço disponível e não por breakpoint declarado.

O hero é a exceção deliberada: três colunas assimétricas com o retrato ao centro transbordando a própria coluna, o texto à esquerda e o card de verificação à direita. No celular a mesma grade se reordena por área nomeada, sem duplicar marcação.

Os pontos de quebra observados são 1200, 1140, 1100, 860, 820 e 760. Existe também uma consulta por **altura** (760px) para a seção presa na tela, porque ali quem manda é a altura da janela, não a largura.

### Named Rules

**A Regra do Prazo Visível.** Toda tela que descreve um momento processual declara o relógio daquele momento antes de descrever qualquer outra coisa. Se não há prazo verdadeiro a declarar, não se inventa um.

**A Regra das Duas Larguras.** Prosa nunca ocupa a largura da grade. Se um parágrafo passa de 68ch, o layout está errado, não o texto.

## Elevation & Depth

O sistema é **plano por doutrina**. Não existe sombra decorativa em nenhum componente. A profundidade vem de três recursos, nessa ordem: o gradiente vertical do topo de seção, a linha de 1px dourada que delimita, e a translucidez dos elementos fixos.

Existem exatamente dois `box-shadow` no código, e nenhum dos dois é decorativo. Um é o brilho do tique do eixo, que acende proporcional ao progresso da rolagem e portanto codifica estado. O outro constrói as barras do ícone de menu.

### Named Rules

**A Regra Sem Sombra.** Nenhum componente ganha sombra para parecer elevado. Se um elemento precisa se destacar do fundo, ele ganha borda de 1px ou fundo translúcido, nunca sombra.

**A Regra do Vidro Só Onde Flutua.** Translucidez com desfoque é permitida apenas em elemento que de fato flutua sobre conteúdo rolante: cabeçalho fixo e botão flutuante. Em card estático o desfoque não muda nada visualmente e já causou falha de composição em GPU de celular, com o card virando bloco sólido sem conteúdo.

## Shapes

Repertório curto de propósito. Raio suave de 14px em card, botão e campo. Pílula completa (999px) em dois lugares e só neles: a cápsula da navegação e a etiqueta de contexto acima do título. Raio pequeno de 8px em controle de pouca área, como o ícone de menu.

A forma que define o sistema não é o retângulo arredondado: é a **linha de 1px dourada**. Ela é moldura de card, eixo de tempo, tique de marco, filete divisor sob título e traço que precede um rótulo de prazo. O mesmo traço em escalas e orientações diferentes é o que amarra o vocabulário visual inteiro.

Cards não têm preenchimento próprio. São o mesmo fundo escuro delimitado por moldura, o que faz a página inteira ler como uma superfície única com áreas demarcadas em vez de blocos empilhados.

## Components

### Buttons

- **Shape:** cantos suaves (14px), altura definida por padding de `0.85rem 1.6rem`, rótulo em Cinzel caixa alta com tracking 0.14em que **nunca quebra em duas linhas**.
- **Sólido (CTA principal):** fundo dourado cheio, texto preto. Reservado ao caminho para o WhatsApp. No máximo um por dobra.
- **Contorno (padrão):** fundo transparente, contorno dourado de 1px, texto em dourado claro. No hover inverte para fundo dourado e texto preto.
- **Discreto (secundário):** contorno a 28%, texto a 72%. No hover o contorno acende para dourado cheio.
- **Anatomia interna:** ícone à esquerda, separado do rótulo por um filete vertical de 1px. O filete é o mesmo traço do resto do sistema, em escala mínima.
- **Foco:** contorno de 2px em dourado claro com deslocamento de 3px, herdado do foco global. Nunca removido.

### Cards / Containers

- **Corner Style:** 14px.
- **Background:** nenhum. O card é o fundo da página delimitado por moldura de 1px a 28%.
- **Shadow Strategy:** nenhuma, conforme A Regra Sem Sombra.
- **Border:** 1px dourado a 28%, acendendo para dourado cheio no hover quando o card é clicável.
- **Internal Padding:** 1.75rem.
- **Hover:** elevação de 2px por `translateY`, sem sombra.

### Navigation

Cápsula em pílula com fundo marinho a 40% e desfoque, contendo itens em Cinzel `--txt-micro` caixa alta com tracking 0.14em. Item ativo e hover ganham fundo dourado a 16% e texto cheio, nunca sublinhado. Abaixo de 820px a cápsula vira bloco e o menu abre por controle de 8px.

Item de menu nunca quebra em duas linhas, pela mesma razão que rótulo de botão não quebra: um item empilhado desalinha a pílula inteira.

Abaixo de 1200px os itens e o vão da barra encolhem antes de qualquer coisa ser escondida. A ordem de sacrifício é fixa e importa: primeiro o tracking e o recuo dos itens, depois o vão entre os três blocos, e por último, abaixo de 1140px, o CTA do topo desaparece. O CTA é o último a cair porque é o gargalo declarado, e mesmo quando cai o botão flutuante mantém o caminho para o WhatsApp.

O ponto de corte do CTA é derivado, não escolhido: ele é a largura mínima em que marca, pílula e botão coexistem sem quebra. Cada item novo no menu empurra esse número para cima. Com seis itens ele saiu de 980px para 1140px, e é o custo real de acrescentar uma entrada na barra.

### Signature Component: o eixo de prazos

O componente que define o sistema. Uma seção presa na tela onde a rolagem desenha um eixo horizontal e cada marco acende quando a linha chega nele.

- **Estrutura:** eixo de 1px a 28% entre o primeiro e o último tique. Cada marco traz um tique vertical de 0.9rem em dourado cheio, um valor em Cinzel e um rótulo em Cormorant a 50%.
- **Sequência por marco:** o tique aparece com escala de 0.6 para 1, depois o número sobe 30px com fade, depois a descrição sobe 20px saindo de desfoque leve. Nunca simultâneos.
- **Progresso:** linear em relação à rolagem. As curvas ficam nas entradas curtas de cada elemento, nunca no traçado, porque em animação presa ao scroll quem dá o tempo é a mão de quem lê.
- **No celular:** o eixo gira para vertical e o tempo passa de cima para baixo.
- **Sem movimento:** a seção perde o pin, vira bloco comum e tudo nasce visível.

### Marcador de prazo

Rótulo curto que abre todo card de situação e todo topo de página de situação, precedido por um traço horizontal de 0.9rem em dourado. Quando o texto quebra em duas linhas, o traço alinha com a primeira, não com o centro do bloco. Substituiu uma etiqueta decorativa de "urgente": onde antes havia enfeite binário, agora há o prazo real daquele procedimento.

O mesmo marcador serve a frente empresarial com o sentido invertido. No criminal ele diz quanto tempo resta, porque o relógio já está correndo quando a pessoa chega. No empresarial ele diz **quando ligar**: "antes de assinar", "antes de mexer no quadro de sócios", "quando a citação chega". É o único elemento do sistema que muda de significado conforme a área, e muda porque as duas audiências chegam em pontos opostos da mesma linha do tempo.

### Etapas numeradas

Sequência de quatro passos em grade que se acomoda sozinha, cada um aberto por numeral em Cinzel a 1.6rem em dourado sobre filete superior de 1px a 28%. Filete no topo e não moldura fechada: é sequência, não coleção. Nasceu na home, foi copiada para `/sobre/` e de novo para `/empresarial/`; na terceira cópia virou componente global.

### Perguntas frequentes

Lista de `<details>` nativos separados por linha de 1px a 12%. O enunciado fica em Cinzel caixa alta com o sinal `+` em dourado à direita, que vira `−` quando aberto. Sem JavaScript de propósito: abre mesmo se o script falhar, e o conteúdo fechado continua no HTML para o buscador ler.

## Do's and Don'ts

### Do:

- **Do** declarar o prazo verdadeiro daquele momento antes de qualquer descrição, em Cormorant caixa alta 0.82rem com o traço dourado à frente.
- **Do** delimitar superfície com linha de 1px dourada a 28%, e separar seção com a mesma linha a 12%.
- **Do** manter numeral e título em Cinzel e toda prosa em Cormorant, mesmo quando o rótulo está em caixa alta.
- **Do** manter todo texto de leitura em 1.3rem ou mais e toda prosa dentro de 68ch.
- **Do** garantir que o caminho para o WhatsApp exista sem depender de animação, de rolagem ou de JavaScript. O botão do cabeçalho e o flutuante ficam fora de qualquer cascata de entrada.
- **Do** deixar todo elemento animado visível quando `prefers-reduced-motion` está ativo, zerando duração **e atraso**. Atraso não zerado deixa o elemento no estado inicial invisível.

### Don't:

- **Don't** usar sombra para sugerir elevação. Borda de 1px ou fundo translúcido resolvem.
- **Don't** aplicar desfoque de fundo em card estático. Vale só para elemento que flutua sobre conteúdo rolante.
- **Don't** introduzir matiz fora do par escuro/dourado, incluindo vermelho de alerta e verde de sucesso.
- **Don't** usar fundo claro em nenhuma superfície.
- **Don't** montar faixa de indicadores de desempenho, selo de avaliação ou depoimento, por mais que a referência de mercado peça. Publicidade de resultado e avaliação de cliente são vedadas para advogado no Brasil. A faixa existe, mas carrega prazos do CPP.
- **Don't** usar urgência visual agressiva: contagem regressiva, pulsação, seta piscando, "última chance". O público já está com pressa; o sistema não aumenta o pânico.
- **Don't** deixar rótulo de botão quebrar em duas linhas.
- **Don't** acrescentar ornamento que não codifique informação verdadeira. Se o traço não marca nada real, ele sai.

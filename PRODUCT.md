# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primários:** pessoas em situação criminal urgente no Rio de Janeiro e, principalmente, os **familiares** delas, que costumam ser quem procura, quem pesquisa e quem paga.

Chegam com medo e com pressa, quase sempre pelo celular, muitas vezes de madrugada. A decisão de contratar acontece em horas, não em semanas. Boa parte não conhece o vocabulário do procedimento (custódia, ato infracional, remissão) e não sabe o que pode ou não falar.

Os momentos de entrada já mapeados, cada um com prazo próprio:

- familiar preso em flagrante (custódia em até 24 horas)
- pessoa intimada a depor
- investigado em inquérito
- réu em processo criminal
- execução penal (progressão, livramento, remição)
- família de adolescente apreendido (ECA/DEGASE)
- pessoa notificada de medida protetiva

**Secundários (confirmados):** empresários que querem prevenir risco antes de virar processo. Uma página própria para esse público está prevista, com informação a ser fornecida.

## Áreas de atuação confirmadas

Lista informada pelo cliente em 29/07/2026, para a área criminal:

- Prisão em flagrante
- Audiência de custódia
- Defesa em processos criminais
- Atendimento em delegacias
- **Habeas corpus**
- Execução penal

O site também publica hoje três frentes que não constam nessa lista e que a memória do negócio confirma: inquérito policial, medidas protetivas e cautelares, e ato infracional (ECA/DEGASE). A lista parece ser de divulgação, não exaustiva, e a divergência ainda não foi resolvida com o cliente.

Habeas corpus era, até 11/08/2026, a única frente da lista sem cobertura. Passou a ter página própria em `/situacoes/habeas-corpus/`.

### Empresarial

Lista informada pelo cliente em 11/08/2026, com o enquadramento dele: **escritório full service para o empresário, com foco em advocacia preventiva**, dando apoio jurídico contínuo à empresa, mantendo a organização e mitigando risco. Quando o problema acontece mesmo assim, o mesmo escritório faz a representação no processo.

Nove frentes, que a página `/empresarial/` organiza em duas: prevenção (consultoria preventiva, contratos, societário, trabalhista empresarial, compliance, LGPD) e conflito (cobrança e recuperação de créditos, negociação e acordo, defesa em processos judiciais). A divisão é a própria frase do cliente virada arquitetura, não invenção.

O empresarial deixou de ser invisível na presença digital: tem página, entrada no menu, coluna no rodapé e link no cartão de áreas da home. **Esse texto ainda não passou pela revisão do Douglas.**

## Product Purpose

O site é **superfície de captação**, não de venda. Ele não fecha contrato, não cobra, não atende caso e não dá consulta.

Sucesso tem uma medida só: **alguém em situação urgente no RJ abrir o WhatsApp**. Esse é o gargalo declarado do negócio. Quem chega até o atendimento costuma fechar; o que falta é volume de contato qualificado.

Toda decisão futura passa pela mesma pergunta: isso faz alguém em situação urgente no RJ abrir o WhatsApp hoje?

## Positioning

Advogado que trabalha sozinho, por escolha. O cliente fala com quem conduz o caso, sem intermediário, sem central, sem estagiário repassando recado.

A tese que sustenta o posicionamento: **a condução inicial influencia todo o resto do caso**. A defesa criminal costuma ser procurada tarde, quando boa parte do que definiria o caso já está registrada, e registrada do jeito de quem acusa.

O que um concorrente não copia honestamente: disponibilidade real fora do horário comercial em um ofício onde flagrante e apreensão não escolhem hora, combinada com atendimento direto pelo próprio advogado.

## Operating Context

- **WhatsApp (21) 99026-7742** é a porta de entrada declarada. Todo conteúdo público converge para ela.
- Fluxo divulgado ao cliente: contato pelo WhatsApp, análise técnica do cenário, estratégia para o caso concreto, acompanhamento.
- Canais oficiais são reforçados publicamente **porque já houve golpista se passando pelo escritório**. Qualquer material que peça contato aponta só para os canais oficiais.
- O conteúdo é produzido dentro do MazyOS. O blog vive em markdown no repositório, com pipeline nas skills `/publicar-tema` e `/aprovar-post`.
- **Quem opera este workspace trabalha para o Douglas.** Ele valida antes de publicar. Todo conteúdo jurídico sai como proposta pendente de validação dele, nunca publicado direto.

## Capabilities and Constraints

**Restrições da OAB, não negociáveis.** Valem para todo texto, imagem, anúncio e legenda, mesmo se pedido em contrário:

- Nunca prometer resultado. Nada de "garantimos", "conseguimos a liberdade", "100% de êxito", taxa de sucesso ou número de casos ganhos.
- Nunca expor caso, cliente ou detalhe de processo, nem anonimizado de um jeito reconhecível.
- Sem mercantilização: sem preço, sem promoção, sem "consulta grátis", sem captação em cima de tragédia ou caso midiático.
- Sem depoimento ou avaliação de cliente como prova social.
- Não dar consulta jurídica em conteúdo público. O conteúdo orienta e encaminha ao atendimento.

**Restrições técnicas:**

- Site estático em Astro, sem servidor e sem banco de dados. Publicar exige o repositório, ou um painel que grave no GitHub (ainda não instalado).
- **Domínio final: `kovaleskiadvogados.com.br`** (confirmado ao vivo em 26/08/2026, servindo o build atual do Astro). A URL sai da variável de ambiente `SITE_URL`; até 26/08/2026 ela nunca esteve configurada no Vercel, então canônicas, og:url e sitemap saíam publicados com o endereço antigo do Netlify — corrigido trocando o valor padrão do código para o `.com.br`. Ainda vale configurar `SITE_URL` no próprio Vercel, pra não depender só desse padrão.

**Fatos de produto ainda em aberto:**

- Logo: não existe arquivo. As peças assinam com o nome em tipografia até existir.
- Área empresarial: publicada em 11/08/2026 e ainda não revisada pelo Douglas. O site inteiro converge para o mesmo WhatsApp, sem separar o contato do empresário do contato de quem está em situação criminal. Funciona, mas mistura duas conversas muito diferentes na mesma caixa de entrada. Decisão do cliente se vale separar.
- **Site antigo ainda no ar em `kovaleskiadvogados.netlify.app`, concorrendo com o `.com.br` no Google.** Não é uma versão desatualizada deste repositório: é outro código, outra hospedagem (sem `/empresarial/`, sem `/obrigado/`, sem marca de build do Astro), e não achamos esse domínio conectado a este repositório Git. Ninguém aqui tem credencial da conta Netlify, então não dá pra resolver por código — precisa entrar no painel da Netlify e (a) despublicar o site, se não serve mais pra nada, ou (b) configurar um redirect 301 de tudo para `https://kovaleskiadvogados.com.br` se ainda há link antigo (anúncio, backlink) apontando pra lá.
- **Rastreamento migrado pro GTM em 25/08/2026.** O site carrega só o container do Google Tag Manager (`GTM-T9VZKWVF`); a tag `AW-18036409326` (extraída do site antigo, era a única que existia lá) não é mais chamada direto pelo código. A página `/obrigado/` empurra um evento (`contato_whatsapp`) pro `dataLayer` a cada clique em botão do WhatsApp — o resto é configuração de dentro do próprio GTM, fora do repositório: (1) tag do Google Ads em All Pages, (2) gatilho de evento personalizado escutando `contato_whatsapp`, (3) quando existir o rótulo de conversão (Google Ads > Ferramentas e configurações > Conversões), a tag de conversão presa a esse gatilho, e (4) publicar o container. Sem acesso ao painel do GTM ou do Ads, nenhum desses quatro passos pode ser feito por aqui.

## Brand Commitments

- **Nome:** Douglas Kovaleski (marca pessoal). Assina também como Kovaleski Advogados.
- **Canais oficiais, únicos permitidos em qualquer peça:** WhatsApp (21) 99026-7742, Instagram @advdouglaskovaleski, e-mail douglaskovaleski.adv@gmail.com.
- **Tom de voz:** definido em `_memoria/preferencias.md`. Abre pelo cotidiano e depois vira técnico; frases curtas, um parágrafo por linha; fecha com ação clara. Evita tom de coach, sensacionalismo e leveza com assunto de prisão.
- **Proibição de escrita confirmada por ele:** não usar travessão em nada publicado, porque "fica muito com cara de IA".
- **Identidade visual:** `identidade/design-guide.md` é autoridade. Ele mesmo apontou o post "EVITE FRAUDES" como o padrão a seguir.

## Evidence on Hand

- **`site/astro-site/src/assets/hero.webp`: foto real do Douglas, confirmada por ele.** Pode ser usada como retrato legítimo em qualquer peça.
- **Número de inscrição: OAB/RJ 249.333, confirmado por ele em 12/08/2026.** Exibido no rodapé de toda página, na pílula do hero da home e no dado estruturado (schema.org `identifier`). Era o único bloqueio de publicação registrado neste arquivo; deixou de ser.
- Sete páginas de situação e um artigo de blog em rascunho, **escritos por IA e ainda não revisados juridicamente por ele**. Os prazos citados vêm do CPP e do ECA e precisam de conferência antes de publicar. Já houve um erro corrigido nessa base (prazo do ECA aplicado à execução penal).
- Textos reais dele que calibraram o tom: post "Boca fechada não entra mosca", aviso de canais oficiais, apresentação institucional.
- **Não existe e não deve ser fabricado:** logo, depoimento de cliente, avaliação, taxa de êxito, número de casos, tempo de atuação, prêmio.

## Product Principles

1. **O WhatsApp é a única métrica.** Toda seção, texto e efeito responde se aproxima ou afasta a pessoa do botão. Caminho para o contato nunca depende de animação ou de JavaScript.
2. **A pressa do usuário é uma restrição de projeto.** O público chega no 4G, no celular, sob estresse. Peso de página, tempo até o primeiro conteúdo e clareza valem mais que sofisticação.
3. **Autoridade se demonstra explicando, não se anunciando.** Sem números de desempenho, sem selo, sem superlativo. O que prova competência é o prazo certo, o procedimento explicado em português e a ressalva honesta.
4. **Prazo errado é o pior defeito possível.** Num site de advogado, um dado jurídico incorreto custa mais que qualquer problema visual. Toda afirmação de prazo é verificável e passa por revisão dele.
5. **A regra da OAB vence o pedido.** Se uma referência, um template ou um pedido no calor do momento esbarra na vedação, avisar e entregar a versão que passa, preservando a estrutura visual.

## Accessibility & Inclusion

Requisito vindo do público, não de norma abstrata: a pessoa lê sob estresse, no celular, em conexão ruim, às vezes de madrugada.

- Contraste suficiente sobre o fundo escuro em todo texto de leitura.
- Foco de teclado visível.
- `prefers-reduced-motion` respeitado sem esconder conteúdo. Nenhum elemento pode depender de animação para aparecer.
- Nenhum caminho para o contato atrás de interação opcional.

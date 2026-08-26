# Empresa

> Memória central do negócio. O Claude lê esse arquivo antes de cada resposta.

**Nome:** Kovaleski Advogados é a marca pública desde 12/08/2026 (antes, o cabeçalho e o rodapé do site assinavam como "Douglas Kovaleski"). Douglas Kovaleski é o advogado à frente do escritório, e o nome dele continua em título de página e no schema.org, onde a autoridade pessoal importa.
**Inscrição:** OAB/RJ 249.333, confirmada por ele em 12/08/2026. Toda peça de publicidade deve exibir esse número (Provimento 205/2021 do CFOB).
**Negócio:** Advocacia — Direito Criminal e Empresarial.
**O que faz:** Defesa criminal com estratégia, sigilo e resposta rápida, no Rio de Janeiro. Atende urgência (flagrante, custódia, intimação) e também assessoria jurídica preventiva para empresários e empresas.
**Perfil:** Escritório com equipe. Douglas confirmou em 12/08/2026 que tem parceiros trabalhando com ele (função e número não informados) e que a intenção é crescer, com o máximo possível de imagem de estrutura de escritório. O MazyOS segue instalado como perfil solopreneur/marca pessoal (ver `CLAUDE.md`) — vale revisar esse rótulo se a equipe continuar crescendo.
**Atende clientes:**
- **Criminal (carro-chefe):** pessoa física em situação urgente no RJ — familiar preso em flagrante, pessoa intimada a depor, investigado em inquérito, réu em processo criminal, execução penal (progressão, liberdade, remição) e família de adolescente em ECA/DEGASE. Quem procura está com medo e com pressa; a decisão de contratar acontece em horas, não em semanas.
- **Empresarial:** empresários e empresas que querem segurança na tomada de decisão, prevenção de risco e defesa de patrimônio. O enquadramento dado pelo cliente em 11/08/2026: escritório **full service** para o empresário, com foco em advocacia **preventiva**, dando apoio jurídico contínuo à empresa, mantendo a organização e mitigando risco. Quando o problema acontece mesmo assim, o mesmo escritório faz a representação no processo.
**Equipe:** Não é advogado autônomo trabalhando sozinho — tem parceiros. Evitar "eu trabalho sozinho" ou equivalente em qualquer peça nova. O atendimento direto continua sendo argumento de venda, só que reformulado: quem procura fala com quem conduz o caso, não com central de atendimento nem com intermediário.
**Ferramentas:**
- WhatsApp (21) 99026-7742 — principal porta de entrada
- Instagram [@advdouglaskovaleski](https://www.instagram.com/advdouglaskovaleski/)
- Site: https://kovaleskiadvogados.com.br/
- E-mail: douglaskovaleski.adv@gmail.com
- Rastreamento: desde 25/08/2026 o site carrega só o Google Tag Manager (`GTM-T9VZKWVF`); a tag do Google Ads (`AW-18036409326`, extraída do site antigo) não fica mais colada no código, se configura de dentro do próprio painel do GTM. Falta ele publicar o container e, quando tiver o rótulo de conversão do Ads, criar a tag de conversão lá dentro (ver `PRODUCT.md`).
**Principais entregas:**
- **Criminal:** prisão em flagrante, audiência de custódia, atendimento em delegacia, habeas corpus, acompanhamento de inquérito, defesa em processo criminal e recursos, medidas protetivas e cautelares, execução penal, ECA/DEGASE.
- **Empresarial, frente preventiva:** consultoria jurídica preventiva, elaboração e revisão de contratos (comerciais, prestação de serviços, fornecedores, parceiros, NDA), direito societário (constituição, alterações contratuais, entrada e saída de sócios, reorganização), assessoria trabalhista para o empregador, compliance e gestão de riscos, adequação à LGPD.
- **Empresarial, frente contenciosa:** cobrança e recuperação de créditos (extrajudicial e judicial), negociação e resolução de conflitos (mediação e acordo), defesa em processos judiciais cíveis, empresariais, trabalhistas e de consumo.

## Contexto adicional

- O site comunica as **duas áreas** desde 11/08/2026. O empresarial ganhou página própria em `/empresarial/`, entrada no menu, coluna no rodapé e link no cartão de áreas da home. O criminal segue sendo o carro-chefe e ocupa a home inteira.
- A marca pública mudou em 12/08/2026: cabeçalho e rodapé do site (e o design-guide, pra valer em qualquer peça nova) assinam como "Kovaleski Advogados" / "Advocacia Criminal e Empresarial", no lugar do nome pessoal "Douglas Kovaleski" / "Advocacia Criminal". Decisão dele, para reforçar leitura de escritório, não de advogado autônomo.
- A foto do hero (`site/astro-site/src/assets/hero.webp`) perdeu a balança da justiça que ficava atrás dele, a pedido dele em 12/08/2026 ("acho que vai ficar mais leve"). Não reintroduzir esse elemento em peças novas.
- A grade de situações no site tem 9 cartões, não 8: entrou "Atendimento em delegacia", que estava na lista dele e não tinha página própria.
- O WhatsApp é o **mesmo** para as duas áreas. O empresário e a família de alguém preso caem na mesma caixa de entrada, com mensagem pré-preenchida diferente mas número igual. Ainda não foi decidido se vale separar.
- Já houve golpista se passando pelo escritório — por isso os canais oficiais são reforçados publicamente. Qualquer material que peça contato deve apontar para os canais oficiais acima.
- Fluxo de atendimento divulgado: (1) contato pelo WhatsApp → (2) análise técnica do cenário → (3) estratégia para o caso concreto → (4) acompanhamento.
- Desde 19/08/2026, todo clique em botão do WhatsApp abre a conversa numa aba nova e, cerca de 1,2s depois, leva a aba original para `/obrigado/`. É o desvio de conversão: o wa.me tira a pessoa do site, então essa é a única forma de saber que o clique virou contato de verdade. A página fica fora do sitemap e é `noindex`, de propósito.

# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---
---

# Douglas Kovaleski — perfil aplicado

> Perfil **solopreneur / marca pessoal**, aplicado pelo `/instalar` em 28/07/2026.

## O que é esse workspace

Operação da marca pessoal do Douglas Kovaleski, advogado criminalista no Rio
de Janeiro. Aqui se produz o conteúdo, o material de captação e os documentos
que fazem o telefone tocar — e se guarda o contexto pra isso não precisar ser
explicado de novo a cada vez.

**Estrutura de pastas:**
- `_memoria/` — quem ele é, como fala, o que tá em foco
- `identidade/` — cores, fontes, padrão visual (logo ainda não existe)
- `marketing/` — conteúdo, SEO, campanhas (saída das skills)
- `saidas/` — análises, e-mails, documentos pontuais
- `dados/` — arquivos a analisar (CSV, PDF, planilha)
- `scripts/` — utilitários (gerar imagem, publicar, render)
- `templates/` — moldes usados pelas skills

## Quem é

Douglas Kovaleski, advogado especialista em **direito criminal e empresarial**,
atuando no Rio de Janeiro. Trabalha sozinho: o cliente fala com o advogado, não
com intermediário. O criminal é o carro-chefe — flagrante, custódia, inquérito,
processo, execução penal, ECA/DEGASE.

O diferencial dele não é volume nem preço: é condução técnica desde o primeiro
contato, num momento em que a pessoa costuma decidir errado por medo. O
posicionamento público é esse — *a condução inicial influencia todo o resto do
caso*.

## O que produz

- Posts e carrosséis no Instagram ([@advdouglaskovaleski](https://www.instagram.com/advdouglaskovaleski/)) — orientação prática pra quem tá numa situação criminal
- Conteúdo do site (https://kovaleskiadvogados.com.br/)
- Peças de utilidade e alerta (ex: canais oficiais / golpe)
- Propostas e comunicação direta com cliente

## Audiência

Pessoas no RJ em situação criminal urgente — e, principalmente, **os familiares
delas**, que muitas vezes são quem procura, quem pesquisa e quem paga. Chegam
assustados, com pressa e sem saber o que podem ou não falar. No empresarial, a
audiência é o empresário que quer prevenir risco antes de virar processo.

## Tom de voz

Ver `_memoria/preferencias.md` — resumo: abre pelo cotidiano, vira técnico
depois; frases curtas, um parágrafo por linha; fecha com ação clara; "nós" no
institucional, "eu" no convite direto; emoji só quando funcional.

Evitar: tom de coach/guru e qualquer sensacionalismo ou promessa de resultado.

## Regras duras (OAB) — não negociáveis

Valem pra **todo** texto, imagem, anúncio ou legenda gerado aqui, mesmo que
seja pedido em contrário no calor do momento. Se um pedido esbarrar nisso,
avisar e propor a versão que passa:

- **Nunca prometer resultado.** Nada de "garantimos", "conseguimos a liberdade",
  "100% de êxito". O compromisso é com atuação técnica, nunca com desfecho.
- **Nunca expor caso, cliente ou detalhe de processo** — nem anonimizado de um
  jeito que dê pra reconhecer. Sigilo é o produto.
- **Nada de mercantilização**: sem preço em post, sem promoção, sem "consulta
  grátis", sem captação sensacionalista em cima de tragédia ou caso midiático.
- **Não dar consulta jurídica em conteúdo público.** O conteúdo orienta e
  encaminha ao atendimento; não resolve o caso concreto de ninguém.
- Todo material com contato aponta só pros **canais oficiais**: WhatsApp
  (21) 99026-7742, @advdouglaskovaleski, douglaskovaleski.adv@gmail.com.

## Regras do sistema

- Conteúdo novo salva em `marketing/conteudo/<tipo>-<tema>-<data>/`
- Todo conteúdo público fecha com CTA pro WhatsApp — é o gargalo declarado
- Conteúdo sai como **proposta pra revisão**, nunca publicado direto sem o ok dele
- Antes de qualquer peça visual, ler `identidade/design-guide.md`

## Ferramentas conectadas

- [ ] Notion
- [ ] Canva
- [ ] Google Calendar
- [ ] Meta Ads
- [ ] Google Ads

*(Marcar conforme for instalando os MCPs)*

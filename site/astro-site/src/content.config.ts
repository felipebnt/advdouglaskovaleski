import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog. O frontmatter aqui é o mesmo que a skill /publicar-tema gera —
 * mudar um lado exige mudar o outro.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Douglas Kovaleski'),
    keywords: z.array(z.string()).default([]),
    /** Slug de uma situação — cria o link cruzado entre blog e /situacoes/. */
    situacao: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

/**
 * As portas de entrada do site: uma página por momento de urgência.
 * São elas que respondem a quem busca socorro no Google.
 */
const situacoes = defineCollection({
  loader: glob({ base: './src/content/situacoes', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    /** Como a própria pessoa descreveria o problema — texto dos cards. */
    chamada: z.string(),
    resumo: z.string(),
    descricao: z.string(),
    /** Define a ordem de exibição. Urgência primeiro. */
    ordem: z.number(),
    /**
     * O prazo que corre nessa situação, em uma linha. Substitui a etiqueta
     * "urgente": cada momento tem um relógio próprio, e isso é fato do
     * procedimento, não enfeite. Precisa ser verdadeiro e verificável.
     */
    relogio: z.string(),
    mensagemWhatsapp: z.string(),
    keywords: z.array(z.string()).default([]),
    perguntas: z
      .array(z.object({ pergunta: z.string(), resposta: z.string() }))
      .default([]),
  }),
});

export const collections = { blog, situacoes };

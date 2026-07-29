import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const artigos = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  return rss({
    title: `Orientação | ${SITE.assinatura}`,
    description:
      'Textos sobre direito criminal para quem precisa entender o que está acontecendo.',
    site: context.site ?? SITE.url,
    items: artigos.map((artigo) => ({
      title: artigo.data.title,
      description: artigo.data.description,
      pubDate: artigo.data.publishedAt,
      link: `/blog/${artigo.id}/`,
    })),
    customData: '<language>pt-br</language>',
  });
}

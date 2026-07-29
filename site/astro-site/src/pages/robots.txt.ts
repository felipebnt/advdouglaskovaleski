import type { APIContext } from 'astro';
import { SITE } from '../consts';

/** Gerado a partir do domínio configurado, para não ficar preso a um host. */
export function GET(context: APIContext) {
  const base = context.site ?? new URL(SITE.url);
  const corpo = `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', base).href}
`;

  return new Response(corpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

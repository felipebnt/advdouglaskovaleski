// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Domínio do site. Define canônicas, sitemap e RSS.
 * Em produção, configure SITE_URL nas variáveis de ambiente do host
 * (Vercel, Netlify) com o domínio final — sem barra no fim.
 */
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  'https://kovaleskiadvogados.com.br';

export default defineConfig({
  site,
  integrations: [
    // /obrigado/ é confirmação de clique, não conteúdo de busca — fora do
    // sitemap, além de já estar marcada `noindex` na própria página.
    sitemap({ filter: (pagina) => !pagina.includes('/obrigado') }),
  ],
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});

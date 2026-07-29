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
  'https://kovaleskiadvogados.netlify.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});

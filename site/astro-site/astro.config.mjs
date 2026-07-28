// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kovaleskiadvogados.netlify.app',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});

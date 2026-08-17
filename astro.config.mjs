import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set the production origin here once a domain is registered, e.g. 'https://your-domain.ph'.
// Leave blank during local/preview builds; no placeholder origin is emitted.
const SITE = '';

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});

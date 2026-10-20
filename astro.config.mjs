import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical origin for page metadata, language alternates and sitemap.
const SITE = 'https://168mallmanila.com';

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});

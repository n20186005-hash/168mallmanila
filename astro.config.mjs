import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production origin. Must stay in sync with the canonical host that Search Console
// reports (non-www, HTTPS) so canonical, hreflang, Open Graph, JSON-LD and the
// sitemap all resolve to the same absolute URLs.
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

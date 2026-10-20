# 168 Shopping Mall Visitor Guide

Independent static guide in Filipino (`/`), English (`/en/`) and Chinese (`/zh/`). Each locale also provides privacy, terms and cookie-settings pages.

## Local commands

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

The project pins Astro, Tailwind, TypeScript, Node and pnpm versions. `astro.config.mjs` supplies the canonical origin for metadata, language alternates and sitemap. Keep the redirect hosts in `src/worker.js` aligned with that origin.

## Hosting

The Worker runs before the ASSETS binding. HTTP and www requests receive a 301 to the HTTPS apex with paths and queries preserved. Static Assets uses `404-page` handling; missing pages retain status 404 and a noindex response header. Verify the Cloudflare project identity, bindings, production build and final-domain responses before accepting a release.

## Content and privacy

`src/data/content.ts` contains localized visitor copy and shared place facts. Review all three languages when facts change, including FAQs and any structured data. Public Maps observations require a check date and attribution; they are not reviews collected by this guide.

GA4 is loaded after optional analytics consent. Local consent storage failures do not block the current choice. Legal pages describe the guide's privacy, terms and cookie settings.

## Offline support and photographs

The service worker handles same-origin GET requests only. Navigations are network-first; an uncached offline page returns an offline 503 rather than the homepage. Static assets use stale-while-revalidate. Increment its cache version when required to invalidate cached assets.

See `PHOTO-CREDITS.md` and the on-page credits for local Wikimedia Commons photographs and their licenses.

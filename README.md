# 168 Shopping Mall Visitor Guide

A three-language static visitor guide for 168 Shopping Mall in Divisoria, Manila.

## Routes

- `/` — Filipino (default)
- `/en/` — English
- `/zh/` — Chinese

## Stack

Astro 7, Tailwind CSS 4, TypeScript, pnpm, Cloudflare Workers Static Assets. No database, login, or CMS.

## Commands

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Production URL

Set the domain **only** in `astro.config.mjs` at `const SITE = ''`.

When `SITE` is blank:

- the build still succeeds;
- canonical/absolute Open Graph URLs are omitted or use relative asset paths;
- hreflang links remain relative;
- sitemap integration is disabled, so no fake-domain sitemap is generated.

When a real domain is set, canonical, hreflang, Open Graph, JSON-LD image/URL, and `@astrojs/sitemap` all derive from that one Astro `site` value.

## Cloudflare Workers Static Assets

`wrangler.jsonc` points `assets.directory` to `./dist`. No Worker entrypoint is required for this static-only build. The deploy script pins Wrangler at `4.123.0` through `pnpm dlx`.

## Analytics and consent

GA4 measurement ID: `G-HXM22WWPKP`. GA4 is injected only after analytics consent; rejecting optional cookies does not load the Google Analytics script.

## Photo credits

See `PHOTO-CREDITS.md` for the three local Wikimedia Commons photographs and their Creative Commons licenses.

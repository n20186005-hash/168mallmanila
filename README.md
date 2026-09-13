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

Set the domain **only** in `astro.config.mjs` at `const SITE = 'https://168mallmanila.com'`.

The configured origin must stay in sync with the canonical host reported in Search
Console (non-www, HTTPS). If `SITE` is ever blanked out again:

- the build still succeeds;
- canonical/absolute Open Graph URLs are omitted or use relative asset paths;
- hreflang links remain relative;
- sitemap integration is disabled, so no fake-domain sitemap is generated.

When a real domain is set, canonical, hreflang, Open Graph, JSON-LD `url`/`image`/`@id`,
and `@astrojs/sitemap` all derive from that one Astro `site` value.

### Cloudflare zone settings that this repo cannot enforce

`wrangler.jsonc` only serves static assets, so scheme/host normalisation has to live in
the Cloudflare dashboard:

- SSL/TLS → Edge Certificates → **Always Use HTTPS = On** (otherwise `http://…` keeps being
  crawled and indexed as a separate duplicate of the `https://…` pages);
- Rules → Redirect Rules: redirect `www.168mallmanila.com/*` to
  `https://168mallmanila.com/$1` with a 301 if the www host is reachable.

## Cloudflare Workers Static Assets

`wrangler.jsonc` points `assets.directory` to `./dist`. No Worker entrypoint is required for this static-only build. The deploy script pins Wrangler at `4.123.0` through `pnpm dlx`.

## Analytics and consent

GA4 measurement ID: `G-HXM22WWPKP`, wired through **Consent Mode v2** on both the guide
pages and the legal pages:

- `consent` defaults to `denied` for `analytics_storage`, `ad_storage`, `ad_user_data`
  and `ad_personalization`, with `functionality_storage` / `security_storage` granted;
- choosing “accept” in the cookie banner (or the checkboxes on `/cookies/`) issues a
  `consent` `update` and only then loads `gtag.js`;
- rejecting optional cookies never loads the Google Analytics script.

## Single source of truth for entity facts

`src/data/content.ts` exports `mallFacts`, which holds every verifiable fact about the
attraction (name, alternate names, street, city, region, postal code, country, Plus Code,
coordinates, phone, Google Maps share URL, official site and opening hours) plus
`authoritativeSources`, the official `.gov.ph` links used by `SourcesSection.astro`.

Page copy, the visible entity blocks and all JSON-LD blocks derive from these values, so
the rendered page and the structured data can never drift apart. When the mall's details
change, edit `mallFacts` only.

## Structured data

Four JSON-LD blocks are emitted per page:

| Block | Purpose |
| --- | --- |
| `TouristAttraction` + `ShoppingCenter` + `LocalBusiness` | One pinned entity node at `#attraction`, with `alternateName`, `geo`, `containedInPlace` (City of Manila), `hasMap`, `sameAs`, `photo[]` and `aggregateRating` |
| `BreadcrumbList` | Geographic hierarchy: 168 Shopping Mall → Binondo → Manila → Metro Manila → Philippines |
| `FAQPage` | Mirrors the visible FAQ accordion |
| `WebSite` | Site-level node with `inLanguage` for all three locales |

Two deliberate constraints:

1. `aggregateRating` must keep a `reviewCount` (currently 11,348) **and** stay visible on
   the page — Google requires marked-up ratings to be user-visible. The visible rating chip
   lives in the `#about` block.
2. Government tourism portals are **not** listed in `sameAs`, because `sameAs` means
   entity identity rather than “related reading”. They appear as visible `rel="noopener"`
   outbound links in the Sources section instead.

## PWA

- `public/manifest.webmanifest` — standalone display, app shortcuts to `#plan`,
  `#transport` and `#faq`.
- `public/sw.js` — conservative service worker: same-origin `GET` only (so the Google Maps
  iframe and `gtag.js` pass straight through), network-first for navigations, stale-while-
  revalidate for static assets, and failed responses are never cached.
- Registration happens on both `MallPage.astro` and `LegalPage.astro`, HTTPS only, and the
  service worker is not registered in local builds.
- Bump the `CACHE` constant in `public/sw.js` when shipping a change that must invalidate
  cached assets.

## Photo credits

See `PHOTO-CREDITS.md` for the three local Wikimedia Commons photographs and their Creative Commons licenses.

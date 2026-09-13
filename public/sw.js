/*
 * 168 Shopping Mall Visitor Guide — service worker.
 *
 * Deliberately conservative:
 * - only same-origin GET requests are ever touched, so Google Maps embeds and
 *   Google Analytics requests pass straight through untouched;
 * - navigations are network-first so readers always get fresh hours;
 * - static assets are stale-while-revalidate;
 * - failed responses are never cached.
 */

const CACHE = 'guide-static-v1';
const CORE = ['/', '/en/', '/zh/', '/manifest.webmanifest', '/logo.svg', '/favicon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.allSettled(CORE.map((url) => cache.add(new Request(url, { cache: 'reload' })))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const isStaticAsset = (url) =>
  /\.(?:css|js|mjs|png|jpe?g|webp|avif|gif|svg|ico|woff2?|webmanifest)$/i.test(url.pathname);

const putIfUsable = (request, response) => {
  if (!response || !response.ok || response.type !== 'basic') return;
  const copy = response.clone();
  caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  let url;
  try { url = new URL(request.url); } catch { return; }
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          putIfUsable(request, response);
          return response;
        })
        .catch(() =>
          caches.match(request).then((hit) => hit || caches.match('/').then((root) => root || Response.error()))
        )
    );
    return;
  }

  if (!isStaticAsset(url)) return;

  event.respondWith(
    caches.match(request).then((hit) => {
      const network = fetch(request)
        .then((response) => {
          putIfUsable(request, response);
          return response;
        })
        .catch(() => hit || Response.error());
      return hit || network;
    })
  );
});

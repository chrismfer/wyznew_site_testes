const CACHE_NAME = 'skull-store-v4-network-first';
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'manifest.json',
  'assets/project-logo.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🧹 [PWA] Limpando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
        return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.includes('version.json') || url.pathname.includes('/api/')) {
      event.respondWith(fetch(event.request, { cache: "no-store" }));
      return;
  }

  // Estratégia Network First, fallback para Cache
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          if (event.request.url.startsWith(self.location.origin)) {
             const responseToCache = networkResponse.clone();
             caches.open(CACHE_NAME).then((cache) => {
               cache.put(event.request, responseToCache);
             });
          }
        }
        return networkResponse;
      })
      .catch(() => {
        // Se a rede falhar, tenta pegar do cache
        return caches.match(event.request);
      })
  );
});

const config = {
  bypassHosts: ['localhost', '127.0.0.1', 'googleapis.com', 'firebaseapp.com', 'firebaseio.com', 'firestore.googleapis.com', 'identitytoolkit.googleapis.com', 'securetoken.googleapis.com'],
  backendDomains: ['script.google.com', 'script.googleusercontent.com', 'sdk.mercadopago.com', 'api.mercadopago.com'],
  productImageHosts: ['lh3.googleusercontent.com', 'lh4.googleusercontent.com', 'lh5.googleusercontent.com', 'lh6.googleusercontent.com', 'drive.google.com', 'firebasestorage.googleapis.com'],
  ttls: { productImages: 365 * 24 * 60 * 60 * 1000, staticScript: 7 * 24 * 60 * 60 * 1000, staticStyle: 7 * 24 * 60 * 60 * 1000, staticFont: 7 * 24 * 60 * 60 * 1000, staticImage: 24 * 60 * 60 * 1000 }
};

const CACHE_NAME = 'skull-legion-1793853881';
const CACHE_IMAGES = 'skull-product-images';
const BACKEND_DOMAINS = config.backendDomains;
const SW_SCOPE_URL = self.registration?.scope || new URL('./', self.location.href).href;
const APP_SHELL_URL = SW_SCOPE_URL;
const CORE_ASSETS = ['', 'assets/manifest.json', 'assets/version.json', 'assets/favicon.ico', 'assets/logo-64.png', 'assets/logo-192.png']
  .map((asset) => new URL(asset, SW_SCOPE_URL).href);

const PRODUCT_IMAGE_HOSTS = new Set(config.productImageHosts);

const TTL_PRODUCT_IMAGE = config.ttls.productImages;
const REVALIDATE_THRESHOLD = 0.8;

const TTL_STATIC = {
  font:   config.ttls.staticFont,
  script: config.ttls.staticScript,
  style:  config.ttls.staticStyle,
  image:  config.ttls.staticImage,
};

let _activeImageFetches = 0;
const MAX_CONCURRENT_IMAGE_FETCHES = 2;

function _acquireImageSlot() {
  return new Promise(resolve => {
    const tryAcquire = () => {
      if (_activeImageFetches < MAX_CONCURRENT_IMAGE_FETCHES) { _activeImageFetches++; resolve(); }
      else { setTimeout(tryAcquire, 200); }
    };
    tryAcquire();
  });
}
function _releaseImageSlot() { if (_activeImageFetches > 0) _activeImageFetches--; }

let _globalPreloadPause = 0;
function _setGlobalPause(ms) { const u = Date.now() + ms; if (u > _globalPreloadPause) _globalPreloadPause = u; }
async function _waitGlobalPause() { const r = _globalPreloadPause - Date.now(); if (r > 0) await new Promise(res => setTimeout(res, r)); }

let _revalidationQueue = Promise.resolve();
let _revalidationQueueSize = 0;
const MAX_REVALIDATION_QUEUE = 30;
function _enqueueRevalidation(fn) {
  if (_revalidationQueueSize >= MAX_REVALIDATION_QUEUE) return;
  _revalidationQueueSize++;
  _revalidationQueue = _revalidationQueue.then(() => fn().catch(() => {}).finally(() => { _revalidationQueueSize--; }));
}

let _preloadActive = false;
let _preloadPendingUrls = null;

let _coverPreloadActive = false;
let _coverPreloadPendingUrls = null;

function _mergePreloadUrls(current, incoming) {
  return [...new Set([...(current || []), ...(incoming || [])].filter(Boolean))];
}

function _isProductImageUrl(url) {
  try {
    const parsed = new URL(url, SW_SCOPE_URL);
    return PRODUCT_IMAGE_HOSTS.has(parsed.hostname) ||
      parsed.pathname.includes('/api/drive-image') ||
      parsed.pathname.includes('/driveImageProxy');
  }
  catch { return false; }
}

function _offlineHtmlResponse() {
  return new Response(
    '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Skull Legion offline</title></head><body style="margin:0;background:#050505;color:#f3f4f6;font-family:system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;text-align:center;padding:24px"><main><h1 style="font-size:18px;margin:0 0 8px">Skull Legion</h1><p style="margin:0;color:#9ca3af">Sem conexão no momento. Tente novamente em alguns instantes.</p></main></body></html>',
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

async function _getAppShellFallback() {
  const cached = await caches.match(APP_SHELL_URL) || await caches.match(new URL('index.html', SW_SCOPE_URL).href);
  return cached || _offlineHtmlResponse();
}

function _isNavigationLikeRequest(request) {
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);
  const root = new URL(SW_SCOPE_URL);
  const isAppShell = url.origin === root.origin &&
    (url.pathname === root.pathname || url.href.split('?')[0] === new URL('index.html', root).href);
  return request.mode === 'navigate' || (url.origin === root.origin && (accept.includes('text/html') || isAppShell));
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((c) => c.addAll(CORE_ASSETS).catch(() => {  }))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.claim()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => {
        clients.forEach((c) => {
          try { c.postMessage({ type: 'SW_ACTIVATED', cache: CACHE_NAME }); } catch (_) {}
        });
      })
  );
});

self.addEventListener('message', event => {
  if (!event.data) return;

  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  if (event.data.type === 'PRELOAD_IMAGES') {
    const urls = Array.isArray(event.data.urls) ? event.data.urls : [];
    if (!urls.length) return;

    if (event.data.priority === 'high') {
      event.waitUntil(_preloadCoverImages(urls));
    } else {
      event.waitUntil(_preloadMissingImages(urls));
    }
    return;
  }

  if (event.data.type === 'PRUNE_IMAGES') {
    const urls = Array.isArray(event.data.urls) ? event.data.urls : [];
    if (!urls.length) return;
    event.waitUntil(
      caches.open(CACHE_IMAGES).then(async (cache) => {
        const results = await Promise.allSettled(
          urls.map(url => cache.delete(url))
        );

        const removed = results.filter(r => r.status === 'fulfilled' && r.value === true).length;
        if (removed > 0 && typeof clients !== 'undefined') {

          self.clients.matchAll().then(cls => {
            cls.forEach(c => c.postMessage({ type: 'IMAGES_PRUNED', count: removed }));
          });
        }
      }).catch(() => {})
    );
    return;
  }
});

async function _preloadMissingImages(urls) {
  if (_preloadActive) {
    _preloadPendingUrls = _mergePreloadUrls(_preloadPendingUrls, urls);
    return;
  }
  _preloadActive = true;
  try {
    let toProcess = urls;
    while (toProcess) { _preloadPendingUrls = null; await _runPreloadLoop(toProcess); toProcess = _preloadPendingUrls; }
  } finally { _preloadActive = false; _preloadPendingUrls = null; }
}

async function _preloadCoverImages(urls) {
  if (_coverPreloadActive) {
    _coverPreloadPendingUrls = _mergePreloadUrls(_coverPreloadPendingUrls, urls);
    return;
  }
  _coverPreloadActive = true;
  try {
    let toProcess = urls;
    while (toProcess) {
      _coverPreloadPendingUrls = null;
      const cache = await caches.open(CACHE_IMAGES);
      const now = Date.now();
      const toFetch = [];
      for (const url of toProcess) {
        if (!url || !_isProductImageUrl(url)) continue;
        const cached = await cache.match(url);
        if (cached) {
          const cachedAt = parseInt(cached.headers.get('x-sw-cached-at') || '0', 10);
          if ((now - cachedAt) < TTL_PRODUCT_IMAGE) continue;
        }
        toFetch.push(url);
      }
      if (toFetch.length) {

        await new Promise(r => setTimeout(r, 500));
        for (let i = 0; i < toFetch.length; i++) {
          await _waitGlobalPause();
          await _preloaderFetchAndCache(cache, toFetch[i]);
          if (i < toFetch.length - 1) {

            await new Promise(r => setTimeout(r, 800 + Math.floor(Math.random() * 200)));
          }
        }
      }
      toProcess = _coverPreloadPendingUrls;
    }
  } finally {
    _coverPreloadActive = false;
    _coverPreloadPendingUrls = null;
  }
}

async function _runPreloadLoop(urls) {

  await new Promise(r => setTimeout(r, 5000));
  const cache = await caches.open(CACHE_IMAGES);
  const now = Date.now();
  const toFetch = [];
  for (const url of urls) {
    if (!url || !_isProductImageUrl(url)) continue;
    const cached = await cache.match(url);
    if (cached) {
      const cachedAt = parseInt(cached.headers.get('x-sw-cached-at') || '0', 10);
      if ((now - cachedAt) < TTL_PRODUCT_IMAGE) continue;
    }
    toFetch.push(url);
  }
  if (!toFetch.length) return;
  for (let i = 0; i < toFetch.length; i++) {
    if (_preloadPendingUrls) {
      _preloadPendingUrls = _mergePreloadUrls(toFetch.slice(i), _preloadPendingUrls);
      return;
    }
    await _waitGlobalPause();
    await _preloaderFetchAndCache(cache, toFetch[i]);
    if (i < toFetch.length - 1) {
      await new Promise(r => setTimeout(r, 1800 + Math.floor(Math.random() * 500)));
    }
  }
}

async function _preloaderFetchAndCache(cache, cacheKey) {
  let delay = 3000;
  await _acquireImageSlot();
  try {
    for (let attempt = 0; attempt <= 3; attempt++) {
      try {
        const res = await fetch(cacheKey, { mode: 'cors', credentials: 'omit' });
        if (res.status === 429 && attempt < 3) {
          const retryAfter = parseInt(res.headers.get('retry-after') || '0', 10);
          const waitMs = retryAfter > 0 ? retryAfter * 1000 : delay;
          _setGlobalPause(waitMs);
          await new Promise(r => setTimeout(r, waitMs));
          delay *= 2; continue;
        }
        if (res && res.ok) return await _storeImage(cache, cacheKey, res);
        return null;
      } catch (err) {
        if (attempt === 3) return null;
        await new Promise(r => setTimeout(r, delay)); delay *= 2;
      }
    }
  } finally { _releaseImageSlot(); }
  return null;
}

function _buildConditionalHeaders(cached) {
  const h = {};
  const etag = cached.headers.get('etag');
  const lm = cached.headers.get('last-modified');
  if (etag) h['If-None-Match'] = etag;
  if (lm) h['If-Modified-Since'] = lm;
  return h;
}

async function _storeImage(cache, key, response) {
  try {
    const body = await response.arrayBuffer();
    const headers = new Headers(response.headers);
    headers.set('x-sw-cached-at', Date.now().toString());
    const enriched = new Response(body, { status: response.status, statusText: response.statusText, headers });
    await cache.put(key, enriched.clone());
    return enriched;
  } catch (_) { return response; }
}

async function _renewImageTimestamp(cache, key, cached) {
  try {
    const body = await cached.clone().arrayBuffer();
    const headers = new Headers(cached.headers);
    headers.set('x-sw-cached-at', Date.now().toString());
    await cache.put(key, new Response(body, { status: cached.status, statusText: cached.statusText, headers }));
  } catch (_) {}
}

function _revalidateImageBackground(cache, key, cached) {
  _enqueueRevalidation(async () => {
    await _waitGlobalPause();
    const headers = _buildConditionalHeaders(cached);
    try {
      const res = await fetch(new Request(key, { headers, mode: 'cors', credentials: 'omit' }));
      if (res.status === 429) { _setGlobalPause(10000); return; }
      if (res.status === 304) { await _renewImageTimestamp(cache, key, cached); }
      else if (res.ok) { await _storeImage(cache, key, res); }
    } catch (_) {}
  });
}

function _getFallbackImageResponse() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect width="100%" height="100%" fill="#1a1a1a"/>
    <text x="50%" y="50%" font-family="sans-serif" font-size="24" fill="#555" text-anchor="middle" dominant-baseline="middle">Imagem Indisponível</text>
  </svg>`;
  return new Response(svg, { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
}

async function _productImageCacheFirst(request) {
  const cache = await caches.open(CACHE_IMAGES);
  const cacheKey = request.url;
  const cached = await cache.match(cacheKey);
  if (cached) {
    const cachedAt = parseInt(cached.headers.get('x-sw-cached-at') || '0', 10);
    const age = Date.now() - cachedAt;
    if (age < TTL_PRODUCT_IMAGE) {
      if (age > TTL_PRODUCT_IMAGE * REVALIDATE_THRESHOLD) _revalidateImageBackground(cache, cacheKey, cached);
      return cached;
    }
    _revalidateImageBackground(cache, cacheKey, cached);
    return cached;
  }
  try {
    const res = await fetch(new Request(cacheKey, { mode: 'cors', credentials: 'omit' }));
    if (res && res.status === 429) {
      _setGlobalPause(15000);
      return _getFallbackImageResponse();
    }
    if (res && res.ok) {
      const contentType = res.headers.get('content-type') || '';

      if (contentType.includes('text/html')) {
        return _getFallbackImageResponse();
      }
      _storeImage(cache, cacheKey, res.clone()).catch(() => {});
      return res;
    }

    return _getFallbackImageResponse();
  } catch (_) {
    const stale = await cache.match(cacheKey);
    if (stale) return stale;
    return _getFallbackImageResponse();
  }
}

async function _staleWhileRevalidateStatic(request, type, cacheName = CACHE_NAME) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const revalidate = async () => {
    try {
      const response = await fetch(request);
      if (response && response.status === 200) {
        const body = await response.clone().arrayBuffer();
        const headers = new Headers(response.headers);
        headers.set('x-sw-cached-at', Date.now().toString());
        headers.set('x-sw-strategy', 'stale-while-revalidate');
        await cache.put(request, new Response(body, {
          status: response.status,
          statusText: response.statusText,
          headers
        }));
      }
      return response;
    } catch (_) {
      return null;
    }
  };

  if (cached) {
    revalidate().catch(() => {});
    return cached;
  }

  const res = await revalidate();
  if (res) return res;
  return new Response('', { status: 504, statusText: 'Offline' });
}

async function _staticCacheFirstTTL(request, type) {
  return _staleWhileRevalidateStatic(request, type, CACHE_NAME);
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (self.SkullDownloadStream?.matches(request, SW_SCOPE_URL)) {
    event.respondWith(
      self.SkullDownloadStream
        .stream(request, SW_SCOPE_URL, fetch, Response)
        .catch((error) => self.SkullDownloadStream.errorResponse(error, Response, request))
    );
    return;
  }

  if (config.bypassHosts.some(host => url.hostname === host || url.hostname.includes(host))) return;

  if (_isProductImageUrl(request.url)) {
    if (url.hostname === 'drive.google.com') return;
    event.respondWith(_productImageCacheFirst(request));
    return;
  }

  if (BACKEND_DOMAINS.some((d) => url.hostname.includes(d))) {
    event.respondWith(
      fetch(request).catch(() =>
        new Response(JSON.stringify({ sucesso: false, mensagem: 'Offline.' }), {
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  if (url.pathname.includes('version.json')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' }).catch(async () => {
        const cached = await caches.match(new URL('assets/version.json', SW_SCOPE_URL).href);
        return cached || new Response(JSON.stringify({ offline: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  if (_isNavigationLikeRequest(request)) {
    const ehPaginaDeCompartilhamento =
      url.origin === self.location.origin &&
      (url.pathname.includes('/produto/') || url.pathname.includes('/s/') || url.pathname.endsWith('/404.html'));

    if (ehPaginaDeCompartilhamento) {
      event.respondWith(fetch(request, { cache: 'no-store' }).catch(() => _getAppShellFallback()));
      return;
    }

    event.respondWith(
      fetch(request, { cache: 'no-store' }).then((res) => {
        if (res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(APP_SHELL_URL, clone)).catch(() => {});
        }
        return res;
      }).catch(() => _getAppShellFallback())
    );
    return;
  }

  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  const isStatic = request.destination === 'script' || request.destination === 'style' ||
    request.destination === 'font' || request.destination === 'image' ||
    /\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|webp|ico)(\?.*)?$/.test(url.pathname);

  if (isFont) {
    event.respondWith(_staticCacheFirstTTL(request, 'font'));
    return;
  }

  const isScriptOrStyle =
    request.destination === 'script' ||
    request.destination === 'style' ||
    /\.(js|css)(\?.*)?$/i.test(url.pathname);
  if (isScriptOrStyle) {
    event.respondWith(
      fetch(request, { cache: 'no-store' }).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, clone)).catch(() => {});
        }
        return res;
      }).catch(async () => {
        const cached = await caches.match(request);
        return cached || new Response('', { status: 504, statusText: 'Offline' });
      })
    );
    return;
  }

  if (isStatic) {
    const type = request.destination === 'image' || /\.(png|jpg|jpeg|webp|gif|svg|ico)/.test(url.pathname)
      ? 'image'
      : 'script';
    event.respondWith(_staticCacheFirstTTL(request, type));
    return;
  }

  event.respondWith(
    fetch(request).then((res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, clone)).catch(() => {});
      }
      return res;
    }).catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (_isNavigationLikeRequest(request)) return _getAppShellFallback();
      return new Response('', { status: 504, statusText: 'Offline' });
    })
  );
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'phantom-update-check') {
    event.waitUntil(self.registration.update());
  }
});


const CACHE_NAME = "game-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/main.js",
  "/questions.js",
  "/manifest.json",
  "/manifest.webmanifest"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

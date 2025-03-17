self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => caches.delete(cache))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

// Ensure media requests are handled properly
self.addEventListener("fetch", (event) => {
    if (event.request.destination === "audio") {
        return; // Allow audio to continue playing
    }
    event.respondWith(fetch(event.request));
});

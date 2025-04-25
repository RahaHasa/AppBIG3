// public/sw.js
self.addEventListener('install', (event) => {
    console.log('[SW] Установка...');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('[SW] Активирован!');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.open('anime-cache').then((cache) => {
        return cache.match(event.request).then((response) => {
          return (
            response ||
            fetch(event.request).then((response) => {
              cache.put(event.request, response.clone());
              return response;
            })
          );
        });
      })
    );
  });
  
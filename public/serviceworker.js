const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html']
const self = this
//we are going to
// 1. Install Service Worker

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')

        return cache.addAll(urlsToCache)
      })
  )
})

// 2. Listen for Request

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
})

// 3. Activate The Service Worker 

self.addEventListener('activate', (event) => {
  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    ))
  )
})
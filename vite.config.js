import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "My Application",
        short_name: "MyApp",
        description: "My React Progressive Web App",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },

      workbox: {
        runtimeCaching: [
          {
            // Cache API requests
            urlPattern: /^https:\/\/fakestoreapi\.com\/.*/,

            // Return cached data immediately,
            // then update cache in background
            handler: "StaleWhileRevalidate",

            options: {
              cacheName: "api-cache",

              expiration: {
                // Maximum cached responses
                maxEntries: 50,

                // Keep cache for 24 hours
                maxAgeSeconds: 60 * 60 * 24
              },

              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})
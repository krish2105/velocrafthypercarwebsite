import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        maximumFileSizeToCacheInBytes: 4194304
      },
      manifest: {
        name: 'VELOCRAFT Supercars',
        short_name: 'Velocraft',
        description: 'A new generation of electric hypercars sculpted for impossible performance.',
        theme_color: '#050505',
        background_color: '#050505',
        icons: [
          {
            src: '/assets/car-renders/velocraft-car-silhouette.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
})

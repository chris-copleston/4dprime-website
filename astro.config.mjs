import { defineConfig, sharpImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://4dprime.com',
  image: {
    service: sharpImageService(),
    domains: ['source.unsplash.com', 'images.unsplash.com'],
  },
  integrations: [tailwind(), mdx(), sitemap()],
  build: {
    assets: 'assets' // This enables asset hashing
  },
  headers: {
    // Immutable assets (Astro automatically adds content hash to filenames)
    '/_astro/*': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ],
    // Potentially mutable assets with shorter cache duration
    '/logo.svg': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=86400, must-revalidate'
      }
    ],
    '/pen-brush.svg': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=86400, must-revalidate'
      }
    ],
    '/search.svg': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=86400, must-revalidate'
      }
    ],
    // Default cache policy for other static assets
    '/*.{js,css,jpg,jpeg,png,gif,ico,woff,woff2}': [
      {
        key: 'Cache-Control',
        value: 'public, max-age=604800, must-revalidate'
      }
    ]
  }
})

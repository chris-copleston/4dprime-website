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
    // Add default image optimization settings
    defaults: {
      quality: 80,
      format: 'webp',
    }
  },
  integrations: [
    tailwind({
      // Minify CSS in production
      config: { applyBaseStyles: false }
    }), 
    mdx(), 
    sitemap()
  ],
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto', // Automatically inline small stylesheets
    // Use compression
    compress: true,
    // Split larger components
    splitting: true
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code into separate chunks
            'vendor': ['tailwindcss']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
})

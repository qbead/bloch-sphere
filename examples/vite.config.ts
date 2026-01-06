import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo: resolve(__dirname, 'demo/index.html'),
        // Future examples add here:
        // 'basic-visualization': resolve(__dirname, 'basic-visualization/index.html'),
      },
    },
  },
})

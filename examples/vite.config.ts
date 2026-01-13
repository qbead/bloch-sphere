import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@qbead/bloch-sphere': resolve(__dirname, '../src/index.ts'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo: resolve(__dirname, 'demo/index.html'),
        'basic-visualization': resolve(__dirname, 'basic-visualization/index.html'),
        'quantum-gates': resolve(__dirname, 'quantum-gates/index.html'),
        'rotation-gates': resolve(__dirname, 'rotation-gates/index.html'),
        'state-paths': resolve(__dirname, 'state-paths/index.html'),
        'points-and-regions': resolve(__dirname, 'points-and-regions/index.html'),
        'operator-visualization': resolve(__dirname, 'operator-visualization/index.html'),
      },
    },
  },
})

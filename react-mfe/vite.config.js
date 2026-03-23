import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
    'process': '{ env: { NODE_ENV: "production" } }',
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.jsx',
      name: 'ReactMFE',
      fileName: 'react-mfe',
      formats: ['iife'],
    },
    rollupOptions: {
      external: [],
    },
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: 'localhost',
  }
})
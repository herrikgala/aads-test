import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/aads-test/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/abstracts/global.scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'docs',
  },
  server: {
    port: 3001,
    host: true,
  },
})

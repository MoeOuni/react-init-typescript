import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  envPrefix: 'INIT_REACT_',
  envDir: './env',
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [react(), AutoImport({
    imports: ['react', 'react-router-dom', 'ahooks'],
    dts: './src/auto-imports.d.ts',
    eslintrc: {
      enabled: false,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    }
  })],
})

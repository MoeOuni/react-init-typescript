import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src'),
      "@pages": resolve(__dirname, "src/pages"),
      "@utils": resolve(__dirname, "src/utils"),
      "@styles": resolve(__dirname, "src/styles"),
      "@assets": resolve(__dirname, "src/assets"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@services": resolve(__dirname, "src/services"),
      "@forms": resolve(__dirname, "src/components/forms"),
      "@views": resolve(__dirname, "src/components/views"),
      "@components": resolve(__dirname, "src/components/elements"),
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

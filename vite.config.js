// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portafolio_Arquitecta_Kelly/', // 👈 nombre del repo exacto
  plugins: [react()],
})

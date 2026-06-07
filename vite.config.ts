import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from a GitHub Pages project site at /occupide-site/ in production;
// root path in dev.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/occupide-site/' : '/',
  plugins: [react()],
}))

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// Served from a GitHub Pages project site at /occupide-site/ in production;
// root path in dev. The production build is inlined into a single self-contained
// index.html (no external JS/CSS) so it can be encrypted as one file by
// StaticCrypt for password protection.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/occupide-site/' : '/',
  plugins: [react(), viteSingleFile()],
}))

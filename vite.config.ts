import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` is applied only at build time so GitHub Pages serves correctly
// from https://<user>.github.io/portfolio/. The dev server keeps base="/".
// Override at build time with `VITE_BASE=/` if you ever deploy to a root domain.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? (process.env.VITE_BASE ?? '/portfolio/') : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
}));

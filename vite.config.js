import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: './',
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  envPrefix: ['VITE_', 'TAURI_']
});

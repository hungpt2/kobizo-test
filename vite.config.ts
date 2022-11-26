import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  build: {
    outDir: './build'
  },
  base: '/kobizo-test/',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  plugins: [react()]
});

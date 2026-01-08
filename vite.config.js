// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // 👇 هذا السطر هو المهم
  base: '/tohami/',          // اسم المستودع على GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      // اختياري: لتوحيد نسخة React
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
});
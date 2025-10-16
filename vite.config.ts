import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: [],
    },
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    cors: false,
  },
})

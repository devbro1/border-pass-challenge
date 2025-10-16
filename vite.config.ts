import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase'],
          charts: ['recharts'],
          ui: ['react-icons', 'sweetalert2', 'react-toastify']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});

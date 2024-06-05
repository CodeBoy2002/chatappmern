import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    //THIS IS USE FOR FIX THE ERROR IN CONSOLE
    // CORS BLOCKING CONTENT WHEN MAKING API CALL
    proxy: {
      "/api": {
        target: `http://localhost:5000`
      }
    }
  }
})

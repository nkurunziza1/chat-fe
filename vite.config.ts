import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:4000,
    proxy:{
      '/api':{
        target: 'http://localhost:7070', // Update this to your backend server URL
        changeOrigin: true,
        secure: false,
      }
       
    }
  }
})

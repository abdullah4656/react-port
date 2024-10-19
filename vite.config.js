import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  // base:"/react-port/",
  plugins: [react()], 
  base:"/react-port/",
})

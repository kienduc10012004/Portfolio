import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Keep asset URLs relative so the production build works when this
  // portfolio is hosted in a subfolder (for example on GitHub Pages).
  base: './',
  plugins: [react()],
})

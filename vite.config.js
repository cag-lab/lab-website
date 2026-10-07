import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/lab-website/'

// Use explicit base on GitHub Pages so asset URLs resolve even without trailing slash.
// Keep root base for local dev/build previews.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? repoBase : '/',
})

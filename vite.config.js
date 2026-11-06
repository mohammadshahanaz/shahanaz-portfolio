import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths work on GitHub Pages project sites and custom domains.
export default defineConfig({
  plugins: [react()],
  base: './'
});

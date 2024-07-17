import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths({
      root: './',
    }),
    createHtmlPlugin({ minify: false }),
  ],
  server: {
    open: true,
    port: 5555,
  },
});

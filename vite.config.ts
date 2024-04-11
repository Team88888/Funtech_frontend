import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/assets/styles/vars.scss';
          @import './src/assets/styles/mixins.scss';
        `,
      },
    },
  },
  plugins: [react(), svgr()],
});

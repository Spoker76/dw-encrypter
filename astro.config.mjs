// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'http://localhost:4321/',
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `
            @import "@fortawesome/fontawesome-free/css/all.min.css";
          `,
        },
      },
    },
  },
});
import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'path';
import { baseConfig } from './vite.config.base.js';
import handlebars from 'vite-plugin-handlebars';
import { handlebarsHelpers } from './handlebars-helpers.js';

/**
 * Site-B specific Vite configuration
 */
export default defineConfig(
  mergeConfig(baseConfig, {
    root: resolve(__dirname, 'site-b'),
    
    build: {
      outDir: resolve(__dirname, 'dist/site-b'),
      emptyOutDir: true,
    },

    server: {
      port: 3002,
    },

    plugins: [
      handlebars({
        partialDirectory: [
          resolve(__dirname, 'shared/partials'),
          resolve(__dirname, 'site-b/partials'),
        ],
        context: {
          siteName: 'Site B',
          siteDescription: 'This is Site B with shared resources',
        },
        helpers: handlebarsHelpers,
      }),
    ],
  })
);

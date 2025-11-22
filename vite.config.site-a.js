import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'path';
import { baseConfig } from './vite.config.base.js';
import handlebars from 'vite-plugin-handlebars';
import { handlebarsHelpers } from './handlebars-helpers.js';

/**
 * Site-A specific Vite configuration
 */
export default defineConfig(
  mergeConfig(baseConfig, {
    root: resolve(__dirname, 'site-a'),
    
    build: {
      outDir: resolve(__dirname, 'dist/site-a'),
      emptyOutDir: true,
    },

    server: {
      port: 3001,
    },

    plugins: [
      handlebars({
        partialDirectory: [
          resolve(__dirname, 'shared/partials'),
          resolve(__dirname, 'site-a/partials'),
        ],
        context: {
          siteName: 'Site A',
          siteDescription: 'This is Site A with shared resources',
        },
        helpers: handlebarsHelpers,
      }),
    ],
  })
);

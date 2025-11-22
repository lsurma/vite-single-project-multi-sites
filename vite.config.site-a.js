import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'path';
import { baseConfig } from './vite.config.base.js';
import handlebars from 'vite-plugin-handlebars';

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
        helpers: {
          // Comparison helpers
          eq: (a, b) => a === b,
          ne: (a, b) => a !== b,
          lt: (a, b) => a < b,
          gt: (a, b) => a > b,
          lte: (a, b) => a <= b,
          gte: (a, b) => a >= b,
          and: (a, b) => a && b,
          or: (a, b) => a || b,
          not: (a) => !a,
        },
      }),
    ],
  })
);

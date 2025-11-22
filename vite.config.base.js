import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * Base Vite configuration with shared settings
 * This configuration is extended by site-specific configs
 */
export const baseConfig = {
  // Shared server configuration
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },

  // Shared build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },

  // Shared resolve configuration
  resolve: {
    alias: {
      '@shared': resolve(__dirname, './shared'),
      '@shared-styles': resolve(__dirname, './shared/styles'),
      '@shared-scripts': resolve(__dirname, './shared/scripts'),
      '@shared-partials': resolve(__dirname, './shared/partials'),
    },
  },

  // CSS configuration
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@shared-styles/variables.scss";`,
      },
    },
  },
};

export default defineConfig(baseConfig);

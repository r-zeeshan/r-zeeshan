import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  // Static site generation (vite-react-ssg): one real HTML file per route.
  ssgOptions: {
    entry: "src/main.tsx",
    dirStyle: "nested", // /work/jema -> /work/jema/index.html
    formatting: "minify",
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Performance optimizations
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching (client build only; during the
        // SSR/SSG build react et al. are external and cannot be manually chunked).
        manualChunks: isSsrBuild
          ? undefined
          : {
              'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            },
      }
    },
    // Enable source maps for debugging
    sourcemap: mode === 'development',
    // Minify for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Optimize deps
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env']
  },
  // Enable experimental features for better performance
  esbuild: {
    // Drop console logs in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Use latest JS features
    target: 'es2020'
  }
}));

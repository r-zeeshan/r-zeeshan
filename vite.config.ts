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
          // React and core libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation libraries
          'vendor-animation': ['framer-motion', 'react-intersection-observer', 'react-countup', '@use-gesture/react'],
          // UI libraries  
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip'
          ],
          // Icons and utilities
          'vendor-utils': [
            'lucide-react',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'date-fns',
            'zod'
          ],
          // Other libraries
          'vendor-misc': [
            '@tanstack/react-query',
            'cmdk',
            'embla-carousel-react',
            'input-otp',
            'next-themes',
            'react-day-picker',
            'react-hook-form',
            'react-resizable-panels',
            'recharts',
            'sonner',
            'vaul',
            '@hookform/resolvers'
          ]
        }
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
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'react-intersection-observer',
      'react-countup',
      '@use-gesture/react',
      'lucide-react'
    ],
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

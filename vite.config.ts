import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts', '**/*.stories.tsx']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@lib': resolve(__dirname, './lib'),
      '@types': resolve(__dirname, './types'),
      '@utils': resolve(__dirname, './utils'),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "zisanss-ui",
      fileName: (format) => `zisanss-ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'] // Specify output formats
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    },
    // Generate .d.ts files
    copyPublicDir: false,
    sourcemap: true,
    minify: 'esbuild'
  }
});
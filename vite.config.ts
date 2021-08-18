import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import styleImport from 'vite-plugin-style-import'
import * as path from "path";

export default defineConfig({
  base: './',
  server: {
    port: 6002,
    cors: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~@": path.resolve(__dirname, "./src"),
      main: path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          ssr: false
        }
      }
    }),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ]
})

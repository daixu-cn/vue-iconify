import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import progress from "vite-plugin-progress"
import dts from "vite-plugin-dts"
import { name } from "./package.json"

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      progress(),
      dts({
        copyDtsFiles: true,
        exclude: ["./src/Example", "./vite.config.ts"]
      })
    ],
    server: {
      open: true,
      host: "0.0.0.0",
      port: 8080
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: "./src/index.ts",
        name,
        fileName: format => `index.${format}.js`
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          exports: "named",
          globals: {
            vue: "Vue"
          }
        }
      }
    }
  }
})

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 生产环境下的公共路径
  build: {
    base: './', // 生产环境下的公共路径
    outDir: './dist',
    minify: 'terser'// 混淆器，terser构建后文件体积更小
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});

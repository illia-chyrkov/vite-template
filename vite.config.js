import { resolve } from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import nunjucks from "vite-plugin-nunjucks";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "docs");
const publicDir = resolve(__dirname, "public");

export default defineConfig({
  root,
  publicDir,
  base: "",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
      input: {
        index: resolve(root, "index.html"),
        main: resolve(root, "home.html"),
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: root }],
  },
  plugins: [eslintPlugin(), nunjucks()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), eslint()],
    base: command === "serve" ? "/" : "/venus-website/",
  };
});

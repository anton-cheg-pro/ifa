import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://anton-cheg-pro.github.io/ifa/
const base = process.env.GITHUB_PAGES === "true" ? "/ifa/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
});

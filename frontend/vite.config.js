import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "spa-fallback",
      closeBundle() {
        // Copy index.html to 404.html for SPA routing fallback
        const fs = require("fs");
        const path = require("path");
        const distPath = path.resolve(__dirname, "dist");
        const indexPath = path.join(distPath, "index.html");
        const notFoundPath = path.join(distPath, "404.html");
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log("✓ Created 404.html for SPA fallback");
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      reporter: ["text", "html", "json"],
      exclude: ["node_modules/", "src/setupTests.js"],
    },
  },
});

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfig from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [react(), vanillaExtractPlugin(), tsconfig()],
}));

import react from "@vitejs/plugin-react-swc";
import { configDefaults, defineConfig } from "vitest/config";
import typecript from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		react(),
		typecript(),
	],
	test: {
		globals: true,
		root: "src",
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		exclude: [...configDefaults.exclude, "tests/**/*"],
	},
});

import react from "@vitejs/plugin-react-swc";
import { configDefaults, defineConfig } from "vitest/config";
import typecript from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		react(),
		typecript(),
	],
	test: {
		environment: "jsdom",
		exclude: [...configDefaults.exclude, "tests/**/*"],
		globals: true,
		root: "src",
		setupFiles: ["./vitest.setup.ts"],
	},
});

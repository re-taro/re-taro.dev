import { cloudflareDevProxyVitePlugin as cloudflare, vitePlugin as remix } from "@remix-run/dev";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import typecript from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";

import { getLoadContext } from "./app/load-context";

// eslint-disable-next-line node/prefer-global/process
const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig(({ mode }) => ({
	build: {
		cssMinify: mode === "production",
	},
	plugins: [
		cloudflare({ getLoadContext }),
		remixDevTools(),
		!isStorybook
		&& remix({
			serverModuleFormat: "esm",
		}),
		typecript(),
		mode === "analyze"
		&& visualizer({
			open: true,
			template: "flamegraph", // use `network` to see why something was included
			gzipSize: true,
			brotliSize: true,
			emitFile: true, // `emitFile` is necessary since Remix builds more than one bundle
		}),
	],
}));

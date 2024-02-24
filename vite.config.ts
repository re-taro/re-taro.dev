import { cloudflareDevProxyVitePlugin as cloudflare, vitePlugin as remix } from "@remix-run/dev";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import typecript from "vite-tsconfig-paths";

import { getLoadContext } from "./app/load-context";

export default defineConfig(({ mode }) => ({
	build: {
		cssMinify: mode === "production",
	},
	plugins: [
		cloudflare({ getLoadContext }),
		remix({
			ignoredRouteFiles: ["**/.*"],
			serverModuleFormat: "esm",
		}),
		typecript(),
		vanillaExtractPlugin(),
		mode === "analyze" &&
			visualizer({
				open: true,
				template: "flamegraph", // use `network` to see why something was included
				gzipSize: true,
				brotliSize: true,
				emitFile: true, // `emitFile` is necessary since Remix builds more than one bundle
			}),
	],
}));

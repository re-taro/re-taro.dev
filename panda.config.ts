import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	include: ["./app/**/*.tsx"],
	exclude: [],
	outdir: "styled-system",
	outExtension: "js",
	minify: true,
	hash: true,
	clean: true,
	lightningcss: true,
	browserslist: ["defaults and > 0.3%"],
	strictTokens: true,
	strictPropertyValues: true,
	jsxStyleProps: "none",
	preflight: true,
	presets: [],
	eject: true,
	utilities: {
		color: {
			values: "colors",
		},
		backgroundColor: {
			values: "colors",
		},
		borderColor: {
			values: "colors",
		},
		outlineColor: {
			values: "colors",
		},
		fill: {
			values: "colors",
		},
		stroke: {
			values: "colors",
		},
	},
	theme: {
		tokens: {
			colors: {
				bg: {
					main: {
						value: "#0b1215",
					},
					secondary: {
						value: "#232a2c",
					},
					teriary: {
						value: "#3c4144",
					},
				},
				text: {
					main: {
						value: "#ced0d0",
					},
					secondary: {
						value: "#b4b5b5",
					},
				},
				border: {
					main: {
						value: "#909191",
					},
				},
			},
		},
	},
	globalCss: {
		body: {
			fontFamily: "Inter, \"Noto Sans JP\", \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
		},
	},
});

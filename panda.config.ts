import { defineConfig } from "@pandacss/dev";
import { removeUnusedKeyframes } from "./removeUnusedKeyframse";
import { removeUnusedCssVars } from "./removeUnusedvars";

export default defineConfig({
	browserslist: ["defaults and > 0.3%"],
	clean: true,
	globalCss: {
		body: {
			backgroundColor: "bg.main",
			fontFamily: "Inter, \"Noto Sans JP\", \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif",
			MozOsxFontSmoothing: "grayscale",
			WebkitFontSmoothing: "antialiased",
		},
	},
	hash: true,
	hooks: {
		"cssgen:done": ({ artifact, content }) => {
			if (artifact === "styles.css")
				return removeUnusedCssVars(removeUnusedKeyframes(content));
		},
	},
	include: ["./app/**/*.tsx"],
	jsxStyleProps: "none",
	lightningcss: true,
	minify: true,
	outdir: "styled-system",
	outExtension: "js",
	preflight: true,
	strictPropertyValues: true,
	strictTokens: true,
	theme: {
		breakpoints: {
			md: "768px",
		},
		tokens: {
			colors: {
				accent: {
					main: {
						value: "#c084fc",
					},
					secondary: {
						value: "#e9d5ff",
					},
				},
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
				border: {
					main: {
						value: "#909191",
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
			},
			fontSizes: {
				"2xl": {
					value: "calc(1rem * 8 / 5)",
				},
				"2xs": {
					value: "calc(1rem * 8 / 11)",
				},
				"3xl": {
					value: "calc(1rem * 8 / 4)",
				},
				"4xl": {
					value: "calc(1rem * 8 / 3)",
				},
				"l": {
					value: "calc(1rem * 8 / 7)",
				},
				"m": {
					value: "calc(1rem * 8 / 8)",
				},
				"s": {
					value: "calc(1rem * 8 / 9)",
				},
				"xl": {
					value: "calc(1rem * 8 / 6)",
				},
				"xs": {
					value: "calc(1rem * 8 / 10)",
				},
			},
			fontWeights: {
				bold: {
					value: 600,
				},
				normal: {
					value: 400,
				},
			},
			lineHeights: {
				none: {
					value: 1,
				},
				normal: {
					value: 1.5,
				},
				tight: {
					value: 1.25,
				},
			},
		},
	},
});

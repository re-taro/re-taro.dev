import { defineConfig } from "@pandacss/dev";

import { removeUnusedKeyframes } from "./removeUnusedKeyframse";
import { removeUnusedCssVars } from "./removeUnusedvars";

export default defineConfig({
	browserslist: ["defaults and > 0.3%"],
	clean: true,
	conditions: {
		active: "&:is(:active, [data-active])",
		after: "&::after",
		before: "&::before",
		checked: "&:is(:checked, [data-checked], [aria-checked=true], [data-state=\"checked\"])",
		disabled: "&:is(:disabled, [disabled], [data-disabled])",
		enabled: "&:enabled",
		focusVisible: "&:is(:focus-visible, [data-focus-visible])",
		hover: "&:is(:hover, [data-hover])",
		invalid: "&:is(:invalid, [data-invalid])",
		pressed: "&:is([aria-pressed=true], [data-pressed])",
		readOnly: "&:is(:read-only, [data-read-only])",
		required: "&:is(:required, [data-required], [aria-required=true])",
		selected: "&:is([aria-selected=true], [data-selected])",
		valid: "&:is(:valid, [data-valid])",
	},
	eject: true,
	exclude: [],
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
	presets: [],
	strictPropertyValues: true,
	strictTokens: true,
	theme: {
		breakpoints: {
			md: "768px",
		},
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
	utilities: {
		backgroundColor: {
			values: "colors",
		},
		borderColor: {
			values: "colors",
		},
		color: {
			values: "colors",
		},
		fill: {
			values: "colors",
		},
		fontSize: {
			values: "fontSizes",
		},
		fontWeight: {
			values: "fontWeights",
		},
		lineHeight: {
			values: "lineHeights",
		},
		outlineColor: {
			values: "colors",
		},
		stroke: {
			values: "colors",
		},
	},
});

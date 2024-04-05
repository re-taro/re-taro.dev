import { defineConfig } from "@pandacss/dev";

import { removeUnusedKeyframes } from "./removeUnusedKeyframse";
import { removeUnusedCssVars } from "./removeUnusedvars";

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
		lineHeight: {
			values: "lineHeights",
		},
		fontWeight: {
			values: "fontWeights",
		},
		fontSize: {
			values: "fontSizes",
		},
	},
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
			lineHeights: {
				normal: {
					value: 1.5,
				},
				tight: {
					value: 1.25,
				},
				none: {
					value: 1,
				},
			},
			fontWeights: {
				normal: {
					value: 400,
				},
				bold: {
					value: 600,
				},
			},
			fontSizes: {
				"4xl": {
					value: "3rem",
				},
				"3xl": {
					value: "2.5rem",
				},
				"2xl": {
					value: "2rem",
				},
				"xl": {
					value: "1.5rem",
				},
				"l": {
					value: "1.125rem",
				},
				"m": {
					value: "1rem",
				},
				"s": {
					value: "0.875rem",
				},
				"xs": {
					value: "0.75rem",
				},
				"2xs": {
					value: "0.625rem",
				},
			},
		},
	},
	conditions: {
		hover: "&:is(:hover, [data-hover])",
		focusVisible: "&:is(:focus-visible, [data-focus-visible])",
		disabled: "&:is(:disabled, [disabled], [data-disabled])",
		active: "&:is(:active, [data-active])",
		readOnly: "&:is(:read-only, [data-read-only])",
		checked: "&:is(:checked, [data-checked], [aria-checked=true], [data-state=\"checked\"])",
		enabled: "&:enabled",
		before: "&::before",
		after: "&::after",
		required: "&:is(:required, [data-required], [aria-required=true])",
		valid: "&:is(:valid, [data-valid])",
		invalid: "&:is(:invalid, [data-invalid])",
		pressed: "&:is([aria-pressed=true], [data-pressed])",
		selected: "&:is([aria-selected=true], [data-selected])",
	},
	globalCss: {
		body: {
			backgroundColor: "bg.main",

			fontFamily: "Inter, \"Noto Sans JP\", \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", Meiryo, sans-serif",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
		},
	},
	hooks: {
		"cssgen:done": ({ artifact, content }) => {
			if (artifact === "styles.css")
				return removeUnusedCssVars(removeUnusedKeyframes(content));
		},
	},
});

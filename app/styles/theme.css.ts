import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
	color: {
		bg: {
			main: null,
			secondary: null,
			teriary: null,
		},
		text: {
			main: null,
			secondary: null,
		},
		border: {
			main: null,
		},
	},
});

createGlobalTheme(":root", vars, {
	color: {
		bg: {
			main: "#0b1215",
			secondary: "#232a2c",
			teriary: "#3c4144",
		},
		text: {
			main: "#ced0d0",
			secondary: "#b4b5b5",
		},
		border: {
			main: "#909191",
		},
	},
});

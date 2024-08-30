import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-actions",
		"@storybook/addon-backgrounds",
	],
	docs: {
		autodocs: "tag",
	},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	staticDirs: ["../public"],
	stories: ["../app/**/*.stories.@(ts|tsx)"],
};
export default config;

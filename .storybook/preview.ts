import "~/index.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "main",
			values: [
				{
					name: "main",
					value: "#0b1215",
				},
				{
					name: "secondary",
					value: "#232a2c",
				},
				{
					name: "teriary",
					value: "#3c4144",
				},
			],
		},
	},
};

export default preview;

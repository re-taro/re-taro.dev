import type { Preview } from '@storybook/react';
import '~/index.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: {
			default: 'main',
			values: [
				{
					name: 'main',
					value: '#0b1215',
				},
				{
					name: 'secondary',
					value: '#232a2c',
				},
				{
					name: 'teriary',
					value: '#3c4144',
				},
			],
		},
		controls: {
			matchers: {
				color: /(?:background|color)$/iu,
				date: /Date$/iu,
			},
		},
	},
};

export default preview;

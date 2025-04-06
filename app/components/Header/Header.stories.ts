import type { Meta, StoryObj } from '@storybook/react';

import { createRemixStub } from '@remix-run/testing';
import { Header } from './Header';

type T = typeof Header;

const meta: Meta = {
	component: Header,
	decorators: [
		(story) => {
			const remixStub = createRemixStub([
				{
					action: () => ({ redirect: '/' }),
					Component: () => story(),
					loader: () => ({ redirect: '/' }),
					path: '/*',
				},
			]);

			return remixStub({ initialEntries: ['/'] });
		},
	],
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'Header',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;

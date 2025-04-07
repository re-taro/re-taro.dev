import { Footer } from './Footer';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Footer;

const meta: Meta = {
	component: Footer,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'Footer',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;

import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Paragraph;

const meta: Meta = {
	args: {
		children: 'テキストテキスト',
	},
	component: Paragraph,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'Paragraph',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const MainText: Story = {
	args: {
		type: 'main',
	},
};

export const SubText: Story = {
	args: {
		type: 'sub',
	},
};

export const EmphasisText: Story = {
	args: {
		emphasis: true,
	},
};

export const NormalLeadingText: Story = {
	args: {
		leading: 'normal',
	},
};

export const TightLeadingText: Story = {
	args: {
		leading: 'tight',
	},
};

export const NoneLeadingText: Story = {
	args: {
		leading: 'none',
	},
};

export const NormalWeightText: Story = {
	args: {
		weight: 'normal',
	},
};

export const BoldWeightText: Story = {
	args: {
		weight: 'bold',
	},
};

export default meta;

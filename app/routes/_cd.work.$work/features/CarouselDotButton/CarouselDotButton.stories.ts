import { CarouselDotButton } from './CarouselDotButton';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof CarouselDotButton;

const meta: Meta = {
	component: CarouselDotButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'CarouselDotButton',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		index: 0,
		isSelected: false,
	},
};

export const Selected: Story = {
	args: {
		index: 0,
		isSelected: true,
	},
};

export default meta;

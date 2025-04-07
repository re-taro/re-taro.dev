import { Carousel } from './Carousel';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Carousel;

const meta: Meta = {
	component: Carousel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'Carousel',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		images: [
			{
				alt: '発表資料の表紙',
				src: 'https://re-taro.dev/images/works/togather/togather_1.png',
			},
			{
				alt: 'togather のフロー その 1',
				src: 'https://re-taro.dev/images/works/togather/togather_2.png',
			},
			{
				alt: 'togather のフロー その 2',
				src: 'https://re-taro.dev/images/works/togather/togather_3.png',
			},
			{
				alt: 'togather の特徴',
				src: 'https://re-taro.dev/images/works/togather/togather_4.png',
			},
		],
	},
};

export default meta;

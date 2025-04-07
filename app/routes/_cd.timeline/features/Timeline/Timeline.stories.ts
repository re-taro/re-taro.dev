import { Temporal } from 'temporal-polyfill';
import { Timeline } from './Timeline';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof Timeline;

const meta: Meta = {
	args: {
		timelines: Array.from({ length: 3 }, (_, index) => ({
			date: Temporal.PlainDate.from({ day: 25, month: index + 1, year: 2004 }),
			slug: `slug-${index + 1}`,
			title: `Title ${index + 1}`,
		})),
	},
	component: Timeline,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'Timeline',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;

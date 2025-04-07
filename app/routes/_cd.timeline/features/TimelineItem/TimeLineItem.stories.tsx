import { Temporal } from 'temporal-polyfill';
import { TimelineItem } from './TimelineItem';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof TimelineItem;

const meta: Meta = {
	args: {
		date: Temporal.PlainDate.from({ day: 25, month: 4, year: 2004 }),
		title: '誕生',
	},
	component: TimelineItem,
	decorators: [
		(Story) => (
			<ul>
				<Story />
			</ul>
		),
	],
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const WithSlug: Story = {
	args: {
		slug: 'birth',
	},
};

export default meta;

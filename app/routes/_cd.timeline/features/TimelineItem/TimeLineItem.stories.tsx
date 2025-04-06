import type { Meta, StoryObj } from '@storybook/react';

import { Temporal } from 'temporal-polyfill';
import { TimelineItem } from './TimelineItem';

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
	title: 'TimelineItem',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const WithSlug: Story = {
	args: {
		slug: 'birth',
	},
};

export default meta;

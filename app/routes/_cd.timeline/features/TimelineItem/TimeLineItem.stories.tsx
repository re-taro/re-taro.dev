import type { Meta, StoryObj } from "@storybook/react";

import { Temporal } from "temporal-polyfill";
import { TimelineItem } from "./TimelineItem";

type T = typeof TimelineItem;

const meta: Meta = {
	title: "TimelineItem",
	component: TimelineItem,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		title: "誕生",
		date: Temporal.PlainDate.from({ year: 2004, month: 4, day: 25 }),
	},
	decorators: [Story => (
		<ul>
			<Story />
		</ul>
	)],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const WithSlug: Story = {
	args: {
		slug: "birth",
	},
};

export default meta;

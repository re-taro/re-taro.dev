import type { Meta, StoryObj } from "@storybook/react";

import { Temporal } from "temporal-polyfill";
import { Timeline } from "./Timeline";

type T = typeof Timeline;

const meta: Meta = {
	title: "Timeline",
	component: Timeline,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		timelines: Array.from({ length: 3 }, (_, index) => ({
			title: `Title ${index + 1}`,
			date: Temporal.PlainDate.from({ year: 2004, month: index + 1, day: 25 }),
			slug: `slug-${index + 1}`,
		})),
	},
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;

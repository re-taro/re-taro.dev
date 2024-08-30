import type { Meta, StoryObj } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";

import { Hero } from "./Hero";

type T = typeof Hero;

const meta: Meta = {
	component: Hero,
	decorators: [
		(story) => {
			const remixStub = createRemixStub([
				{
					action: () => ({ redirect: "/" }),
					Component: () => story(),
					loader: () => ({ redirect: "/" }),
					path: "/*",
				},
			]);

			return remixStub({ initialEntries: ["/"] });
		},
	],
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Hero",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;

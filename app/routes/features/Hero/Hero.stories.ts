import type { Meta, StoryObj } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";

import { Hero } from "./Hero";

type T = typeof Hero;

const meta: Meta = {
	title: "Hero",
	component: Hero,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(story) => {
			const remixStub = createRemixStub([
				{
					path: "/*",
					action: () => ({ redirect: "/" }),
					loader: () => ({ redirect: "/" }),
					Component: () => story(),
				},
			]);

			return remixStub({ initialEntries: ["/"] });
		},
	],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;

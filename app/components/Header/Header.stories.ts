import type { Meta, StoryObj } from "@storybook/react";

import { createRemixStub } from "@remix-run/testing";
import { Header } from "./Header";

type T = typeof Header;

const meta: Meta = {
	title: "Header",
	component: Header,
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

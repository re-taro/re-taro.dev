import type { Meta, StoryObj } from "@storybook/react";

import { SocialLink } from "./SocialLink";
import Github from "~icons/simple-icons/github";

type T = typeof SocialLink;

const meta: Meta = {
	title: "SocialLink",
	component: SocialLink,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		href: "https://github.com/re-taro",
		icon: Github,
		children: "GitHub",
	},
};

export default meta;

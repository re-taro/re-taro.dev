import type { Meta, StoryObj } from "@storybook/react";

import { SiGithub } from "react-icons/si";
import { SocialLink } from "./SocialLink";

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
		icon: SiGithub,
		children: "GitHub",
	},
};

export default meta;

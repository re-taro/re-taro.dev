import type { Meta, StoryObj } from '@storybook/react';

import { SocialLink } from './SocialLink';
import Github from '~icons/simple-icons/github';

type T = typeof SocialLink;

const meta: Meta = {
	component: SocialLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	title: 'SocialLink',
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		children: 'GitHub',
		href: 'https://github.com/re-taro',
		icon: Github,
	},
};

export default meta;

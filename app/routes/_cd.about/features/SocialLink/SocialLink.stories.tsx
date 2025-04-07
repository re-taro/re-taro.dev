import { SocialLink } from './SocialLink';
import type { Meta, StoryObj } from '@storybook/react';
import Github from '~icons/simple-icons/github';

type T = typeof SocialLink;

const meta: Meta = {
	component: SocialLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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

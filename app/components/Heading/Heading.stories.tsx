import type { Meta, StoryObj } from "@storybook/react";

import { Heading, PageHeading } from "./Heading";
import { Section } from "~/components/SectioningContent";

type T = typeof Heading;

const meta: Meta = {
	title: "Heading",
	component: Heading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const SectionHeading: Story = {
	args: {
		children: "SectionHeading",
	},
	decorators: [
		Story => (
			<Section>
				<Story />
			</Section>
		),
	],
};

export const ScreenHeading: Story = {
	args: {
		children: "ScreenHeading",
		type: "screen",
	},
	decorators: [
		Story => (
			<Section>
				<Story />
			</Section>
		),
	],
};

export const BlockHeading: Story = {
	args: {
		children: "BlockHeading",
		type: "block",
	},
	decorators: [
		Story => (
			<Section>
				<Story />
			</Section>
		),
	],
};

export const WithPrefix: Story = {
	args: {
		children: "WithPrefix",
		prefix: true,
	},
	decorators: [
		Story => (
			<Section>
				<Story />
			</Section>
		),
	],
};

function Headings() {
	return (
		<>
			<PageHeading>Page Heading</PageHeading>
			<Section>
				<ul>
					<li>
						<Section>
							<Heading type="screen">ScreenTitle</Heading>
						</Section>
					</li>
					<li>
						<Section>
							<Heading type="section">SectionTitle</Heading>
						</Section>
					</li>
					<li>
						<Section>
							<Heading type="block">BlockTitle</Heading>
						</Section>
					</li>
				</ul>
			</Section>
		</>
	);
}

export const AutoHeading: Story = {
	render: () => <Headings />,
	parameters: {
		a11y: {
			disable: true,
		},
	},
};

export default meta;

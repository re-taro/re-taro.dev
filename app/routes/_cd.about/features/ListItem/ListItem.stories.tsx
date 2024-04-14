import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { ListItem } from "./ListItem";

type T = typeof ListItem;

const meta: Meta = {
	title: "ListItem",
	component: ListItem,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		name: "TypeScript",
		children: "Webアプリケーション開発に使用している言語です。",
	},
	decorators: [Story => <ul><Story /></ul>],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

function Children(): ReactNode {
	return (
		<>
			あのイーハトーヴォのすきとおった風、
			<wbr />
			夏でも底に冷たさをもつ青いそら、
			<wbr />
			うつくしい森で飾られたモリーオ市、
			<wbr />
			郊外のぎらぎらひかる草の波。
		</>
	);
}

export const LongDescription: Story = {
	args: {
		children: <Children />,
	},
};

export default meta;

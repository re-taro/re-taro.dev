import type { StoryObj } from "@storybook/react";

import {
	Article,
	Aside,
	Nav,
	Section,
	SectioningFragment,
} from "./SectioningContent";
import { Heading, PageHeading } from "~/components/Heading";

type T = typeof Section;

const meta = {
	title: "SectioningContent",
	component: Section,
	subcomponents: { Article, Aside, Nav },
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

type Story = StoryObj<T>;

function Contents() {
	return (
		<>
			<PageHeading>h1</PageHeading>
			<Section>
				<PageHeading>
					PageHeading: Headingと違い、SectioningContent中でも常にh1を出力する
				</PageHeading>
			</Section>
			<Heading prefix>Heading without SectioningContent: h1</Heading>
			<Nav>
				<Heading>Nav: h2</Heading>
			</Nav>
			<Section>
				<Heading prefix>h2</Heading>
				<Section>
					<Heading prefix>h3</Heading>
					<Section>
						<Heading prefix>h4</Heading>
						<Section>
							<Heading prefix>h5</Heading>
							<Section>
								<Heading prefix>h6</Heading>
								<Section>
									<Heading prefix>span</Heading>
								</Section>
							</Section>
						</Section>
						<Article>
							<Heading>Article: h5</Heading>
						</Article>
					</Section>
				</Section>
				<SectioningFragment>
					<Heading>h3</Heading>
				</SectioningFragment>
			</Section>
			<Aside>
				<Heading>Aside: h2</Heading>
			</Aside>
		</>
	);
}

export const SectioningContent: Story = {
	render: () => <Contents />,
};

export default meta;

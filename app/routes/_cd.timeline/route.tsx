import type { ReactNode } from "react";
import { css } from "styled-system/css";
import { useLoaderData as _useLoaderData } from "@remix-run/react";
import { Temporal } from "temporal-polyfill";
import { Timeline } from "./features/Timeline";
import { loader } from "./handlers";
import type { Props as TimelineItemProps } from "./features/TimelineItem/TimelineItem";
import { PageHeading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { Section } from "~/components/SectioningContent";

export default function Page(): ReactNode {
	const { timelines } = useLoaderData();

	return (
		<div
			className={css({
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				margin: "5rem auto 0",
				maxWidth: "50rem",
				rowGap: "2rem",
				width: "100%",
			})}
		>
			<PageHeading bold prefix css={css.raw({ fontSize: "xl" })} type="section">Timeline</PageHeading>
			<Paragraph as="p">私のこれまで</Paragraph>
			<Section aria-label="Timeline" css={css.raw({ display: "flex", flexDirection: "column", rowGap: "1rem" })}>
				<Timeline timelines={timelines} />
			</Section>
		</div>
	);
}

function useLoaderData() {
	const { timelines } = _useLoaderData<typeof loader>();

	return {
		timelines: timelines.map<TimelineItemProps>(({ date, ...rest }) => ({
			...rest,
			date: Temporal.PlainDate.from(date),
		})),
	};
}

export { loader };

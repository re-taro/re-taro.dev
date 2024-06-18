import type { ReactNode } from "react";
import type { Props as TimelineItemProps } from "../TimelineItem/TimelineItem";
import { TimelineItem } from "../TimelineItem";

interface Props {
	timelines: Array<TimelineItemProps>;
}

export function Timeline({ timelines }: Props): ReactNode {
	return (
		<ul>
			{timelines.map((timeline, index) => (
				<TimelineItem title={timeline.title} date={timeline.date} slug={timeline.slug} key={index} />
			))}
		</ul>
	);
}

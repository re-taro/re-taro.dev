import { TimelineItem } from '../TimelineItem';
import type { Props as TimelineItemProps } from '../TimelineItem/TimelineItem';
import type { FC } from 'react';

interface Props {
	timelines: TimelineItemProps[];
}

export const Timeline: FC<Props> = ({ timelines }) => {
	return (
		<ul>
			{timelines.map((timeline) => (
				<TimelineItem date={timeline.date} key={timeline.title} slug={timeline.slug} title={timeline.title} />
			))}
		</ul>
	);
};

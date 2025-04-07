import { Temporal } from 'temporal-polyfill';
import type { Timeline } from 'content-collections';

export const loader = async (): Promise<{ timelines: Timeline[] }> => {
	const { allTimelines } = await import('content-collections');
	const timelines = allTimelines.sort((a, b) => Temporal.PlainDateTime.compare(b.date, a.date));

	return { timelines };
};

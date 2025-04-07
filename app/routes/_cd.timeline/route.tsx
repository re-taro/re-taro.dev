import type { ReactNode } from 'react';
import { css } from 'styled-system/css';
import type { MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData as _useLoaderData } from '@remix-run/react';
import { Temporal } from 'temporal-polyfill';
import { Timeline } from './features/Timeline';
import { loader } from './handlers';
import type { Props as TimelineItemProps } from './features/TimelineItem/TimelineItem';
import { PageHeading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';
import { Section } from '~/components/SectioningContent';

export default function Page(): ReactNode {
	const { timelines } = useLoaderData();

	return (
		<>
			<PageHeading bold prefix css={css.raw({ fontSize: 'xl' })} type="section">
				Timeline
			</PageHeading>
			<Paragraph as="p">私のこれまで</Paragraph>
			<Section aria-label="Timeline" css={css.raw({ display: 'flex', flexDirection: 'column', rowGap: '1rem' })}>
				<Timeline timelines={timelines} />
			</Section>
		</>
	);
}

function useLoaderData() {
	const { timelines } = _useLoaderData<typeof loader>();

	return {
		timelines: timelines.map<TimelineItemProps>(({ date, slug, title }) => ({
			date: Temporal.PlainDate.from(date),
			slug,
			title,
		})),
	};
}

export const meta: MetaFunction = () => [
	{ content: 'Rintaro Itokawa (re-taro) の略歴です。', name: 'description' },
	{ name: 'og:title', property: 'Rintaro Itokawa - Web Developer' },
	{ name: 'og:description', property: 'Rintaro Itokawa (re-taro) の略歴です。' },
	{ name: 'og:url', property: 'https://re-taro.dev' },
	{ name: 'og:image', property: "https://og.re-taro.dev?title=re-taro's+Biography&text=re-taro.dev" },
	{ name: 'og:type', property: 'website' },
	{ content: 'summary_large_image', name: 'twitter:card' },
	{ content: 'Rintaro Itokawa - Web Developer', name: 'twitter:title' },
	{ content: 'Rintaro Itokawa (re-taro) の略歴です。', name: 'twitter:description' },
	{ content: "https://og.re-taro.dev?title=re-taro's+Biography&text=re-taro.dev", name: 'twitter:image' },
	{ content: '@re_taro_', name: 'twitter:site' },
	{ content: '@re_taro_', name: 'twitter:creator' },
];

export { loader };

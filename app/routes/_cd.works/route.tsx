import { useLoaderData } from '@remix-run/react';
import { css } from 'styled-system/css';
import { WorkCard } from './features/WorkCard';
import type { MetaFunction } from '@remix-run/cloudflare';
import type { Work } from 'content-collections';
import type { ReactNode } from 'react';
import { PageHeading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

interface LoaderData {
	works: Work[];
}

export default function Page(): ReactNode {
	const { works } = useLoaderData<LoaderData>();

	return (
		<>
			<PageHeading bold prefix css={css.raw({ fontSize: 'xl' })} type="section">
				Works
			</PageHeading>
			<Paragraph as="p">私がつくったもの</Paragraph>
			<div
				className={css({
					columnGap: '1rem',
					display: 'flex',
					flexWrap: 'wrap',
					marginTop: '[2rem]',
					rowGap: '2rem',
				})}>
				{works.map((work) => (
					<WorkCard key={work.title} work={work} />
				))}
			</div>
		</>
	);
}

export const meta: MetaFunction = () => [
	{ content: 'Rintaro Itokawa (re-taro) の創作です。', name: 'description' },
	{ name: 'og:title', property: 'Rintaro Itokawa - Web Developer' },
	{ name: 'og:description', property: 'Rintaro Itokawa (re-taro) の創作です。' },
	{ name: 'og:url', property: 'https://re-taro.dev' },
	{ name: 'og:image', property: "https://og.re-taro.dev?title=re-taro's+Creative&text=re-taro.dev" },
	{ name: 'og:type', property: 'website' },
	{ content: 'summary_large_image', name: 'twitter:card' },
	{ content: 'Rintaro Itokawa - Web Developer', name: 'twitter:title' },
	{ content: 'Rintaro Itokawa (re-taro) の創作です。', name: 'twitter:description' },
	{ content: "https://og.re-taro.dev?title=re-taro's+Creative&text=re-taro.dev", name: 'twitter:image' },
	{ content: '@re_taro_', name: 'twitter:site' },
	{ content: '@re_taro_', name: 'twitter:creator' },
];

export { loader } from './handlers';

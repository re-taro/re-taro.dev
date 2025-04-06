import type { ReactNode } from 'react';
import { useLoaderData } from '@remix-run/react';
import { css } from 'styled-system/css';
import type { MetaFunction } from '@remix-run/cloudflare';
import { loader } from './handlers';
import { Carousel } from './features/Carousel';
import { PageHeading } from '~/components/Heading';
import { Paragraph } from '~/components/Paragraph';

export default function Page(): ReactNode {
	const { work } = useLoaderData<typeof loader>();

	return (
		<>
			<PageHeading bold prefix css={css.raw({ fontSize: 'xl' })} type="section">
				{work.title}
			</PageHeading>
			<img
				className={css({
					aspectRatio: '16 / 9',
					height: 'auto',
					objectFit: 'cover',
					order: -1,
					width: '[100%]',
				})}
				alt={work.thumbnail.alt}
				height={563}
				src={`https://img.re-taro.dev?url=${work.thumbnail.src}&w=1000`}
				width={1000}
			/>
			<Paragraph as="p">{work.content}</Paragraph>
			{work.images && <Carousel images={work.images} />}
		</>
	);
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
	{ content: data?.work.description, name: 'description' },
	{ name: 'og:title', property: 'Rintaro Itokawa - Web Developer' },
	{ name: 'og:description', property: data?.work.description },
	{ name: 'og:url', property: 'https://re-taro.dev' },
	{ name: 'og:image', property: `https://og.re-taro.dev?title=${data?.work.title}&text=re-taro.dev` },
	{ name: 'og:type', property: 'website' },
	{ content: 'summary_large_image', name: 'twitter:card' },
	{ content: 'Rintaro Itokawa - Web Developer', name: 'twitter:title' },
	{ content: data?.work.description, name: 'twitter:description' },
	{ content: `https://og.re-taro.dev?title=${data?.work.title}&text=re-taro.dev`, name: 'twitter:image' },
	{ content: '@re_taro_', name: 'twitter:site' },
	{ content: '@re_taro_', name: 'twitter:creator' },
];

export { loader };

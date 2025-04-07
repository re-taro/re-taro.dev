import { createRemixStub } from '@remix-run/testing';
import { css } from 'styled-system/css';
import { WorkCard } from './WorkCard';
import type { Meta, StoryObj } from '@storybook/react';

type T = typeof WorkCard;

const meta: Meta = {
	component: WorkCard,
	decorators: [
		(story) => {
			const remixStub = createRemixStub([
				{
					action: () => ({ redirect: '/' }),
					Component: () => story(),
					loader: () => ({ redirect: '/' }),
					path: '/*',
				},
			]);

			return remixStub({ initialEntries: ['/'] });
		},
		(Story) => (
			<div
				className={css({
					display: 'flex',
				})}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
	args: {
		work: {
			_meta: {
				directory: '.',
				extension: 'md',
				fileName: 'togather.md',
				filePath: 'togather.md',
				path: 'togather',
			},
			content:
				'Hack U KOSEN 2021にて4年生の先輩2人と私を含めた2年生3人で共同開発した作品です。管理されずらい学内での落とし物を管理したい、届かない感謝を届けたいという課題を解決するため、「ありがとう」を届ける落とし物プラットフォーム、 Togather を開発しました。フロントエンドを担当しました。ヤフー賞と HappyHacking 賞の2冠を達成しました。',
			date: '2021-12-18',
			description: 'Hack U KOSEN 2021 にて開発した、「ありがとう」を届ける落とし物プラットフォーム',
			images: [
				{
					alt: '発表資料の表紙',
					src: '/images/works/togather/togather_1.png',
				},
				{
					alt: 'togather のフロー その 1',
					src: '/images/works/togather/togather_2.png',
				},
				{
					alt: 'togather のフロー その 2',
					src: '/images/works/togather/togather_3.png',
				},
				{
					alt: 'togather の特徴',
					src: '/images/works/togather/togather_4.png',
				},
			],
			links: [
				{
					text: 'Repository',
					url: 'https://github.com/HackU-Kosen-SNCT',
				},
				{
					text: 'Presentation',
					url: 'https://www.youtube.com/watch?v=uzsjm_9tSwY&t=801s',
				},
			],
			thumbnail: {
				alt: 'togather',
				src: 'https://re-taro.dev/images/works/togather/togather_thumb.png',
			},
			title: 'togather',
		},
	},
};

export default meta;

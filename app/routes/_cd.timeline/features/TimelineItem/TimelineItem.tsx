import type { ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import type { Temporal } from 'temporal-polyfill';
import { Paragraph } from '~/components/Paragraph';

export interface Props {
	date: Temporal.PlainDate;
	title: string;
	slug?: string;
}

export function TimelineItem({ date, slug, title }: Props): ReactNode {
	return (
		<li
			className={cx(
				css({
					listStyle: 'none',
					padding: '0.5rem 0 0.5rem 1rem',
					position: 'relative',
				}),
				'timeline-item',
			)}>
			<span
				className={css({
					'.timeline-item:first-child &': {
						top: '1rem',
					},
					'.timeline-item:last-child &': {
						bottom: 'calc(100% - 1rem)',
					},
					'backgroundColor': 'bg.teriary',
					'bottom': 0,
					'left': '-0.5px',
					'position': 'absolute',
					'top': 0,
					'width': '[1px]',
				})}
				role="presentation"
			/>
			<span
				className={css({
					backgroundColor: 'bg.teriary',
					borderRadius: '9999px',
					height: '[0.5rem]',
					left: '-4px',
					position: 'absolute',
					top: '1rem',
					width: '[0.5rem]',
				})}
				role="presentation"
			/>
			<time
				className={css({
					color: 'text.secondary',
					fontSize: 's',
					fontWeight: 'normal',
					lineHeight: 'tight',
				})}
				dateTime={date.toString()}>
				{date.toLocaleString('en-US', {
					month: 'short',
					year: 'numeric',
				})}
			</time>
			<h2
				className={css({
					color: 'text.main',
					fontSize: 'l',
					fontWeight: 'bold',
					lineHeight: 'normal',
				})}>
				{title}
			</h2>
			{slug && <Paragraph as="p">{slug}</Paragraph>}
		</li>
	);
}

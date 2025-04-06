import type { PropsWithChildren, ReactNode } from 'react';
import { css } from 'styled-system/css';

type Props = PropsWithChildren<{
	name: string;
}>;

export function ListItem({ children, name }: Props): ReactNode {
	return (
		<li
			className={css({
				_before: {
					content: "'-'",
					left: '-1em',
					position: 'absolute',
				},
				color: 'text.main',
				fontSize: 'm',
				fontWeight: 'normal',
				lineHeight: 'normal',
				marginLeft: '[1em]',

				position: 'relative',
			})}>
			{name}
			<ul>
				<li
					className={css({
						_before: {
							content: "'-'",
							left: '-1em',
							position: 'absolute',
						},
						color: 'text.secondary',
						hangingPunctuation: 'allow-end',
						lineBreak: 'strict',
						marginLeft: '[1.25em]',
						overflowWrap: 'anywhere',
						position: 'relative',

						wordBreak: 'keep-all',
					})}>
					{children}
				</li>
			</ul>
		</li>
	);
}

import { css } from 'styled-system/css';
import type { PropsWithChildren, FC } from 'react';

type Props = PropsWithChildren<{
	name: string;
}>;

export const ListItem: FC<Props> = ({ children, name }) => {
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
};

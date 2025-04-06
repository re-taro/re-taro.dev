import type { ReactNode } from 'react';
import { css } from 'styled-system/css';
import type { SystemStyleObject } from 'styled-system/types';

interface Props {
	css?: SystemStyleObject;
}
export function Footer({ css: cssStyle }: Props): ReactNode {
	return (
		<footer
			className={css(
				{
					color: 'text.secondary',
					display: 'flex',
					fontSize: 'l',
					fontWeight: 'normal',
					justifyContent: 'center',
					lineHeight: 'tight',
					padding: '1rem 0 2rem',
					width: '[100%]',
				},
				cssStyle,
			)}>
			2021 - PRESENT &copy; Rintaro Itokawa
		</footer>
	);
}

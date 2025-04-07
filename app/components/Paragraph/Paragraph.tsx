import { css, cva } from 'styled-system/css';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import type { SystemStyleObject } from 'styled-system/types';

interface BaseProps {
	children: ReactNode;
	as?: 'em' | 'p' | 'span';
	css?: SystemStyleObject;
	emphasis?: boolean;
	leading?: 'none' | 'normal' | 'tight';
	type?: 'main' | 'sub';
	weight?: 'bold' | 'normal';
}

type ElementProps = Omit<HTMLAttributes<HTMLSpanElement>, keyof BaseProps>;

const text = cva({
	base: {
		fontSize: 'm',
		hangingPunctuation: 'allow-end',
		lineBreak: 'strict',
		overflowWrap: 'anywhere',
		wordBreak: 'keep-all',
	},
	variants: {
		emphasis: {
			true: {
				fontWeight: 'bold',
			},
		},
		leading: {
			none: {
				lineHeight: 'none',
			},
			normal: {
				lineHeight: 'normal',
			},
			tight: {
				lineHeight: 'tight',
			},
		},
		type: {
			main: {
				color: 'text.main',
			},
			sub: {
				color: 'text.secondary',
			},
		},
		weight: {
			bold: {
				fontWeight: 'bold',
			},
			normal: {
				fontWeight: 'normal',
			},
		},
	},
});

export const Paragraph: FC<BaseProps & ElementProps> = ({
	css: cssStyle,
	emphasis = false,
	leading = 'normal',
	type = 'main',
	weight = 'normal',
	as: Component = emphasis ? 'em' : 'span',
	...props
}: BaseProps & ElementProps) => {
	return <Component {...props} className={css(text.raw({ emphasis, leading, type, weight }), cssStyle)} />;
};

import { css, cva } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";
import type { HTMLAttributes, ReactNode } from "react";

interface BaseProps {
	children: ReactNode;
	as?: "em" | "p" | "span";
	css?: SystemStyleObject;
	emphasis?: boolean;
	leading?: "none" | "normal" | "tight";
	type?: "main" | "sub";
	weight?: "bold" | "normal";
}

type ElementProps = Omit<HTMLAttributes<HTMLSpanElement>, keyof BaseProps>;

const text = cva({
	base: {
		fontSize: "m",

		hangingPunctuation: "allow-end",
		lineBreak: "strict",
		overflowWrap: "anywhere",
		wordBreak: "keep-all",
	},
	variants: {
		emphasis: {
			true: {
				fontWeight: "bold",
			},
		},
		leading: {
			none: {
				lineHeight: "none",
			},
			normal: {
				lineHeight: "normal",
			},
			tight: {
				lineHeight: "tight",
			},
		},
		type: {
			main: {
				color: "text.main",
			},
			sub: {
				color: "text.secondary",
			},
		},
		weight: {
			bold: {
				fontWeight: "bold",
			},
			normal: {
				fontWeight: "normal",
			},
		},
	},
});

export function Paragraph({
	css: cssStyle,
	emphasis = false,
	leading = "normal",
	type = "main",
	weight = "normal",
	// eslint-disable-next-line perfectionist/sort-objects
	as: Component = emphasis ? "em" : "span",
	...props
}: BaseProps & ElementProps): ReactNode {
	return (
		<Component
			{...props}
			className={css(text.raw({ emphasis, leading, type, weight }), cssStyle)}
		/>
	);
}

import { css, cva } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";
import type { HTMLAttributes, ReactNode } from "react";

interface BaseProps {
	type?: "main" | "sub";
	as?: "span" | "p" | "em";
	emphasis?: boolean;
	leading?: "normal" | "tight" | "none";
	weight?: "normal" | "bold";
	children: ReactNode;
	css?: SystemStyleObject;
}

type ElementProps = Omit<HTMLAttributes<HTMLSpanElement>, keyof BaseProps>;

const text = cva({
	base: {
		fontSize: "m",

		wordBreak: "keep-all",
		lineBreak: "strict",
		hangingPunctuation: "allow-end",
		overflowWrap: "anywhere",
	},
	variants: {
		type: {
			main: {
				color: "text.main",
			},
			sub: {
				color: "text.secondary",
			},
		},
		leading: {
			normal: {
				lineHeight: "normal",
			},
			tight: {
				lineHeight: "tight",
			},
			none: {
				lineHeight: "none",
			},
		},
		weight: {
			normal: {
				fontWeight: "normal",
			},
			bold: {
				fontWeight: "bold",
			},
		},
		emphasis: {
			true: {
				fontWeight: "bold",
			},
		},
	},
});

export function Paragraph({
	type = "main",
	emphasis = false,
	leading = "normal",
	weight = "normal",
	as: Component = emphasis ? "em" : "span",
	css: cssStyle,
	...props
}: BaseProps & ElementProps): ReactNode {
	return (
		<Component
			{...props}
			className={css(text.raw({ type, leading, weight, emphasis }), cssStyle)}
		/>
	);
}

import type { ComponentPropsWithoutRef, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { forwardRef, useContext, useMemo } from "react";
import { css, cva } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";
import { LevelContext } from "~/components/SectioningContent";

export type HeadingTypes =
	| "screen"
	| "section"
	| "block";

type HeadingTagTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
	type?: HeadingTypes;
	prefix?: boolean;
	bold?: boolean;
	css?: SystemStyleObject;
	/**
	 * @deprecated SectioningContent(Article, Aside, Nav, Section, SectioningFragment)を使ってHeadingと関連する範囲を明確に指定してください
	 */
	tag?: HeadingTagTypes;
	children?: ReactNode;
}

interface HeadingBaseProps {
	as?: HeadingTagTypes | "span";
	weight?: "normal" | "bold";
	size?: "s" | "m" | "l";
	color?: "white" | "grey";
	prefix?: boolean;
	css?: SystemStyleObject;
	children?: ReactNode;
	headingRef?: ForwardedRef<HTMLHeadingElement>;
}

type ElementProps = Omit<
	ComponentPropsWithoutRef<"h1">,
	keyof Props | keyof HeadingBaseProps | "role" | "aria-level" | "className"
>;

type HeadingBaseElementProps = Omit<
	HTMLAttributes<HTMLHeadingElement>,
	keyof HeadingBaseProps | "className"
>;

function generateTagProps(level: number, tag?: HeadingTagTypes) {
	let role;
	let ariaLevel;

	if (!tag && level > 6) {
		if (level === 1)
			throw new Error("Use PageHeading for h1");

		role = "heading";
		ariaLevel = level;
	}

	return {
		"as":
			tag ?? ((level <= 6 ? `h${level}` : "span") as HeadingTagTypes | "span"),
		role,
		"aria-level": ariaLevel,
	};
}

const base = cva({
	base: {
		lineHeight: "tight",
	},
	variants: {
		weight: {
			normal: {
				fontWeight: "normal",
			},
			bold: {
				fontWeight: "bold",
			},
		},
		size: {
			s: {
				fontSize: { base: "l", md: "2xl" },
			},
			m: {
				fontSize: { base: "xl", md: "3xl" },
			},
			l: {
				fontSize: { base: "2xl", md: "4xl" },
			},
		},
		color: {
			white: {
				color: "text.main",
			},
			grey: {
				color: "text.secondary",
			},
		},
		prefix: {
			true: {},
			false: {},
		},
		as: {
			h1: {},
			h2: {},
			h3: {},
			h4: {}, // NOT USED
			h5: {}, // NOT USED
			h6: {}, // NOT USED
			span: {}, // NOT USED
		},
	},
	compoundVariants: [
		{
			prefix: true,
			as: "h1",
			css: {
				_before: {
					content: "'# '",
				},
			},
		},
		{
			prefix: true,
			as: "h2",
			css: {
				_before: {
					content: "'## '",
				},
			},
		},
		{
			prefix: true,
			as: "h3",
			css: {
				_before: {
					content: "'### '",
				},
			},
		},
	],
});

function HeadingBase({
	weight = "normal",
	size = "m",
	color = "white",
	as: Component = "span",
	prefix = false,
	css: cssProps,
	headingRef,
	...props
}: HeadingBaseProps & HeadingBaseElementProps): ReactNode {
	return (
		<Component
			{...props}
			ref={headingRef}
			className={css(base.raw({ weight, size, color, prefix, as: Component }), cssProps)}
		/>
	);
}

const MAPPER: Record<HeadingTypes, HeadingBaseProps> = {
	screen: { weight: "normal",	size: "l",	color: "white" },
	section: { weight: "normal",	size: "m",	color: "white" },
	block: { weight: "normal",	size: "s",	color: "white" },
};

export const Heading = forwardRef<HTMLHeadingElement, Props & ElementProps>(({
	tag,
	prefix = false,
	bold = false,
	type = "section",
	css: cssProps,
	...props
}, ref) => {
	const level = useContext(LevelContext) as 1 | 2 | 3 | 4 | 5 | 6;
	const tagProps = useMemo(() => generateTagProps(level, tag), [level, tag]);
	const actualProps: HeadingBaseProps & HeadingBaseElementProps = {
		...props,
		...tagProps,
		...MAPPER[type],
		weight: bold ? "bold" : "normal",
		prefix,
		css: cssProps,
		headingRef: ref,
	};
	return <HeadingBase {...actualProps} />;
});

Heading.displayName = "Heading";

export const PageHeading = forwardRef<HTMLHeadingElement, Omit<Props & ElementProps, "tag">>(({
	type = "screen",
	...props
}, ref) => {
	return <Heading {...props} ref={ref} type={type} tag="h1" />;
});

PageHeading.displayName = "PageHeading";

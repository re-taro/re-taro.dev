import type { ComponentPropsWithoutRef, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { forwardRef, useContext, useMemo } from "react";
import { css, cva } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";
import { LevelContext } from "~/components/SectioningContent";

export type HeadingTypes =
	| "block"
	| "screen"
	| "section";

type HeadingTagTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
	bold?: boolean;
	children?: ReactNode;
	css?: SystemStyleObject;
	prefix?: boolean;
	/**
	 * @deprecated SectioningContent(Article, Aside, Nav, Section, SectioningFragment)を使ってHeadingと関連する範囲を明確に指定してください
	 */
	tag?: HeadingTagTypes;
	type?: HeadingTypes;
}

interface HeadingBaseProps {
	as?: HeadingTagTypes | "span";
	children?: ReactNode;
	color?: "grey" | "white";
	css?: SystemStyleObject;
	headingRef?: ForwardedRef<HTMLHeadingElement>;
	prefix?: boolean;
	size?: "l" | "m" | "s";
	weight?: "bold" | "normal";
}

type ElementProps = Omit<
	ComponentPropsWithoutRef<"h1">,
	keyof HeadingBaseProps | keyof Props | "aria-level" | "className" | "role"
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
		"aria-level": ariaLevel,
		"as":
			tag ?? ((level <= 6 ? `h${level}` : "span") as HeadingTagTypes | "span"),
		role,
	};
}

const base = cva({
	base: {
		lineHeight: "tight",
	},
	compoundVariants: [
		{
			as: "h1",
			css: {
				_before: {
					content: "'# '",
				},
			},
			prefix: true,
		},
		{
			as: "h2",
			css: {
				_before: {
					content: "'## '",
				},
			},
			prefix: true,
		},
		{
			as: "h3",
			css: {
				_before: {
					content: "'### '",
				},
			},
			prefix: true,
		},
	],
	variants: {
		as: {
			h1: {},
			h2: {},
			h3: {},
			h4: {}, // NOT USED
			h5: {}, // NOT USED
			h6: {}, // NOT USED
			span: {}, // NOT USED
		},
		color: {
			grey: {
				color: "text.secondary",
			},
			white: {
				color: "text.main",
			},
		},
		prefix: {
			false: {},
			true: {},
		},
		size: {
			l: {
				fontSize: { base: "2xl", md: "4xl" },
			},
			m: {
				fontSize: { base: "xl", md: "3xl" },
			},
			s: {
				fontSize: { base: "l", md: "2xl" },
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

function HeadingBase({
	as: Component = "span",
	color = "white",
	css: cssProps,
	headingRef,
	prefix = false,
	size = "m",
	weight = "normal",
	...props
}: HeadingBaseElementProps & HeadingBaseProps): ReactNode {
	return (
		<Component
			{...props}
			className={css(base.raw({ as: Component, color, prefix, size, weight }), cssProps)}
			ref={headingRef}
		/>
	);
}

const MAPPER: Record<HeadingTypes, HeadingBaseProps> = {
	block: { color: "white",	size: "s",	weight: "normal" },
	screen: { color: "white",	size: "l",	weight: "normal" },
	section: { color: "white",	size: "m",	weight: "normal" },
};

export const Heading = forwardRef<HTMLHeadingElement, ElementProps & Props>(({
	bold = false,
	css: cssProps,
	prefix = false,
	tag,
	type = "section",
	...props
}, ref) => {
	const level = useContext(LevelContext) as 1 | 2 | 3 | 4 | 5 | 6;
	const tagProps = useMemo(() => generateTagProps(level, tag), [level, tag]);
	const actualProps: HeadingBaseElementProps & HeadingBaseProps = {
		...props,
		...tagProps,
		...MAPPER[type],
		css: cssProps,
		headingRef: ref,
		prefix,
		weight: bold ? "bold" : "normal",
	};
	return <HeadingBase {...actualProps} />;
});

Heading.displayName = "Heading";

export const PageHeading = forwardRef<HTMLHeadingElement, Omit<ElementProps & Props, "tag">>(({
	type = "screen",
	...props
}, ref) => {
	return <Heading {...props} ref={ref} tag="h1" type={type} />;
});

PageHeading.displayName = "PageHeading";

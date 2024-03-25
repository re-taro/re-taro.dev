import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import { useContext, useMemo } from "react";
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
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	css?: SystemStyleObject;
	children?: ReactNode;
}

type ElementProps = Omit<
	ComponentProps<"h1">,
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
				fontSize: "2xl",
			},
			m: {
				fontSize: "3xl",
			},
			l: {
				fontSize: "4xl",
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
		level: {
			1: {},
			2: {},
			3: {},
			4: {}, // NOT USED
			5: {}, // NOT USED
			6: {}, // NOT USED
		},
	},
	compoundVariants: [
		{
			prefix: true,
			level: 1,
			css: {
				_before: {
					content: "'# '",
				},
			},
		},
		{
			prefix: true,
			level: 2,
			css: {
				_before: {
					content: "'## '",
				},
			},
		},
		{
			prefix: true,
			level: 3,
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
	level,
	css: cssProps,
	...props
}: HeadingBaseProps & HeadingBaseElementProps): ReactNode {
	return (
		<Component
			{...props}
			className={css(base.raw({ weight, size, color, prefix, level }), cssProps)}
		/>
	);
}

const MAPPER: Record<HeadingTypes, HeadingBaseProps> = {
	screen: { weight: "normal",	size: "l",	color: "white" },
	section: { weight: "normal",	size: "m",	color: "white" },
	block: { weight: "normal",	size: "s",	color: "white" },
};

export function Heading({
	tag,
	prefix = false,
	type = "section",
	css: cssProps,
	...props
}: Props & ElementProps): ReactNode {
	const level = useContext(LevelContext) as 1 | 2 | 3 | 4 | 5 | 6;
	const tagProps = useMemo(() => generateTagProps(level, tag), [level, tag]);
	const actualProps: HeadingBaseProps & HeadingBaseElementProps = {
		...props,
		...tagProps,
		...MAPPER[type],
		prefix,
		level,
		css: cssProps,
	};
	return <HeadingBase {...actualProps} />;
}

export function PageHeading({
	type = "screen",
	...props
}: Omit<Props & ElementProps, "tag">): ReactNode {
	return <Heading {...props} type={type} tag="h1" />;
}

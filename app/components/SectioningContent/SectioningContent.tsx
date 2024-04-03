import type {
	ComponentProps,
	FC,
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
} from "react";
import { forwardRef, useContext } from "react";

import type { SystemStyleObject } from "styled-system/types";
import { css } from "styled-system/css";
import { LevelContext } from "./level";

type BaseProps = PropsWithChildren<{
	css?: SystemStyleObject;
	// via https://html.spec.whatwg.org/multipage/dom.html#sectioning-content
	as?: "article" | "aside" | "nav" | "section";
	baseLevel?: number;
}>;

type SectioningContentProps = Omit<
	HTMLAttributes<HTMLElement>,
	keyof BaseProps | "className"
> &
BaseProps;

type Props = Omit<ComponentProps<typeof SectioningContent>, "as">;

export function SectioningFragment({
	children,
	baseLevel,
}: PropsWithChildren<{ baseLevel?: number }>): ReactNode {
	const level = useContext(LevelContext);

	return (
		<LevelContext.Provider value={baseLevel ?? level + 1}>
			{children}
		</LevelContext.Provider>
	);
}

// eslint-disable-next-line react/display-name
const SectioningContent = forwardRef<HTMLElement, SectioningContentProps>(
	({ children, baseLevel, as: Component = "section", css: cssProps, ...props }, ref) => (
		<Component {...props} className={css(cssProps)} ref={ref}>
			<SectioningFragment baseLevel={baseLevel}>{children}</SectioningFragment>
		</Component>
	),
);

export const Section: FC<Props> = SectioningContent;
export const Article: FC<Props> = props => (
	<SectioningContent {...props} as="article" />
);
export const Aside: FC<Props> = props => (
	<SectioningContent {...props} as="aside" />
);
export const Nav: FC<Props> = props => (
	<SectioningContent {...props} as="nav" />
);

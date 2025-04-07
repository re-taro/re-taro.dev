import { forwardRef, useContext } from 'react';
import { css } from 'styled-system/css';
import { LevelContext } from './level';
import type { ComponentProps, FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { SystemStyleObject } from 'styled-system/types';

type BaseProps = PropsWithChildren<{
	// via https://html.spec.whatwg.org/multipage/dom.html#sectioning-content
	as?: 'article' | 'aside' | 'nav' | 'section';
	baseLevel?: number;
	css?: SystemStyleObject;
}>;

type SectioningContentProps = BaseProps & Omit<HTMLAttributes<HTMLElement>, keyof BaseProps | 'className'>;

type Props = Omit<ComponentProps<typeof SectioningContent>, 'as'>;

export const SectioningFragment: FC<PropsWithChildren<{ baseLevel?: number }>> = ({ baseLevel, children }) => {
	const level = useContext(LevelContext);

	return <LevelContext.Provider value={baseLevel ?? level + 1}>{children}</LevelContext.Provider>;
};

// eslint-disable-next-line react/display-name
const SectioningContent = forwardRef<HTMLElement, SectioningContentProps>(
	({ as: Component = 'section', baseLevel, children, css: cssProps, ...props }, ref) => (
		<Component {...props} className={css(cssProps)} ref={ref}>
			<SectioningFragment baseLevel={baseLevel}>{children}</SectioningFragment>
		</Component>
	),
);

export const Section: FC<Props> = SectioningContent;
export const Article: FC<Props> = (props) => <SectioningContent {...props} as="article" />;
export const Aside: FC<Props> = (props) => <SectioningContent {...props} as="aside" />;
export const Nav: FC<Props> = (props) => <SectioningContent {...props} as="nav" />;

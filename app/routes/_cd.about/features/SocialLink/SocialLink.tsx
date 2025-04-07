import { css } from 'styled-system/css';
import type { FC, ReactElement, SVGProps } from 'react';

interface Props {
	children: string;
	href: string;
	icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export const SocialLink: FC<Props> = ({ children, href, icon: Icon }) => {
	return (
		<a
			className={css({
				_focusVisible: {
					opacity: 1,
				},
				_hover: {
					opacity: 1,
				},
				alignItems: 'center',
				color: 'text.main',
				columnGap: '0.25rem',
				display: 'inline-flex',
				fontSize: 'm',
				fontWeight: 'normal',
				lineHeight: 'normal',
				opacity: 0.6,
				transition: '[opacity 0.3s ease-in]',
			})}
			href={href}
			rel="noreferrer"
			target="_blank">
			<Icon
				className={css({
					opacity: 0.75,
				})}
				aria-label={children}
			/>
			{children}
		</a>
	);
};

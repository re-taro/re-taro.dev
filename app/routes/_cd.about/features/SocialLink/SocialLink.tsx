import type { ReactElement, ReactNode, SVGProps } from "react";
import { css } from "styled-system/css";

interface Props {
	href: string;
	icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
	children: string;
}

export function SocialLink({ href, icon: Icon, children }: Props): ReactNode {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={css({
				display: "inline-flex",
				alignItems: "center",
				columnGap: "0.25rem",
				fontSize: "m",
				fontWeight: "normal",
				lineHeight: "normal",
				color: "text.main",
				opacity: 0.6,
				transition: "opacity 0.3s ease-in",

				_hover: {
					opacity: 1,
				},
				_focusVisible: {
					opacity: 1,
				},
			})}
		>
			<Icon
				className={css({
					opacity: 0.75,
				})}
				aria-label={children}
			/>
			{children}
		</a>
	);
}

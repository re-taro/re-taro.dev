import type { PropsWithChildren, ReactNode } from "react";
import { css } from "styled-system/css";

type Props = PropsWithChildren< {
	name: string;
}>;

export function ListItem({ name, children }: Props): ReactNode {
	return (
		<li className={css({
			position: "relative",
			color: "text.main",
			fontSize: "m",
			fontWeight: "normal",
			lineHeight: "normal",
			marginLeft: "1em",

			_before: {
				position: "absolute",
				content: "'-'",
				left: "-1em",
			},
		})}
		>
			{name}
			<ul>
				<li className={css({
					position: "relative",
					color: "text.secondary",
					marginLeft: "1.25em",
					wordBreak: "keep-all",
					lineBreak: "strict",
					hangingPunctuation: "allow-end",
					overflowWrap: "anywhere",

					_before: {
						position: "absolute",
						content: "'-'",
						left: "-1em",
					},
				})}
				>
					{children}
				</li>
			</ul>
		</li>
	);
}

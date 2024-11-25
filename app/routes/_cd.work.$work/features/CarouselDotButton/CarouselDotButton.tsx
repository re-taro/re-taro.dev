import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { css, cx } from "styled-system/css";

type Props = {
	index: number;
	isSelected: boolean;
} & Pick<ComponentPropsWithoutRef<"button">, "onClick">;

export function CarouselDotButton({ index, isSelected, onClick }: Props): ReactNode {
	return (
		<button
			className={cx(css({
				_after: {
					alignItems: "center",
					borderRadius: "50%",
					boxShadow: "inset 0 0 0 0.2rem {colors.text.main}",
					content: "''",
					display: "flex",
					height: "[1.4rem]",
					width: "[1.4rem]",
				},
				alignItems: "center",
				appearance: "none",
				backgroundColor: "[transparent]",
				border: 0,
				borderRadius: "50%",
				cursor: "pointer",
				display: "flex",
				height: "[2.6rem]",
				justifyContent: "center",
				margin: "[0]",
				padding: 0,
				textDecoration: "none",
				touchAction: "manipulation",
				width: "[2.6rem]",
			}), isSelected && css({
				_after: {
					boxShadow: "inset 0 0 0 0.2rem {colors.accent.main}",
				},
			}))}
			aria-label={`写真 ${index + 1}`}
			onClick={onClick}
			type="button"
		/>
	);
}

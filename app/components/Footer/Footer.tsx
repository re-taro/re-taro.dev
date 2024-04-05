import type { ReactNode } from "react";
import { css } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";

interface Props {
	css?: SystemStyleObject;
}
export function Footer({ css: cssStyle }: Props): ReactNode {
	return (
		<footer className={css({
			display: "flex",
			justifyContent: "center",
			width: "100%",
			color: "text.secondary",
			fontSize: "l",
			fontWeight: "normal",
			lineHeight: "tight",
			padding: "1rem 0 2rem",
		}, cssStyle)}
		>
			2021 - PRESENT &copy; Rintaro Itokawa
		</footer>
	);
}

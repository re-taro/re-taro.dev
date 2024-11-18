import type { ReactNode } from "react";
import { css } from "styled-system/css";

export default function Page(): ReactNode {
	return <h1 className={css({ color: "text.main" })}>test</h1>;
}

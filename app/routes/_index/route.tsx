import { css } from "styled-system/css";
import { Hero } from "./features/Hero";

export default function Page() {
	return (
		<section className={css({
			width: "100%",
			height: "100svh",
			display: "grid",
			placeItems: "center",
		})}
		>
			<Hero />
		</section>
	);
}

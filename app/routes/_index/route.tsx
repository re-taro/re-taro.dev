import { css } from "styled-system/css";
import { Hero } from "./features/Hero";

export default function Page() {
	return (
		<section className={css({
			display: "grid",
			height: "100svh",
			placeItems: "center",
			width: "100%",
		})}
		>
			<Hero />
		</section>
	);
}

import { css } from "styled-system/css";
import { Hero } from "./features/Hero";

function Root() {
	return (
		<main className={css({
			width: "100%",
			height: "100svh",
			display: "grid",
			placeItems: "center",
		})}
		>
			<Hero />
		</main>
	);
}

export default Root;

import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { css } from "styled-system/css";
import { PageHeading } from "~/components/Heading";
import { useScramble } from "~/hooks/useScramble";

function HeroText(): ReactNode {
	const [index, setIndex] = useState(0);

	const loopRef = useRef<number>();

	const texts = [
		"Rintaro Itokawa",
		"狂創",
		"re-taro",
		"狂創",
	];

	const { ref: headingRef } = useScramble({
		text: texts[index],
		onAnimationStart: () => {
			clearInterval(loopRef.current);
		},
		onAnimationEnd: () => {
			clearInterval(loopRef.current);
			loopRef.current = window.setTimeout(() => {
				setIndex(index => (index < texts.length - 1 ? index + 1 : 0));
			}, index === 1 || index === 3 ? 100 : 3000);
		},
	});

	return <PageHeading bold aria-label={texts[index]} ref={headingRef} />;
}

export function Hero(): ReactNode {
	const { ref: linkRef1, replay: linkReplay1 } = useScramble({ text: "About", scramble: 8, playOnMount: false });
	const { ref: linkRef2, replay: linkReplay2 } = useScramble({ text: "Timeline", scramble: 10, playOnMount: false });
	const { ref: linkRef3, replay: linkReplay3 } = useScramble({ text: "Works", scramble: 8, playOnMount: false });

	return (
		<div className={css({
			display: "grid",
			gap: "1.5rem",
			gridTemplateColumns: "1fr auto 7.5rem",
			alignItems: "center",
		})}
		>
			<div className={css({
				display: "grid",
				gridTemplateRows: "auto 3.75rem auto",
				gap: ".5rem",
				textAlign: "center",
			})}
			>
				<img
					decoding="async"
					loading="eager"
					src="/images/rintaro.avif"
					alt="Rintaro Itokawa's profile image"
					width={240}
					height={240}
					className={css({
						margin: { base: 0, md: "0 5rem" },
						aspectRatio: "1 / 1",
						borderRadius: "50%",
						width: { base: "10rem", md: "15rem" },
						height: { base: "10rem", md: "15rem" },
					})}
				/>
				<HeroText />
				<p className={css({
					color: "text.secondary",
					fontSize: "xl",
					fontWeight: "normal",
					lineHeight: "normal",
				})}
				>
					Web Developer
				</p>
			</div>
			<hr className={css({
				margin: 0,
				width: "1px",
				height: "20rem",
				border: "none",
				backgroundColor: "bg.teriary",
			})}
			/>
			<nav>
				<ul className={
					css({
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						textAlign: "center",
						color: "text.secondary",
						fontSize: "xl",
						fontWeight: "normal",
						lineHeight: "normal",
					})
				}
				>
					<li onMouseOver={() => {
						linkReplay1();
					}}
					>
						<Link ref={linkRef1} to="/about" prefetch="intent">About</Link>
					</li>
					<li onMouseOver={() => {
						linkReplay2();
					}}
					>
						<Link ref={linkRef2} to="/timeline" prefetch="intent">Timeline</Link>
					</li>
					<li onMouseOver={() => {
						linkReplay3();
					}}
					>
						<Link ref={linkRef3} to="/works" prefetch="intent">Works</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

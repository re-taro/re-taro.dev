import { Link } from "@remix-run/react";
import type { ReactElement, ReactNode } from "react";
import { CiViewTimeline } from "react-icons/ci";
import { RiAccountCircleLine, RiGithubLine, RiLightbulbLine, RiTwitterXLine } from "react-icons/ri";
import { css } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";
import { useScramble } from "~/hooks/useScramble";

function ListItem({ to, text, icon }: { to: string; text: string; icon: ReactElement }): ReactNode {
	return (
		<li>
			<Link
				className={css({
					display: { base: "none", md: "inline" },

					_hover: {
						opacity: 1,
					},
					_focusVisible: {
						opacity: 1,
					},
				})}
				to={to}
				prefetch="intent"
				title={text}
			>
				{text}
			</Link>
			<Link
				className={css({
					display: { base: "inline", md: "none" },

					_hover: {
						opacity: 1,
					},
					_focusVisible: {
						opacity: 1,
					},
				})}
				to={to}
				prefetch="intent"
				title={text}
			>
				{icon}
			</Link>
		</li>
	);
}

interface Props {
	css?: SystemStyleObject;
}

export function Header({ css: cssStyle }: Props): ReactNode {
	const { ref, replay } = useScramble({ text: "re-taro", scramble: 8 });

	return (
		<header className={css({
			position: "fixed",
			top: 0,
			insetInline: 0,
			display: "flex",
			alignItems: "center",
			width: "100%",
			paddingInline: "1rem",
			backgroundColor: "bg.main",
			zIndex: 100,
		}, cssStyle)}
		>
			<Link
				className={css({
					color: "text.main",
					fontSize: "xl",
					fontWeight: "bold",
					lineHeight: "none",
					marginRight: "auto",
				})}
				to="/"
				ref={ref}
				onMouseOver={() => { replay(); }}
				title="Rintaro Itokawa @re-taro"
			/>
			<nav>
				<ul className={css({
					"display": "flex",
					"gap": "1.2rem",
					"alignItems": "center",
					"color": "text.main",
					"fontSize": "m",
					"fontWeight": "normal",
					"lineHeight": "tight",

					"& > li > a": {
						opacity: 0.6,
						transition: "opacity 0.2s ease",
					},
				})}
				>
					<ListItem to="/about" text="About" icon={<RiAccountCircleLine />} />
					<ListItem to="/timeline" text="Timeline" icon={<CiViewTimeline />} />
					<ListItem to="/works" text="Works" icon={<RiLightbulbLine />} />
					<li className={css({
						display: { base: "none", md: "inline" },
					})}
					>
						<a
							className={css({
								_hover: {
									opacity: 1,
								},
								_focusVisible: {
									opacity: 1,
								},
							})}
							href="https://x.com/re_taro_"
							rel="noreferrer"
							target="_blank"
							title="Twitter"
						>
							<RiTwitterXLine />
						</a>
					</li>
					<li className={css({
						display: { base: "none", md: "inline" },
					})}
					>
						<a
							className={css({
								_hover: {
									opacity: 1,
								},
								_focusVisible: {
									opacity: 1,
								},
							})}
							href="https://github.com/re-taro"
							rel="noreferrer"
							target="_blank"
							title="GitHub"
						>
							<RiGithubLine />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

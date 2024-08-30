import { Link } from "@remix-run/react";
import type { ReactElement, ReactNode } from "react";
import { css } from "styled-system/css";
import type { SystemStyleObject } from "styled-system/types";
import ViewTimeline from "~icons/circum/view-timeline";
import AccountCircleLine from "~icons/ri/account-circle-line";
import LightbulbLine from "~icons/ri/lightbulb-line";
import TwitterXLine from "~icons/ri/twitter-x-line";
import GithubLine from "~icons/ri/github-line";
import FaSolidBlog from "~icons/fa-solid/blog";
import { useScramble } from "~/hooks/useScramble";

function ListItem({ icon, text, to }: { icon: ReactElement; text: string; to: string }): ReactNode {
	return (
		<li>
			<Link
				className={css({
					_focusVisible: {
						opacity: 1,
					},

					_hover: {
						opacity: 1,
					},
					display: { base: "none", md: "inline" },
				})}
				prefetch="intent"
				title={text}
				to={to}
			>
				{text}
			</Link>
			<Link
				className={css({
					_focusVisible: {
						opacity: 1,
					},

					_hover: {
						opacity: 1,
					},
					display: { base: "inline", md: "none" },
				})}
				prefetch="intent"
				title={text}
				to={to}
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
	const { ref, replay } = useScramble({ scramble: 8, text: "re-taro" });

	return (
		<header
			className={css({
				alignItems: "center",
				backgroundColor: "bg.main",
				display: "flex",
				insetInline: 0,
				paddingInline: "1rem",
				position: "fixed",
				top: 0,
				width: "100%",
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
				onMouseOver={() => { replay(); }}
				ref={ref}
				title="Rintaro Itokawa @re-taro"
				to="/"
			/>
			<nav>
				<ul
					className={css({
						"& > li > a": {
							opacity: 0.6,
							transition: "opacity 0.2s ease",
						},
						"alignItems": "center",
						"color": "text.main",
						"display": "flex",
						"fontSize": "m",
						"fontWeight": "normal",
						"gap": "1.2rem",

						"lineHeight": "tight",
					})}
				>
					<ListItem icon={<AccountCircleLine />} text="About" to="/about" />
					<ListItem icon={<ViewTimeline />} text="Timeline" to="/timeline" />
					<ListItem icon={<LightbulbLine />} text="Works" to="/works" />
					<li
						className={css({
							display: { base: "none", md: "inline" },
						})}
					>
						<a
							className={css({
								_focusVisible: {
									opacity: 1,
								},
								_hover: {
									opacity: 1,
								},
							})}
							href="https://x.com/re_taro_"
							rel="noreferrer"
							target="_blank"
							title="Twitter"
						>
							<TwitterXLine />
						</a>
					</li>
					<li
						className={css({
							display: { base: "none", md: "inline" },
						})}
					>
						<a
							className={css({
								_focusVisible: {
									opacity: 1,
								},
								_hover: {
									opacity: 1,
								},
							})}
							href="https://blog.re-taro.dev/"
							rel="noreferrer"
							target="_blank"
							title="Blog"
						>
							<FaSolidBlog />
						</a>
					</li>
					<li
						className={css({
							display: { base: "none", md: "inline" },
						})}
					>
						<a
							className={css({
								_focusVisible: {
									opacity: 1,
								},
								_hover: {
									opacity: 1,
								},
							})}
							href="https://github.com/re-taro"
							rel="noreferrer"
							target="_blank"
							title="GitHub"
						>
							<GithubLine />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

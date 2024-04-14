import { Link, Outlet, useLocation } from "@remix-run/react";
import type { ReactNode } from "react";
import { css } from "styled-system/css";

export default function WithCdLayout(): ReactNode {
	const { pathname } = useLocation();

	return (
		<>
			<Outlet />
			<div className={(css({
				margin: "2rem auto 0",
				maxWidth: "50rem",
				width: "100%",
				color: "text.secondary",
			}))}
			>
				<span className={css({
					marginRight: "0.5rem",
				})}
				>
					&gt;
				</span>
				<Link
					className={css({
						opacity: 0.6,
						color: "text.main",
						transition: "opacity 0.3s ease-in",

						_hover: {
							opacity: 1,
						},

						_focusVisible: {
							opacity: 1,
						},

					})}
					to={pathname.split("/").slice(0, -1).join("/") || "/"}
				>
					cd ..
				</Link>
			</div>
		</>
	);
}

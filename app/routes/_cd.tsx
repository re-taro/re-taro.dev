import { Link, Outlet, useLocation } from "@remix-run/react";
import type { ReactNode } from "react";
import { css } from "styled-system/css";

export default function WithCdLayout(): ReactNode {
	const { pathname } = useLocation();

	return (
		<>
			<Outlet />
			<div className={(css({
				color: "text.secondary",
				margin: "[2rem auto 0]",
				maxWidth: "[50rem]",
				width: "[100%]",
			}))}
			>
				<span className={css({
					marginRight: "[0.5rem]",
				})}
				>
					&gt;
				</span>
				<Link
					className={css({
						_focusVisible: {
							opacity: 1,
						},
						_hover: {
							opacity: 1,
						},
						color: "text.main",

						opacity: 0.6,

						transition: "[opacity 0.3s ease-in]",

					})}
					to={pathname.split("/").slice(0, -1).join("/") || "/"}
				>
					cd ..
				</Link>
			</div>
		</>
	);
}

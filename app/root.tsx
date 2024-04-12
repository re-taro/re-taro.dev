import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { css } from "styled-system/css";
import styles from "./index.css?url";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

interface Props {
	title?: string;
	noIndex?: boolean;
	children: ReactNode;
}

function Document({ title, noIndex, children }: Props): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width" />
				<meta
					name="description"
					content="Rintaro Itokawa(re-taro)のポートフォリオです。"
				/>
				<meta property="og:title" content="Rintaro Itokawa - Web Developer" />
				<meta
					property="og:description"
					content="Rintaro Itokawa(re-taro)のポートフォリオです。"
				/>
				<meta property="og:url" content="https://re-taro.dev" />
				<meta property="og:image" content="https://og.re-taro.dev?title=Rintaro+Itokawa&text=re-taro.dev" />
				<meta property="og:type" content="website" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:title"
					content="Rintaro Itokawa - Web Developer"
				/>
				<meta
					property="twitter:description"
					content="Rintaro Itokawa(re-taro)のポートフォリオです。"
				/>
				<meta property="twitter:image" content="https://og.re-taro.dev?title=Rintaro+Itokawa&text=re-taro.dev" />
				<meta property="twitter:site" content="@re_taro_" />
				{noIndex && <meta name="robots" content="noindex" />}
				<Meta />
				<Links />
				{title ? <title data-title-override="">{title}</title> : <title>Rintaro Itokawa - Web Developer</title>}
			</head>
			<body className={css({
				display: "grid",
				gridTemplateRows: "auto 1fr auto",
				gridTemplateAreas: `"header" "main" "footer"`,
				minHeight: "100lvh",
			})}
			>
				<Header css={css.raw({ gridArea: "header" })} />
				<div className={css({ gridArea: "main" })}>
					{children}
				</div>
				<Footer	css={css.raw({ gridArea: "footer" })} />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

function App(): ReactNode {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
	{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+JP:wght@400;600&display=swap" },
	{ rel: "stylesheet", href: styles },
	{ rel: "icon", href: "/favicon.ico", sizes: "any" },
	{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
];

export function ErrorBoundary() {
	const error = useRouteError();
	if (!(typeof window !== "undefined"
		&& window.document
		&& window.document.createElement))
		console.error(error);

	if (isRouteErrorResponse(error)) {
		return (
			<Document
				noIndex
				title={error.statusText}
			>
				<main
					className={css({
						width: "100%",
						height: "100svh",
						display: "grid",
						placeItems: "center",
						color: "text.main",
					})}
				>
					<div
						className={css({
							textAlign: "center",
							lineHeight: "none",
						})}
					>
						<h1
							className={css({
								fontSize: "4xl",
							})}
						>
							{error.status}
						</h1>
						<a
							className={css({
								display: "inline-block",
								fontSize: "xl",
								textDecoration: "underline",
							})}
							href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error.status}`}
							rel="noreferrer"
							target="_blank"
						>
							{error.statusText}
						</a>
					</div>
				</main>
			</Document>
		);
	}

	return (
		<Document noIndex title="Error">
			<main
				className={css({
					width: "100%",
					height: "100svh",
					display: "grid",
					placeItems: "center",
					color: "text.main",
				})}
			>
				<div className={css({
					textAlign: "center",
					lineHeight: "none",
				})}
				>
					<h1 className={css({
						fontSize: "4xl",
					})}
					>
						Error
					</h1>
					<p
						className={css({
							fontSize: "xl",
						})}
					>
						Something went wrong! Please try again later.
					</p>
				</div>
			</main>
		</Document>
	);
}

export default App;

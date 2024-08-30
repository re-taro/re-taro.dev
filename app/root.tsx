import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import type { ReactNode } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { css } from "styled-system/css";
import styles from "./index.css?url";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

interface Props {
	children: ReactNode;
	noIndex?: boolean;
	title?: string;
}

function Document({ children, noIndex, title }: Props): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				{noIndex && <meta content="noindex" name="robots" />}
				<Meta />
				<Links />
				{title ? <title data-title-override="">{title}</title> : <title>Rintaro Itokawa - Web Developer</title>}
			</head>
			<body className={css({
				display: "grid",
				gridTemplateAreas: `"header" "main" "footer"`,
				gridTemplateRows: "auto 1fr auto",
				minHeight: "100lvh",
			})}
			>
				<Header css={css.raw({ gridArea: "header" })} />
				<main className={css({ gridArea: "main", padding: "0 1rem" })}>
					{children}
				</main>
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

export const links: LinksFunction = () => [
	{ href: "https://fonts.googleapis.com", rel: "preconnect" },
	{ crossOrigin: "anonymous", href: "https://fonts.gstatic.com", rel: "preconnect" },
	{ href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+JP:wght@400;600&display=swap", rel: "stylesheet" },
	{ href: styles, rel: "stylesheet" },
	{ href: "/favicon.ico", rel: "icon", sizes: "any" },
	{ href: "/favicon.svg", rel: "icon", type: "image/svg+xml" },
];

export const meta: MetaFunction = () => [
	{ charSet: "utf-8" },
	{ content: "width=device-width, initial-scale=1", name: "viewport" },
	{ content: "Rintaro Itokawa (re-taro) のポートフォリオです。", name: "description" },
	{ content: "Rintaro Itokawa - Web Developer", name: "og:title" },
	{ content: "Rintaro Itokawa (re-taro) のポートフォリオです。", name: "og:description" },
	{ content: "https://re-taro.dev", name: "og:url" },
	{ content: "https://og.re-taro.dev?title=Rintaro+Itokawa&text=re-taro.dev", name: "og:image" },
	{ content: "website", name: "og:type" },
	{ content: "summary_large_image", name: "twitter:card" },
	{ content: "Rintaro Itokawa - Web Developer", name: "twitter:title" },
	{ content: "Rintaro Itokawa (re-taro) のポートフォリオです。", name: "twitter:description" },
	{ content: "https://og.re-taro.dev?title=Rintaro+Itokawa&text=re-taro.dev", name: "twitter:image" },
	{ content: "@re_taro_", name: "twitter:site" },
];

export function ErrorBoundary() {
	const error = useRouteError();
	if (!(typeof window !== "undefined"
		&& window.document
		&& window.document.createElement)) {
		console.error(error);
	}

	if (isRouteErrorResponse(error)) {
		return (
			<Document
				noIndex
				title={error.statusText}
			>
				<main
					className={css({
						color: "text.main",
						display: "grid",
						height: "100svh",
						placeItems: "center",
						width: "100%",
					})}
				>
					<div
						className={css({
							lineHeight: "none",
							textAlign: "center",
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
					color: "text.main",
					display: "grid",
					height: "100svh",
					placeItems: "center",
					width: "100%",
				})}
			>
				<div className={css({
					lineHeight: "none",
					textAlign: "center",
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

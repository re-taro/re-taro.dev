import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./index.css?url";

function App(): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+JP:wght@400;600&display=swap"
					rel="stylesheet"
				/>
				<title>Rintaro Itokawa - Web Developer</title>
				<meta
					name="description"
					content="Rintaro Itokawa(re-taro)のポートフォリオです。"
				/>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
];

export default App;

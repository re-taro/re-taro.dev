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

import "./styles/globals.css";

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400..600&family=Noto+Sans+JP:wght@400..600&display=swap"
					rel="stylesheet"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

const App = () => <Outlet />;

export default App;

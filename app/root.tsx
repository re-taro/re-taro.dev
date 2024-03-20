import "./styles/globals.css";

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
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

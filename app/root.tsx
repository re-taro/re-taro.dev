import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from '@remix-run/react';
import type { ReactNode } from 'react';
import type { MetaFunction } from '@remix-run/cloudflare';
import { css } from 'styled-system/css';
import styles from './index.css?url';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

interface Props {
	children: ReactNode;
}

export function Layout({ children }: Props): ReactNode {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href={styles} rel="stylesheet" />
				<link href="/favicon.ico" rel="icon" sizes="any" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
				<Meta />
				<Links />
				<title>re-taro</title>
			</head>
			<body
				className={css({
					display: 'grid',
					gridTemplateAreas: `"header" "main" "footer"`,
					gridTemplateRows: 'auto 1fr auto',
					minHeight: '[100lvh]',
				})}>
				<Header css={css.raw({ gridArea: 'header' })} />
				<main className={css({ gridArea: 'main', padding: '0 1rem' })}>{children}</main>
				<Footer css={css.raw({ gridArea: 'footer' })} />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

function App(): ReactNode {
	return <Outlet />;
}

export const meta: MetaFunction = () => [
	{ content: 'Rintaro Itokawa (re-taro) のポートフォリオです。', name: 'description' },
	{ name: 'og:title', property: 'Rintaro Itokawa - Web Developer' },
	{ name: 'og:description', property: 'Rintaro Itokawa (re-taro) のポートフォリオです。' },
	{ name: 'og:url', property: 'https://re-taro.dev' },
	{ name: 'og:image', property: 'https://og.re-taro.dev?title=Rintaro+Itokawa&tmp=color&text=re-taro.dev' },
	{ name: 'og:type', property: 'website' },
	{ content: 'summary_large_image', name: 'twitter:card' },
	{ content: 'Rintaro Itokawa - Web Developer', name: 'twitter:title' },
	{ content: 'Rintaro Itokawa (re-taro) のポートフォリオです。', name: 'twitter:description' },
	{ content: 'https://og.re-taro.dev?title=Rintaro+Itokawa&tmp=color&text=re-taro.dev', name: 'twitter:image' },
	{ content: '@re_taro_', name: 'twitter:site' },
	{ content: '@re_taro_', name: 'twitter:creator' },
];

export function ErrorBoundary() {
	const error = useRouteError();
	if (!(typeof window !== 'undefined' && window.document && window.document.createElement)) {
		console.error(error);
	}

	if (isRouteErrorResponse(error)) {
		return (
			<main
				className={css({
					color: 'text.main',
					display: 'grid',
					height: '[100svh]',
					placeItems: 'center',
					width: '[100%]',
				})}>
				<div
					className={css({
						lineHeight: 'none',
						textAlign: 'center',
					})}>
					<h1
						className={css({
							fontSize: '4xl',
						})}>
						{error.status}
					</h1>
					<a
						className={css({
							display: 'inline-block',
							fontSize: 'xl',
							textDecoration: 'underline',
						})}
						href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error.status}`}
						rel="noreferrer"
						target="_blank">
						{error.statusText}
					</a>
				</div>
			</main>
		);
	}

	return (
		<main
			className={css({
				color: 'text.main',
				display: 'grid',
				height: '[100svh]',
				placeItems: 'center',
				width: '[100%]',
			})}>
			<div
				className={css({
					lineHeight: 'none',
					textAlign: 'center',
				})}>
				<h1
					className={css({
						fontSize: '4xl',
					})}>
					Error
				</h1>
				<p
					className={css({
						fontSize: 'xl',
					})}>
					Something went wrong! Please try again later.
				</p>
			</div>
		</main>
	);
}

export default App;

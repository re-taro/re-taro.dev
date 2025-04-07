import { Link, Outlet, useLocation } from '@remix-run/react';
import { css } from 'styled-system/css';
import type { ReactNode } from 'react';

export default function WithCdLayout(): ReactNode {
	const { pathname } = useLocation();

	return (
		<>
			<div
				className={css({
					boxSizing: 'border-box',
					display: 'flex',
					flexDirection: 'column',
					margin: '[5rem auto 0]',
					maxWidth: '[62.5rem]',
					rowGap: '2rem',
					width: '[100%]',
				})}>
				<Outlet />
			</div>
			<div
				className={css({
					color: 'text.secondary',
					margin: '[2rem auto 0]',
					maxWidth: '[62.5rem]',
					width: '[100%]',
				})}>
				<span
					className={css({
						marginRight: '[0.5rem]',
					})}>
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
						color: 'text.main',

						opacity: 0.6,

						transition: '[opacity 0.3s ease-in]',
					})}
					to={pathname.split('/').slice(0, -1).join('/') || '/'}>
					cd ..
				</Link>
			</div>
		</>
	);
}

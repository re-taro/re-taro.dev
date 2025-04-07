import { css } from 'styled-system/css';
import { Hero } from './features/Hero';
import type { FC } from 'react';

const Page: FC = () => {
	return (
		<section
			className={css({
				display: 'grid',
				height: '[100svh]',
				placeItems: 'center',
				width: '[100%]',
			})}>
			<Hero />
		</section>
	);
};

export default Page;

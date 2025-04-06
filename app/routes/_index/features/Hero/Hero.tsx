import { Link } from '@remix-run/react';
import type { ReactNode } from 'react';
import { Suspense, useRef, useState } from 'react';
import { css } from 'styled-system/css';
import { PageHeading } from '~/components/Heading';
import { useScramble } from '~/hooks/useScramble';

function HeroText(): ReactNode {
	const [index, setIndex] = useState(0);

	const loopRef = useRef<number>();

	const texts = ['Rintaro Itokawa', '狂創', 're-taro'];

	const { ref: headingRef } = useScramble({
		onAnimationEnd: () => {
			clearInterval(loopRef.current);
			loopRef.current = window.setTimeout(
				() => {
					setIndex((index) => (index < texts.length - 1 ? index + 1 : 0));
				},
				index === 1 ? 100 : 3000,
			);
		},
		onAnimationStart: () => {
			clearInterval(loopRef.current);
		},
		text: texts[index],
	});

	return <PageHeading bold aria-label={texts[index]} ref={headingRef} />;
}

export function Hero(): ReactNode {
	const { ref: linkRef1, replay: linkReplay1 } = useScramble({ playOnMount: false, scramble: 8, text: 'About' });
	const { ref: linkRef2, replay: linkReplay2 } = useScramble({ playOnMount: false, scramble: 10, text: 'Timeline' });
	const { ref: linkRef3, replay: linkReplay3 } = useScramble({ playOnMount: false, scramble: 8, text: 'Works' });

	return (
		<div
			className={css({
				display: 'grid',
				gap: '1.5rem',
				gridTemplateColumns: { base: '1fr', md: '1fr auto 8rem' },
				gridTemplateRows: { base: '1fr auto auto', md: '1fr' },
				placeItems: 'center',
			})}>
			<div
				className={css({
					display: 'grid',
					gap: '.5rem',
					gridTemplateRows: { base: 'auto 2.5rem auto', md: 'auto 3.75rem auto' },
					textAlign: 'center',
				})}>
				<img
					className={css({
						aspectRatio: '1 / 1',
						borderRadius: '50%',
						height: { base: '[10rem]', md: '[15rem]' },
						margin: { base: '[0 3.5rem]', md: '[0 5rem]' },
						width: { base: '[10rem]', md: '[15rem]' },
					})}
					alt="Rintaro Itokawa's profile image"
					fetchPriority="high"
					height={240}
					loading="eager"
					sizes={['(max-width: 768px) 160px', '240px'].join(', ')}
					src="/images/rintaro@240w.avif"
					srcSet={['/images/rintaro@160w.avif 160w', '/images/rintaro@240w.avif 240w'].join(', ')}
					width={240}
				/>
				<Suspense fallback={<PageHeading bold>Rintaro Itokawa</PageHeading>}>
					<HeroText />
				</Suspense>
				<p
					className={css({
						color: 'text.secondary',
						fontSize: 'xl',
						fontWeight: 'normal',
						lineHeight: 'normal',
					})}>
					Web Developer
				</p>
			</div>
			<hr
				className={css({
					backgroundColor: 'bg.teriary',
					border: 'none',
					height: { base: '[1px]', md: '[20rem]' },
					margin: '[0]',
					width: { base: '[80%]', md: '[1px]' },
				})}
			/>
			<ul
				className={css({
					color: 'text.secondary',
					display: 'flex',
					flexDirection: 'column',
					fontSize: 'xl',
					fontWeight: 'normal',
					gap: '1rem',
					lineHeight: 'normal',
					textAlign: 'center',
				})}>
				<li
					className={css({
						height: '[2.25rem]',
					})}
					onMouseOver={() => {
						linkReplay1();
					}}>
					<Link prefetch="intent" ref={linkRef1} title="About" to="/about" />
				</li>
				<li
					className={css({
						height: '[2.25rem]',
					})}
					onMouseOver={() => {
						linkReplay2();
					}}>
					<Link prefetch="intent" ref={linkRef2} title="Timeline" to="/timeline" />
				</li>
				<li
					className={css({
						height: '[2.25rem]',
					})}
					onMouseOver={() => {
						linkReplay3();
					}}>
					<Link prefetch="intent" ref={linkRef3} title="Works" to="/works" />
				</li>
			</ul>
		</div>
	);
}

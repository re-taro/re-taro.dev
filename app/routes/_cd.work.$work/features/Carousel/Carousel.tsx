import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
import { css } from 'styled-system/css';
import { CarouselDotButton, useDotButton } from '../CarouselDotButton';
import type { Work } from 'content-collections';
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import type { FC } from 'react';

const TWEEN_FACTOR_BASE = 0.84;
const SLIDE_SPACING = '1rem';
const SLIDE_SIZE = '80%';

interface Props {
	images: Exclude<Work['images'], undefined>;
}

export const Carousel: FC<Props> = ({ images }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
		},
		[Autoplay({ delay: 5000, playOnInit: true })],
	);
	const tweenFactor = useRef(0);
	const { onDotButtonClick, scrollSnaps, selectedIndex } = useDotButton(emblaApi);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);
	const tweenOpacity = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();
		const slidesInView = emblaApi.slidesInView();
		const isScrollEvent = eventName === 'scroll';

		for (const [snapIndex, scrollSnap] of emblaApi.scrollSnapList().entries()) {
			let diffToTarget = scrollSnap - scrollProgress;
			const slidesInSnap = engine.slideRegistry[snapIndex];

			for (const slideIndex of slidesInSnap) {
				if (isScrollEvent && !slidesInView.includes(slideIndex)) continue;

				if (engine.options.loop) {
					for (const loopItem of engine.slideLooper.loopPoints) {
						const target = loopItem.target();

						if (slideIndex === loopItem.index && target !== 0) {
							const sign = Math.sign(target);

							if (sign === -1) {
								diffToTarget = scrollSnap - (1 + scrollProgress);
							}
							if (sign === 1) {
								diffToTarget = scrollSnap + (1 - scrollProgress);
							}
						}
					}
				}

				const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
				const opacity = numberWithinRange(tweenValue, 0, 1).toString();
				emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
			}
		}
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenFactor(emblaApi);
		tweenOpacity(emblaApi);
		emblaApi
			.on('reInit', setTweenFactor)
			.on('reInit', tweenOpacity)
			.on('scroll', tweenOpacity)
			.on('slideFocus', tweenOpacity);

		return () => {
			emblaApi
				.off('reInit', setTweenFactor)
				.off('reInit', tweenOpacity)
				.off('scroll', tweenOpacity)
				.off('slideFocus', tweenOpacity);
		};
	}, [emblaApi, tweenOpacity, setTweenFactor]);

	return (
		<section
			className={css({
				maxWidth: '[62.5rem]',
			})}>
			<div
				className={css({
					overflow: 'hidden',
				})}
				ref={emblaRef}>
				<div
					className={css({
						display: 'flex',
						marginLeft: `[calc(${SLIDE_SPACING} * -1)]`,
						touchAction: '[pan-y pinch-zoom]',
					})}>
					{images.map((image) => {
						return (
							<div
								className={css({
									display: 'flex',
									flex: `[0 0 ${SLIDE_SIZE}]`,
									flexDirection: 'column',
									justifyContent: 'center',
									minWidth: '[0]',
									paddingLeft: SLIDE_SPACING,
									transform: 'translate3d(0, 0, 0)',
								})}
								key={image.alt}>
								<img
									className={css({
										aspectRatio: '16 / 9',
										height: 'auto',
										objectFit: 'contain',
										width: '[100%]',
									})}
									alt={image.alt}
									height={450}
									loading="lazy"
									src={`https://img.re-taro.dev?url=${image.src}&w=800`}
									width={800}
								/>
								<span
									className={css({
										color: 'text.secondary',
										fontSize: 's',
										textAlign: 'center',
									})}>
									{image.alt}
								</span>
							</div>
						);
					})}
				</div>
			</div>
			<div
				className={css({
					alignItems: 'center',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
				})}>
				{scrollSnaps.map((snap, idx) => (
					<CarouselDotButton
						index={idx}
						isSelected={idx === selectedIndex}
						key={snap}
						onClick={() => {
							onDotButtonClick(idx);
						}}
					/>
				))}
			</div>
		</section>
	);
};

const numberWithinRange = (number: number, min: number, max: number): number => {
	return Math.min(Math.max(number, min), max);
};

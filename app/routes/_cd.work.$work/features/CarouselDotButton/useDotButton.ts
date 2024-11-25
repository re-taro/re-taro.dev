import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

interface UseDotButtonType {
	onDotButtonClick: (index: number) => void;
	scrollSnaps: number[];
	selectedIndex: number;
};

export function useDotButton(emblaApi: EmblaCarouselType | undefined, onButtonClick?: (emblaApi: EmblaCarouselType) => void): UseDotButtonType {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const onDotButtonClick = useCallback(
		(index: number) => {
			if (!emblaApi)
				return;
			emblaApi.scrollTo(index);
			if (onButtonClick)
				onButtonClick(emblaApi);
		},
		[emblaApi, onButtonClick],
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi)
			return;

		onInit(emblaApi);
		onSelect(emblaApi);

		emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);

		return () => {
			emblaApi.off("reInit", onInit).off("reInit", onSelect).off("select", onSelect);
		};
	}, [emblaApi, onInit, onSelect]);

	return {
		onDotButtonClick,
		scrollSnaps,
		selectedIndex,
	};
}

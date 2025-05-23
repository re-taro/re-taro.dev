/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomChar = (range: RangeOrCharCodes) => {
	let rand = 0;
	rand = range.length === 2 ? getRandomInt(range[0], range[1]) : range[getRandomInt(0, range.length - 1)];

	return String.fromCodePoint(rand);
};

type RangeOrCharCodes = number[] & {
	0: number;
	1: number;
};

interface UseScrambleProps {
	chance?: number;
	ignore?: string[];
	onAnimationEnd?: () => void;
	onAnimationFrame?: (result: string) => void;
	onAnimationStart?: () => void;
	overdrive?: boolean | number;
	overflow?: boolean;
	playOnMount?: boolean;
	range?: RangeOrCharCodes;
	scramble?: number;
	seed?: number;
	speed?: number;
	step?: number;
	text?: string;
	tick?: number;
}

export const useScramble = ({
	chance = 1,
	ignore = [' '],
	onAnimationEnd,
	onAnimationFrame,
	onAnimationStart,
	overdrive = true,
	overflow = true,
	playOnMount = true,
	range = [65, 125],
	scramble = 1,
	seed = 1,
	speed = 1,
	step = 1,
	text = '',
	tick = 1,
	// eslint-disable-next-line ts/no-explicit-any
}: UseScrambleProps): { ref: RefObject<any>; replay: () => void } => {
	const prefersReducedMotion =
		// eslint-disable-next-line unicorn/prefer-global-this
		typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

	if (prefersReducedMotion) {
		step = text.length;
		chance = 0;
		overdrive = false;
	}

	// text node ref
	// eslint-disable-next-line ts/no-explicit-any
	const nodeRef = useRef<any>(null);

	// animation frame request
	const rafRef = useRef<number>(0);

	// compute
	const elapsedRef = useRef(0);
	const fpsInterval = 1000 / (60 * speed);

	// scramble step
	const stepRef = useRef<number>(0);

	// current character index ref
	const scrambleIndexRef = useRef<number>(0);

	// scramble controller
	const controlRef = useRef<(number | string | null)[]>([]);

	// overdrive control index
	const overdriveRef = useRef<number>(0);

	const setIfNotIgnored = (value: number | string | null, replace: number | string | null) =>
		ignore.includes(`${value}`) ? value : replace;

	// pick random character ahead in the string, and add them to the randomizer
	const seedForward = () => {
		if (scrambleIndexRef.current === text.length) return;

		for (let i = 0; i < seed; i++) {
			const index = getRandomInt(scrambleIndexRef.current, controlRef.current.length);
			if (typeof controlRef.current[index] !== 'number' && controlRef.current[index] != null) {
				controlRef.current[index] = setIfNotIgnored(
					controlRef.current[index],
					getRandomInt(0, 10) >= (1 - chance) * 10 ? scramble || seed : 0,
				);
			}
		}
	};

	// add `step` characters to the randomizer, and increase the scrambleIndexRef pointer
	const stepForward = () => {
		for (let i = 0; i < step; i++) {
			if (scrambleIndexRef.current < text.length) {
				const currentIndex = scrambleIndexRef.current;

				const shouldScramble = getRandomInt(0, 10) >= (1 - chance) * 10;

				controlRef.current[currentIndex] = setIfNotIgnored(
					text[scrambleIndexRef.current],
					shouldScramble ? scramble + getRandomInt(0, Math.ceil(scramble / 2)) : 0,
				);
				scrambleIndexRef.current++;
			}
		}
	};

	const resizeControl = () => {
		if (text.length < controlRef.current.length) {
			controlRef.current.pop();
			controlRef.current.splice(text.length, step);
		}
		for (let i = 0; i < step; i++) {
			if (controlRef.current.length < text.length) {
				controlRef.current.push(setIfNotIgnored(text[controlRef.current.length + 1], null));
			}
		}
	};

	const onOverdrive = () => {
		if (!overdrive) return;

		for (let i = 0; i < step; i++) {
			const max = Math.max(controlRef.current.length, text.length);
			if (overdriveRef.current < max) {
				controlRef.current[overdriveRef.current] = setIfNotIgnored(
					text[overdriveRef.current],
					String.fromCodePoint(typeof overdrive === 'boolean' ? 95 : overdrive),
				);
				overdriveRef.current++;
			}
		}
	};

	const onTick = () => {
		stepForward();
		resizeControl();
		seedForward();
	};

	/**
	 * Redraw text on every animation frame
	 */
	// eslint-disable-next-line complexity
	const draw = () => {
		if (!nodeRef.current) return;

		let result = '';

		for (let i = 0; i < controlRef.current.length; i++) {
			const controlValue = controlRef.current[i];

			switch (true) {
				/**
				 * A positive integer value, get a random character
				 */
				case typeof controlValue === 'number' && controlValue > 0: {
					result += getRandomChar(range);

					if (i <= scrambleIndexRef.current) {
						// reduce scramble index only if it's past the scrambleIndexRef
						controlRef.current[i] = (controlRef.current[i] as number) - 1;
					}
					break;
				}

				/**
				 * A string from the previous text
				 */
				case typeof controlValue === 'string' && (i >= text.length || i >= scrambleIndexRef.current): {
					result += controlValue;
					break;
				}

				/**
				 * Before scramble index, and equal to the string
				 */
				case controlValue === text[i] && i < scrambleIndexRef.current: {
					result += text[i];
					break;
				}

				/**
				 * Scramble has finished
				 */
				case controlValue === 0 && i < text.length: {
					result += text[i];
					controlRef.current[i] = text[i];
					break;
				}

				default: {
					result = String(result);
				}
			}
		}

		// set text
		// eslint-disable-next-line ts/no-unsafe-member-access
		nodeRef.current.innerHTML = result;

		if (typeof onAnimationFrame === 'function') onAnimationFrame(result);

		/**
		 * Exit if the result is equal to the input
		 *
		 * - Trim control to text length
		 * - Fire onAnimationEnd
		 */
		if (result === text) {
			controlRef.current.splice(text.length, controlRef.current.length);
			if (typeof onAnimationEnd === 'function') onAnimationEnd();

			cancelAnimationFrame(rafRef.current);
		}

		stepRef.current++;
	};

	/**
	 * Control the animation framerate, from the speed prop
	 *
	 * If speed is 0, stop the animation
	 */
	const animate = (time: number) => {
		if (!speed) return;

		rafRef.current = requestAnimationFrame(animate);

		onOverdrive();

		const timeElapsed = time - elapsedRef.current;
		if (timeElapsed > fpsInterval) {
			elapsedRef.current = time;

			if (stepRef.current % tick === 0) onTick();

			draw();
		}
	};

	/**
	 * Reset scramble controls
	 *
	 * If overflow is true, overflow the control to the an empty array, the size of the text input. This will cause the
	 * animation to play from an empty string
	 */
	const reset = () => {
		stepRef.current = 0;
		scrambleIndexRef.current = 0;
		overdriveRef.current = 0;
		if (!overflow) controlRef.current = Array.from({ length: text.length });
	};

	/**
	 * Restarts the animation
	 *
	 * Cancels the current animation frame, resets the scramble index and other controls, and requests a new animation
	 */
	const play = () => {
		cancelAnimationFrame(rafRef.current);
		reset();
		if (typeof onAnimationStart === 'function') onAnimationStart();
		rafRef.current = requestAnimationFrame(animate);
	};

	/**
	 * Reset scramble when text input is changed
	 */
	useEffect(() => {
		reset();
	}, [text]);

	/**
	 * Start or stop animation when text and speed change
	 */
	useEffect(() => {
		cancelAnimationFrame(rafRef.current);

		rafRef.current = requestAnimationFrame(animate);

		// cancel raf on unmount
		return () => {
			cancelAnimationFrame(rafRef.current);
		};
	}, [animate]);

	useEffect(() => {
		if (!playOnMount) {
			// eslint-disable-next-line ts/no-misused-spread
			controlRef.current = [...text];
			stepRef.current = text.length;
			scrambleIndexRef.current = text.length;
			overdriveRef.current = text.length;
			draw();
			cancelAnimationFrame(rafRef.current);
		}
	}, []);

	return { ref: nodeRef, replay: play };
};

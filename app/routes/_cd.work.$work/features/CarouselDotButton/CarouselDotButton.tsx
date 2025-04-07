import { css, cx } from 'styled-system/css';
import type { ComponentPropsWithoutRef, FC } from 'react';

type Props = Pick<ComponentPropsWithoutRef<'button'>, 'onClick'> & {
	index: number;
	isSelected: boolean;
};

export const CarouselDotButton: FC<Props> = ({ index, isSelected, onClick }) => {
	return (
		<button
			className={cx(
				css({
					_after: {
						alignItems: 'center',
						borderRadius: '50%',
						boxShadow: 'inset 0 0 0 0.2rem {colors.text.main}',
						content: "''",
						display: 'flex',
						height: '[1.4rem]',
						width: '[1.4rem]',
					},
					alignItems: 'center',
					appearance: 'none',
					backgroundColor: '[transparent]',
					border: 0,
					borderRadius: '50%',
					cursor: 'pointer',
					display: 'flex',
					height: '[2.6rem]',
					justifyContent: 'center',
					margin: '[0]',
					padding: 0,
					textDecoration: 'none',
					touchAction: 'manipulation',
					width: '[2.6rem]',
				}),
				isSelected &&
					css({
						_after: {
							boxShadow: 'inset 0 0 0 0.2rem {colors.accent.main}',
						},
					}),
			)}
			aria-label={`写真 ${index + 1}`}
			onClick={onClick}
			type="button"
		/>
	);
};

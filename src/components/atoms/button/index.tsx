import type { CSSInterpolation } from '@emotion/serialize'
import { InlineIcon } from '@iconify/react'
import type { IconProps, IconifyIcon } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'
import { Text } from '../text'

const ButtonBox = tw.button`min-w-min min-h-full px-3 py-4 flex justify-center items-center rounded-md bg-snow-300 dark:bg-night-300 hover:bg-snow-200 dark:hover:bg-night-300 focus:outline-none focus:ring-2 focus:ring-frost-100 appearance-none select-none transition delay-150 ease-in-out`

type ButtonIconProperties = IconProps & {
  ref?: never
}

const ButtonIcon: React.FC<ButtonIconProperties> = ({ icon, css, ...rest }) => (
  <div css={[tw`flex items-center justify-center flex-shrink-0 w-4 h-4 min-h-full`, css]}>
    <InlineIcon
      icon={icon}
      css={tw`w-full h-full text-night-400 dark:text-snow-300 transition delay-150 ease-in-out`}
      {...rest}
    />
  </div>
)

type ButtonVariantProperties =
  | {
      variant: 'normal'
      leftIcon?: never
      rightIcon?: never
      onClose?: never
      iconStyles?: never
    }
  | {
      variant: 'icon'
      leftIcon: string | IconifyIcon
      rightIcon?: never
      onClose?: never
      iconStyles?: CSSInterpolation
    }
  | {
      variant: 'icon'
      leftIcon?: never
      rightIcon: IconifyIcon | string
      onClose?: never
      iconStyles?: CSSInterpolation
    }
  | {
      variant: 'close'
      leftIcon?: never
      rightIcon?: never
      onClose?: React.MouseEventHandler
      iconStyles?: never
    }

type ButtonProperties<T extends AnyComponent> = React.PropsWithChildren<
  PropertiesOf<T> &
    ButtonVariantProperties & {
      boxStyles?: CSSInterpolation
      textStyles?: CSSInterpolation
      ref?: never
      as?: T
    }
>

const Button = <T extends AnyComponent>({
  children,
  variant = 'normal',
  leftIcon,
  rightIcon,
  onClose,
  iconStyles,
  boxStyles,
  textStyles,
  ...rest
}: ButtonProperties<T>): JSX.Element => (
  <ButtonBox css={boxStyles} {...rest}>
    {leftIcon && <ButtonIcon icon={leftIcon} css={iconStyles} />}
    {children && <Text css={[tw`text-sm font-bold whitespace-nowrap`, textStyles]}>{children}</Text>}
    {rightIcon && <ButtonIcon icon={rightIcon} css={iconStyles} />}
    {variant === 'close' && <ButtonIcon icon={'mdi:close'} css={iconStyles} onClick={onClose} />}
  </ButtonBox>
)

export { Button }

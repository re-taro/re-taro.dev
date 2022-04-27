import { InlineIcon } from '@iconify/react'
import type { IconifyIcon, IconProps } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'

const LinkBox = tw.a`items-center justify-center flex-shrink-0 w-6 h-6 min-h-full`

export type LinkItems = {
  url: string
  icon: string | IconifyIcon
}

type LinkItemProperties = React.ComponentProps<React.ReactHTML['a']> & IconProps & LinkItems

const LinkItem: React.FC<LinkItemProperties> = ({ url, css, icon, ...rest }) => (
  <LinkBox rel={'noopener noreferrer'} href={url} target={'_blank'} css={css} {...rest}>
    <InlineIcon
      icon={icon}
      css={tw`w-full h-full text-night-400 dark:text-snow-300 transition delay-150 ease-in-out`}
    />
  </LinkBox>
)

export { LinkItem }

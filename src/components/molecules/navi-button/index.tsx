import { type IconifyIcon } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'

type NaviButtonProperties = {
  href: string
  label: string
  icon: string | IconifyIcon
}

const NaviButton: React.VFC<NaviButtonProperties> = ({ href, label, icon }) => (
  <a href={href}>
    <Button
      as={'a'}
      variant={'icon'}
      icon={icon}
      iconStyles={tw`bg-snow-100 dark:bg-night-200 text-2xl hover:bg-snow-200 dark:hover:bg-night-300`}
      boxStyles={tw`p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 w-8 h-8 mx-1`}
      key={label}
    />
  </a>
)

export { NaviButton }

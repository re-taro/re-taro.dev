import type { IconifyIcon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'

type NaviButtonProperties = {
  href: string
  label: string
  icon: string | IconifyIcon
}

const NaviButton: React.VFC<NaviButtonProperties> = ({ href, label, icon }) => (
  <Link href={href} passHref>
    <Button
      aria-label={label}
      as={'a'}
      variant={'icon'}
      leftIcon={icon}
      iconStyles={tw`text-2xl`}
      boxStyles={tw`transition ease-in-out delay-100 p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 hover:-translate-y-1 w-8 h-8 mx-1`}
      key={label}
    />
  </Link>
)

export { NaviButton }

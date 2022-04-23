import type { IconifyIcon } from '@iconify/react'
import React from 'react'
import { NaviButton } from '../navi-button'
import { Flex } from '~/components/atoms/flex'

type NavigationItemProperties = {
  href: string
  icon: string | IconifyIcon
  label: string
}

const NavigationItem: Array<NavigationItemProperties> = [
  {
    href: '/',
    icon: 'fa6-solid:house-chimney',
    label: 'Home'
  },
  {
    href: '/works',
    icon: 'fa6-solid:rocket',
    label: 'Works'
  },
  {
    href: '/blog',
    icon: 'fa6-solid:feather-pointed',
    label: 'Blog'
  },
  {
    href: '/about',
    icon: 'fa6-solid:user',
    label: 'About'
  }
]

const Navigation: React.FC = () => (
  <Flex>
    {NavigationItem.map(({ href, icon, label }) => (
      <NaviButton href={href} label={label} icon={icon} key={label} />
    ))}
  </Flex>
)

export { Navigation, NavigationItem }

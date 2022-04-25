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
    icon: 'fa-solid:home',
    label: 'Home'
  },
  {
    href: '/works',
    icon: 'fa-solid:rocket',
    label: 'Works'
  },
  {
    href: '/blog',
    icon: 'fa-solid:feather-alt',
    label: 'Blog'
  },
  {
    href: '/about',
    icon: 'fa-solid:user-alt',
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

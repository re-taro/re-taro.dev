import type { IconifyIcon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'
import { Flex } from '../../atoms/flex'
import { NaviButton } from '../../molecules/navi-button'

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

const Navigation: React.VFC = () => (
  <Flex>
    {NavigationItem.map(({ href, icon, label }) => (
      <NaviButton href={href} label={label} icon={icon} key={label} />
    ))}
  </Flex>
)

const Hamburger: React.VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <React.Fragment>
      <Button
        aria-label={'Hamburger'}
        variant={'icon'}
        leftIcon={'fa-solid:hamburger'}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul
        css={
          isOpen
            ? tw`p-2 bg-snow-100 dark:bg-night-200 rounded-md visible`
            : tw`p-2 bg-snow-100 dark:bg-night-200 rounded-md invisible`
        }
      >
        {NavigationItem.map(({ href, icon, label }) => (
          <li key={label}>
            <Link href={href} passHref>
              <Button
                as={'a'}
                aria-label={label}
                variant={'icon'}
                leftIcon={icon}
                iconStyles={tw`bg-snow-100 dark:bg-night-200 text-2xl hover:bg-snow-200 dark:hover:bg-night-300`}
                boxStyles={tw`p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 mx-1`}
                key={label}
              >
                {label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export { Navigation, Hamburger }

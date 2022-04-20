import { InlineIcon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'
import { Text } from '../../atoms/text'
import { NavigationItem } from '../navigation'

const HamburgerBox = tw.div`relative inline-block`

const Hamburger: React.VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <HamburgerBox>
      <Button
        aria-label={'Hamburger'}
        variant={'icon'}
        leftIcon={isOpen ? 'eva:close-fill' : 'fa-solid:hamburger'}
        iconStyles={tw`bg-snow-300 dark:bg-night-300 text-2xl hover:bg-snow-200 dark:hover:bg-night-200`}
        boxStyles={tw`p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 w-8 h-8 mx-1`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul
        css={
          isOpen
            ? tw`px-2 bg-snow-100/80 dark:bg-night-100/80 rounded-md mt-2 right-0 visible absolute z-50`
            : tw`right-0 invisible absolute z-50`
        }
      >
        {NavigationItem.map(({ href, icon, label }) => (
          <li key={label} css={tw`my-1`}>
            <Link href={href} passHref>
              <a css={tw`flex items-center`}>
                <div css={tw`flex items-center justify-center flex-shrink-0 w-4 h-4 min-h-full mr-2`}>
                  <InlineIcon icon={icon} css={tw`w-full h-full text-night-400 dark:text-snow-300`} />
                </div>
                <Text>{label}</Text>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </HamburgerBox>
  )
}

export default Hamburger

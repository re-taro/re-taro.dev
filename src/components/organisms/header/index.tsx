import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { Flex } from '../../atoms/flex'
import { Heading } from '../../atoms/heading'
import { Spacer } from '../../atoms/spacer'
import { ToggleButton } from '../../molecules/toggle-button'
import { Navigation } from '../navigation'
const Hamburger = dynamic(() => import('../hamburger'))

const HeaderBox = tw.header`fixed w-full bg-snow-300/80 dark:bg-night-300/80 top-0 backdrop-filter backdrop-blur-[6px] z-30`

type HeaderProperties = React.ComponentProps<React.ReactHTML['header']>

const Header: React.VFC<HeaderProperties> = ({ ...rest }) => (
  <HeaderBox {...rest}>
    <Flex css={tw`mx-auto w-full max-w-[100vw] md:max-w-[85vw] lg:max-w-[800px] py-4 px-6 md:px-2 lg:px-0`}>
      <Link href={'/'} passHref>
        <Heading as={'h1'} css={tw`text-xl tracking-tighter cursor-pointer`}>
          re-taro.dev
        </Heading>
      </Link>
      <Spacer />
      <Flex css={tw`items-center grid gap-4`}>
        <Flex css={tw`hidden sm:flex`}>
          <Navigation />
        </Flex>
      </Flex>
      <ToggleButton />
      <div css={tw`inline-block sm:hidden`}>
        <Hamburger />
      </div>
    </Flex>
  </HeaderBox>
)

export { Header }

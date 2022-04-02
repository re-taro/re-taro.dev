import React from 'react'
import tw from 'twin.macro'
import { Container } from '../../atoms/container'
import { Flex } from '../../atoms/flex'
import { Heading } from '../../atoms/heading'
import { Spacer } from '../../atoms/spacer'
import { ToggleButton } from '../../molecules/toggle-button'
import { Navigation, Hamburger } from '../../organisms/navigation'

const HeaderBox = tw.header`fixed w-full bg-snow-100 dark:bg-night-200 top-0 backdrop-filter backdrop-blur-xl z-10`

type HeaderProperties = React.ComponentProps<React.ReactHTML['header']>

const Header: React.VFC<HeaderProperties> = ({ ...rest }) => (
  <HeaderBox {...rest}>
    <Container css={tw`flex mx-auto w-full max-w-[100vh] md:max-w-[85vh] lg:max-w-[800px] py-4 px-6 md:px-2 lg:px-0`}>
      <Flex css={tw`items-center`}>
        <a href={'/'} rel={'noopener noreferrer'}>
          <Heading as={'h1'} css={tw`text-xl tracking-tighter`}>
            re-taro.dev
          </Heading>
        </a>
      </Flex>
      <Spacer />
      <Flex>
        <Flex css={tw`hidden md:flex w-full md:w-auto items-center flex-grow mt-4 md:mt-0`}>
          <Navigation />
        </Flex>
        <div>
          <ToggleButton />
          <div css={tw`ml-2 inline-block md:hidden`}>
            <Hamburger />
          </div>
        </div>
      </Flex>
    </Container>
  </HeaderBox>
)

export { Header }

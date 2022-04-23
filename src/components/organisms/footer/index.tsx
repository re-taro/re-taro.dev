import React from 'react'
import tw from 'twin.macro'
import { Divider } from '~/components/atoms/divider'
import { Text } from '~/components/atoms/text'
import { Spotify } from '~/components/molecules/spotify'

const FooterBox = tw.footer`flex flex-col mx-auto w-full max-w-[100vw] md:max-w-[85vw] lg:max-w-[800px] py-4 px-6 md:px-2 lg:px-0 space-y-8`

type FooterProperties = React.ComponentProps<React.ReactHTML['footer']>

const Footer: React.FC<FooterProperties> = ({ ...rest }) => (
  <FooterBox {...rest}>
    <Divider />
    <Spotify />
    <Text css={tw`text-sm sm:text-base`}>
      &copy; 2021 - {new Date().getFullYear()}{' '}
      <a
        css={tw`cursor-pointer hover:underline`}
        href={'https://github./com/re-taro/'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        Rintaro Itokawa
      </a>
    </Text>
  </FooterBox>
)

export { Footer }

import React from 'react'
import tw from 'twin.macro'

const FooterBox = tw.footer`opacity-40 text-center text-base`

type FooterProperties = React.ComponentProps<React.ReactHTML['footer']>

const Footer: React.FC<FooterProperties> = ({ ...rest }) => (
  <FooterBox {...rest}>
    &copy; 2021 - {new Date().getFullYear()}{' '}
    <a
      css={tw`cursor-pointer hover:underline`}
      href={'https://github.com/re-taro/'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      Rintaro Itokawa
    </a>
  </FooterBox>
)

export { Footer }

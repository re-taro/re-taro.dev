import React from 'react'
import tw from 'twin.macro'
import { Flex } from '~/components/atoms/flex'
import { LinkItem } from '~/components/molecules/link-item'
import type { LinkItems } from '~/components/molecules/link-item'

const socialLinks: Array<LinkItems> = [
  {
    icon: 'fa-brands:github',
    url: 'https://github.com/re-taro/'
  },
  {
    icon: 'fa-brands:twitter',
    url: 'https://twitter.com/10969_rintaro/'
  },
  {
    icon: 'fa-brands:keybase',
    url: 'https://keybase.io/10969_rintaro/'
  },
  {
    icon: 'fa-brands:discord',
    url: 'https://discord.com/users/713739439041544273/'
  },
  {
    icon: 'fa-solid:envelope',
    url: 'mailto:me@re-taro.dev?cc=aminokacho@gmail.com'
  }
]

const LinksBox = tw.div`my-4`

const LinksSection: React.FC = () => (
  <LinksBox>
    <Flex css={tw`flex-wrap gap-4 mt-4`}>
      {socialLinks.map((link, key) => (
        <LinkItem icon={link.icon} url={link.url} key={key} />
      ))}
    </Flex>
  </LinksBox>
)

export { LinksSection }

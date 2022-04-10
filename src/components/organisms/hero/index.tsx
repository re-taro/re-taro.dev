import React from 'react'
import tw from 'twin.macro'
import { Heading } from '../../atoms/heading'
import { Text } from '../../atoms/text'

const HeroWrapper = tw.div`h-[90vh] items-center grid`

const HeroBox = tw.div`align-middle w-full sm:w-[80%] md:w-[60%] mt-8 sm:mt-0 sm:self-center`

export type Hero = {
  primary: string
  position: string
}

type HeroSectionProperties = React.ComponentProps<React.ReactHTML['div']> & {
  data: Hero
}

const HeroSection: React.VFC<HeroSectionProperties> = ({ data, ...rest }) => (
  <HeroWrapper {...rest}>
    <HeroBox>
      <Heading as={'h1'} css={tw`text-xl pb-11`}>
        {data.primary}
      </Heading>
      <Text css={tw`text-base sm:text-xl`}>{data.position}</Text>
    </HeroBox>
  </HeroWrapper>
)

export { HeroSection }

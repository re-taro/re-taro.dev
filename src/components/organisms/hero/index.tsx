import React from 'react'
import tw from 'twin.macro'
import type { HomeQuery } from '../../../graphql'
import { Heading } from '../../atoms/heading'
import { Text } from '../../atoms/text'

const HeroWrapper = tw.div`h-[90vh] items-center grid`

const HeroBox = tw.div`align-middle w-full sm:w-[80%] md:w-[60%] sm:mt-0 sm:self-center`

export type Hero = {
  primary: string
  position: string
}

type HeroSectionProperties = React.ComponentProps<React.ReactHTML['div']> & {
  data: HomeQuery['basic'] | undefined
}

const HeroSection: React.VFC<HeroSectionProperties> = ({ data, ...rest }) => (
  <HeroWrapper {...rest}>
    <HeroBox>
      <Heading as={'h2'} css={tw`pb-11`}>
        {data?.name.primary}
      </Heading>
      <Text css={tw`text-base sm:text-xl`}>{data?.name.position}</Text>
    </HeroBox>
  </HeroWrapper>
)

export { HeroSection }

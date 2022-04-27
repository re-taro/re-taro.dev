import { NextSeo } from 'next-seo'
import React from 'react'
import { ContentSection } from '~/components/organisms/content'
import { HeadingSection } from '~/components/organisms/heading'
import { LinksSection } from '~/components/organisms/links'
import type { AboutQuery } from '~/graphql'

type AboutProperties = {
  data: AboutQuery | undefined
}

const About: React.FC<AboutProperties> = ({ data }) => (
  <React.Fragment>
    <NextSeo
      title={'About'}
      canonical={'https://re-taro.dev/about'}
      openGraph={{
        description: 'About re-taro.dev page',
        title: 'About | re-taro'
      }}
    />
    <HeadingSection data={data?.basic.affiliation} />
    <ContentSection data={data?.basic.introduction} />
    <LinksSection />
  </React.Fragment>
)

export { About }

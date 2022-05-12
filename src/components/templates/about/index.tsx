import React from 'react'
import { ContentSection } from '~/components/organisms/content'
import { HeadingSection } from '~/components/organisms/heading'
import { LinksSection } from '~/components/organisms/links'
import { Seo, OGP_HOST } from '~/components/organisms/seo'
import type { SeoProperties } from '~/components/organisms/seo'
import type { AboutQuery } from '~/graphql'

const meta: SeoProperties = {
  description: '自己紹介',
  ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=About | re-taro`),
  pageRelPath: '',
  pagetype: 'article',
  sitename: 're-taro.dev',
  title: 'About | re-taro',
  twcardtype: 'summary_large_image'
}

type AboutProperties = {
  data: AboutQuery | undefined
}

const About: React.FC<AboutProperties> = ({ data }) => (
  <React.Fragment>
    <Seo {...meta} />
    <HeadingSection data={data?.basic.affiliation} />
    <ContentSection data={data?.basic.introduction} />
    <LinksSection />
  </React.Fragment>
)

export { About }

import { NextSeo } from 'next-seo'
import React from 'react'
import tw from 'twin.macro'
import { Heading } from '~/components/atoms/heading'
import { ProjectCard } from '~/components/molecules/project-card'
import type { WorksQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

type WorksProperties = {
  data: WorksQuery | undefined
}

const Works: React.FC<WorksProperties> = ({ data }) => (
  <React.Fragment>
    <NextSeo
      title={'My Works'}
      canonical={'https://re-taro.dev/works/'}
      openGraph={{
        images: [
          {
            alt: 'Works | re-taro.dev ogp',
            url: GenOgp('Works')
          }
        ],
        title: 'Works | re-taro'
      }}
    />
    <div css={tw`mb-8`}>
      <Heading as={'h3'} css={tw`mb-2`}>
        Works
      </Heading>
    </div>
    <ProjectCard projects={data?.works} />
  </React.Fragment>
)

export { Works }

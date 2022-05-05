import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Heading } from '~/components/atoms/heading'
import { ProjectCard } from '~/components/molecules/project-card'
import type { WorksQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

type WorksProperties = {
  data: WorksQuery | undefined
}

const Works: React.FC<WorksProperties> = ({ data }) => {
  const router = useRouter()
  useEffect(() => {
    data?.works
      .sort((workA, workB) => (workA.date < workB.date ? 1 : -1))
      .map(project => router.prefetch('/works/[id]', `/works/${project.id}`))
  }, [data])
  return (
    <React.Fragment>
      <NextSeo
        title={'My Works'}
        canonical={'https://re-taro.dev/works/'}
        openGraph={{
          images: [
            {
              alt: 'Works | re-taro.dev ogp',
              url: GenOgp('Works | re-taro')
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
}

export { Works }

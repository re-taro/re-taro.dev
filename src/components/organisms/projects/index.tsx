import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import type { HomeQuery } from '../../../graphql'
import { Button } from '../../atoms/button'
import { Grid } from '../../atoms/grid'
import { Heading } from '../../atoms/heading'
import { Card } from '../../molecules/card'

const ProjectsBox = tw.section`mb-16 space-y-4`

type ProjectsSectionProperties = React.ComponentProps<React.ReactHTML['section']> & {
  data: HomeQuery['works'] | undefined
}

const ProjectsSection: React.VFC<ProjectsSectionProperties> = ({ data, ...rest }) => {
  const router = useRouter()
  useEffect(() => {
    data?.map(project => router.prefetch('/works/[id]', `/works/${project.id}`))
  }, [data])
  return (
    <ProjectsBox {...rest}>
      <Link href={'/works'} passHref>
        <Heading as={'h1'} css={tw`text-lg cursor-pointer`}>
          Works
        </Heading>
      </Link>
      <Grid css={tw`gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 my-8`}>
        <Card projectData={data} />
      </Grid>
      <Link href={'/works'} passHref>
        <Button
          aria-label={'view all works'}
          as={'a'}
          variant={'icon'}
          rightIcon={'fa6-solid:arrow-right'}
          boxStyles={tw`px-0`}
        >
          view all works
        </Button>
      </Link>
    </ProjectsBox>
  )
}

export { ProjectsSection }

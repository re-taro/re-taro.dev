import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'
import { Grid } from '../../atoms/grid'
import { Heading } from '../../atoms/heading'
import { Card } from '../../molecules/card'
import type { ProjectProperties } from '../../molecules/card'

const ProjectsBox = tw.section`mb-16 space-y-4`

export type Projects = Array<ProjectProperties>

type ProjectsSectionProperties = React.ComponentProps<React.ReactHTML['section']> & {
  data: Projects
}

const ProjectsSection: React.VFC<ProjectsSectionProperties> = ({ data, ...rest }) => {
  const router = useRouter()
  useEffect(() => {
    for (const project of data) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.prefetch('/works/[id]', `/works/${project.id}`)
    }
  }, [data])
  return (
    <ProjectsBox {...rest}>
      <Link href={'/works'} passHref>
        <Heading as={'h1'} css={tw`text-lg cursor-pointer`}>
          Works
        </Heading>
      </Link>
      <Grid css={tw`gap-8 grid-cols-1 sm:grid-cols-1 md:gird-cols-2 my-8`}>
        {data.map(project => (
          <Card key={project.id} projectData={project} />
        ))}
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

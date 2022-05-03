import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw, { css } from 'twin.macro'
import { Flex } from '~/components/atoms/flex'
import { Grid } from '~/components/atoms/grid'
import { Heading } from '~/components/atoms/heading'
import { Text } from '~/components/atoms/text'
import type { WorksQuery } from '~/graphql'
import { formatDate } from '~/utils/date'

const ProjectCardBox = tw.div`w-full h-full p-8 rounded-3xl border-2 border-night-300 dark:border-snow-300 transition delay-150 ease-in-out hover:scale-[1.03] hover:drop-shadow-lg`

type ProjectCardProperties = React.ComponentProps<React.ReactHTML['div']> & {
  projects: WorksQuery['works'] | undefined
}

// eslint-disable-next-line max-lines-per-function
const ProjectCard: React.FC<ProjectCardProperties> = ({ projects, ...rest }) => (
  <Grid css={tw`gap-6`}>
    {projects?.reverse().map(project => (
      <Link href={`/works/${project.id}`} passHref>
        <ProjectCardBox as={'a'} {...rest}>
          <Flex css={tw`items-center w-full h-full gap-8`}>
            <Flex
              css={[
                tw`gap-6 flex-wrap h-full`,
                css`
                  flex-basis: 100%;
                  @media (min-width: 640px) {
                    flex-basis: 60%;
                  }
                `
              ]}
            >
              <div css={tw`self-start w-full`}>
                <Heading as={'h2'} css={tw`mb-2`}>
                  {project.title}
                </Heading>
                <Text css={tw`text-base`}>{project.description}</Text>
              </div>
              <Flex css={tw`mt-8 items-center`}>
                <Text as={'time'}>{formatDate(project.date, 'MMM D, YYYY')}</Text>
              </Flex>
            </Flex>
            <div
              css={css`
                flex-basis: 0;
                @media (min-width: 640px) {
                  flex-basis: 40%;
                }
              `}
            >
              <div css={tw`mx-auto hidden sm:inline`}>
                <Image
                  height={200}
                  width={355}
                  layout={'responsive'}
                  objectFit={'cover'}
                  objectPosition={'50% 0'}
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
            </div>
          </Flex>
        </ProjectCardBox>
      </Link>
    ))}
  </Grid>
)

export { ProjectCard }

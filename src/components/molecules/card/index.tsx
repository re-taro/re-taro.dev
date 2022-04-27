import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { Text } from '~/components/atoms/text'
import type { HomeQuery } from '~/graphql'

const CardBox = tw.div`border-2 border-night-100 dark:border-night-400 shadow-card rounded-[20px] cursor-pointer items-center overflow-hidden justify-center relative transition delay-150 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl`

const Layer = tw.div`flex flex-col absolute justify-end bottom-0 p-6 h-full w-full z-20 bg-gradient-to-t from-[rgba(45, 55, 72, 0.6)] via-[rgba(203, 213, 224, 0.4)] to-[rgba(237, 242, 247, 0)] dark:from-[rgba(0, 0, 0, 0.5)] dark:to-[rgba(237, 242, 247, 0)]`

type CardProperties = React.ComponentProps<React.ReactHTML['div']> & {
  projectData: HomeQuery['works'] | undefined
}

const Card: React.FC<CardProperties> = ({ projectData, ...rest }) => (
  <React.Fragment>
    {projectData?.slice(0, 4).map(project => (
      <Link href={`/works/${project.id}`} passHref>
        <CardBox key={project.id} {...rest}>
          <div css={tw`h-[200] sm:h-[250] md:h-[200]`}>
            <Image
              src={project.imageUrl}
              height={200}
              width={355}
              layout={'responsive'}
              objectFit={'cover'}
              objectPosition={'50% 0'}
              alt={`${project.title}-thumbnail`}
            />
          </div>
          <Layer>
            <div css={tw`flex flex-row items-center`}>
              <Text as={'p'} css={tw`font-bold text-lg text-white`}>
                {project.title}
              </Text>
            </div>
          </Layer>
        </CardBox>
      </Link>
    ))}
  </React.Fragment>
)

export { Card }

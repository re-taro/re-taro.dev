import Image from 'next/image'
import type { ImageLoader } from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import type { HomeQuery } from '../../../graphql'
import { Flex } from '../../atoms/flex'
import { Text } from '../../atoms/text'

const CardBox = tw.div`border-2 border-night-100 dark:border-night-400 shadow-card rounded-[5rem] cursor-pointer items-center overflow-hidden justify-center relative transition duration-200 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl`

const Layer = tw.div`absolute justify-center bottom-0 p-0 h-full w-full z-20 bg-gradient-to-t from-[rgba(45, 55, 72, 0.6)] via-[rgba(203, 213, 224, 0.4)] to-[rgba(237, 242, 247, 0)] dark:from-[rgba(0, 0, 0, 0.5)] dark:to-[rgba(237, 242, 247, 0)]`

type CardProperties = React.ComponentProps<React.ReactHTML['div']> & {
  projectData: HomeQuery['works'] | undefined
}

const Card: React.VFC<CardProperties> = ({ projectData, ...rest }) => (
  <React.Fragment>
    {projectData?.map(project => (
      <Link href={`/works/${project.id}`} passHref>
        <CardBox key={project.id} {...rest}>
          <div css={tw`h-[200] sm:h-[250] md:h-[200]`}>
            <Image
              src={project.imageUrl}
              height={200}
              width={200}
              layout={'responsive'}
              objectFit={'cover'}
              objectPosition={'50% 0'}
              alt={`${project.title}-thumbnail`}
            />
          </div>
          <Layer>
            <Flex css={tw`flex-row items-center`}>
              <Text css={tw`font-bold text-lg text-white`}>{project.title}</Text>
            </Flex>
          </Layer>
        </CardBox>
      </Link>
    ))}
  </React.Fragment>
)

export { Card }

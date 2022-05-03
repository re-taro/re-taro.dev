import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { Text } from '../text'

const TagBox = tw.div`bg-snow-300 dark:bg-night-300 border border-night-300 dark:border-snow-300 rounded-[5px] py-0 px-2 h-7 transition delay-150 ease-in-out`

type TagProperties = React.ComponentProps<React.ReactHTML['div']> & {
  tag: string
}

const Tag: React.FC<TagProperties> = ({ tag, ...rest }) => (
  <TagBox {...rest}>
    <Link href={`/tags/${tag}`} passHref>
      <Text as={'a'} css={tw`hover:underline`}>#{tag}</Text>
    </Link>
  </TagBox>
)

export { Tag }

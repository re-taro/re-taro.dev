import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import type { Post } from '../../../graphql'
import { Flex } from '../../atoms/flex'
import { Heading } from '../../atoms/heading'
import Twemoji from '../../atoms/twemojii'

const PostBox = tw.div`w-full transition duration-200 ease-out hover:scale-[1.03]`

export type PostProperties = Post

type PostCardProperties = React.ComponentProps<React.ReactHTML['div']> & {
  postData: PostProperties
}

const PostCard: React.VFC<PostCardProperties> = ({ postData, ...rest }) => (
  <PostBox {...rest}>
    <Link href={`/posts/${postData.id}`} passHref>
      <Flex as={'a'} css={tw`flex-wrap items-center w-full`}>
        <Flex css={tw`justify-center items-center basis-[10%]`}>
          <div css={tw`w-[60%] h-[60%]`}>
            <Twemoji emoji={postData.emoji} />
          </div>
        </Flex>
        <div css={tw`basis-[90%] pl-[11] sm:pl-[22]`}>
          <Heading css={tw`text-lg`}>{postData.title}</Heading>
        </div>
      </Flex>
    </Link>
  </PostBox>
)

export { PostCard }

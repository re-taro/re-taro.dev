import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { Flex } from '~/components/atoms/flex'
import { Heading } from '~/components/atoms/heading'
import Twemoji from '~/components/atoms/twemojii'
import type { Post } from '~/graphql'

const PostBox = tw.div`w-full transition delay-150 ease-in-out hover:scale-[1.03]`

type PostCardProperties = React.ComponentProps<React.ReactHTML['div']> & {
  postData: Array<Post> | undefined
}

const PostCard: React.FC<PostCardProperties> = ({ postData, ...rest }) => (
  <React.Fragment>
    {postData?.slice(0, 4).map(post => (
      <PostBox key={post.id} {...rest}>
        <Link href={`/posts/${post.id}`} passHref>
          <Flex as={'a'} css={tw`flex-wrap items-center w-full`}>
            <Flex css={tw`justify-center items-center flex-1`}>
              <div css={tw`w-[60%] h-[60%]`}>
                <Twemoji emoji={post.emoji} />
              </div>
            </Flex>
            <div css={tw`flex-[9 9 0] pl-[11] sm:pl-[22]`}>
              <Heading as={'h5'}>{post.title}</Heading>
            </div>
          </Flex>
        </Link>
      </PostBox>
    ))}
  </React.Fragment>
)

export { PostCard }

import { NextSeo } from 'next-seo'
import React from 'react'
import tw from 'twin.macro'
import { Grid } from '~/components/atoms/grid'
import { Heading } from '~/components/atoms/heading'
import { Text } from '~/components/atoms/text'
import { PostCard } from '~/components/molecules/post-card'
import type { PostsQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

const PostsHead = tw.div`mb-[22px]`

type PostsPropeties = {
  data: PostsQuery | undefined
}

const Posts: React.FC<PostsPropeties> = ({ data }) => (
  <React.Fragment>
    <NextSeo
      title={'Blog Posts'}
      canonical={'https://re-taro.dev/posts'}
      openGraph={{
        images: [{
          alt: 'Posts | re-taro.dev ogp',
          url: GenOgp('Posts | re-taro')
        }],
        title: 'Blog Posts | re-taro'
      }}
    />
    <PostsHead>
      <Heading as={'h5'} css={tw`mb-2`}>Blog Posts</Heading>
      <Text as={'p'} css={tw`text-lg`}>Just some writings</Text>
    </PostsHead>
    <Grid css={tw`gap-16 my-12`}>
      {data?.posts.reverse().map((post, key) => (
        <PostCard post={post} key={key} />
      ))}
    </Grid>
  </React.Fragment>
)

export { Posts }

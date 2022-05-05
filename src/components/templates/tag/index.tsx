import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Grid } from '~/components/atoms/grid'
import { Heading } from '~/components/atoms/heading'
import { Text } from '~/components/atoms/text'
import { PostCard } from '~/components/molecules/post-card'
import type { TagQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

const TagHead = tw.div`mb-[22px]`

type TagProperties = {
  data: TagQuery | undefined
  tag: string
}

const Tag: React.FC<TagProperties> = ({ data, tag }) => {
  const router = useRouter()
  useEffect(() => {
    data?.postsByTag
      .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
      .map(post => router.prefetch('/posts/[id]', `/posts/${post.id}`))
  }, [data])
  return (
    <React.Fragment>
      <NextSeo
        title={`${tag} posts`}
        canonical={`https://re-taro.dev/tags/${tag}`}
        openGraph={{
          images: [
            {
              alt: `${tag} posts | re-taro.dev ogp`,
              url: GenOgp(`${tag} posts | re-taro`)
            }
          ],
          title: `${tag} posts | re-taro`
        }}
      />
      <TagHead>
        <Heading as={'h3'} css={tw`mb-2`}>
          Blog Posts
        </Heading>
        <Text css={tw`text-center text-xl`}>#{tag}'s posts</Text>
      </TagHead>
      <Grid css={tw`gap-16 my-12`}>
        {data?.postsByTag
          .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
          .map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
      </Grid>
    </React.Fragment>
  )
}

export { Tag }

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'
import { Grid } from '../../atoms/grid'
import { Heading } from '../../atoms/heading'
import { PostCard } from '../../molecules/post-card'
import type { PostProperties } from '../../molecules/post-card'

const PostsBox = tw.section`space-y-4`

export type Posts = Array<PostProperties>

type PostsSectionProperties = React.ComponentProps<React.ReactHTML['section']> & {
  data: Posts
}

const PostsSection: React.VFC<PostsSectionProperties> = ({ data, ...rest }) => {
  const router = useRouter()
  useEffect(() => {
    for (const post of data) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.prefetch('/posts/[id]', `/posts/${post.id}`)
    }
  }, [data])
  return (
    <PostsBox {...rest}>
      <Heading css={tw`text-lg mb-2`}>Recent Posts</Heading>
      <Grid css={tw`gap-8`}>
        {data.slice(0, 2).map(post => (
          <PostCard postData={post} key={post.id} />
        ))}
      </Grid>
      <Link href={'/posts'} passHref>
        <Button
          aria-label={'view all posts'}
          as={'a'}
          variant={'icon'}
          rightIcon={'fa6-solid:arrow-right'}
          boxStyles={tw`px-0`}
        >
          view all posts
        </Button>
      </Link>
    </PostsBox>
  )
}

export { PostsSection }

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { HomeQuery } from '../../../graphql'
import { Button } from '../../atoms/button'
import { Grid } from '../../atoms/grid'
import { Heading } from '../../atoms/heading'
import { PostCard } from '../../molecules/post-card'

const PostsBox = tw.section`space-y-4`

type PostsSectionProperties = React.ComponentProps<React.ReactHTML['section']> & {
  data: HomeQuery['posts'] | undefined
}

const PostsSection: React.VFC<PostsSectionProperties> = ({ data, ...rest }) => {
  const router = useRouter()
  useEffect(() => {
    data?.map(post => router.prefetch('/posts/[id]', `/posts/${post.id}`))
  }, [data])
  return (
    <PostsBox {...rest}>
      <Heading as={'h5'} css={tw`mb-2`}>
        Recent Posts
      </Heading>
      <Grid css={tw`gap-8`}>
        <PostCard postData={data} />
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

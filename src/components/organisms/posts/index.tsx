import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Button } from '~/components/atoms/button'
import { Grid } from '~/components/atoms/grid'
import { Heading } from '~/components/atoms/heading'
import { Text } from '~/components/atoms/text'
import { PostCard } from '~/components/molecules/post-card'
import { Post } from '~/graphql'

const PostsBox = tw.section`space-y-4`

type PostsSectionProperties = React.ComponentProps<React.ReactHTML['section']> & {
  data: Array<Post> | undefined
}

const PostsSection: React.FC<PostsSectionProperties> = ({ data, ...rest }) => {
  const router = useRouter()
  useEffect(() => {
    data?.slice(0, 4).map(post => router.prefetch('/posts/[id]', `/posts/${post.id}`))
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
          rightIcon={'fa-solid:arrow-right'}
          boxStyles={tw`px-0`}
        >
          <Text as={'p'} css={tw`text-lg`}>
            view all posts
          </Text>
        </Button>
      </Link>
    </PostsBox>
  )
}

export { PostsSection }

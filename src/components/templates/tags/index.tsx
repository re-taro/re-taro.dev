import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Heading } from '~/components/atoms/heading'
import { Tag } from '~/components/atoms/tag'
import { Text } from '~/components/atoms/text'
import type { TagsQuery } from '~/graphql'
import { GenOgp } from '~/utils/gen-ogp'

const TagsHead = tw.div`mb-[22px]`

type TagsProperties = {
  data: TagsQuery | undefined
}

const Tags: React.FC<TagsProperties> = ({ data }) => {
  const router = useRouter()
  const result = data?.posts.flatMap(post => post.tags)
  const tags = [...new Set(result)]
  useEffect(() => {
    // eslint-disable-next-line sonarjs/no-ignored-return
    tags.map(tag => router.prefetch('/tags/[tag]', `/tags/${tag}`))
  }, [tags])
  return (
    <React.Fragment>
      <NextSeo
        title={'Posts tags'}
        canonical={'https://re-taro.dev/tags'}
        openGraph={{
          images: [
            {
              alt: 'Tags | re-taro.dev ogp',
              url: GenOgp('Tags | re-taro')
            }
          ],
          title: 'Posts tags | re-taro'
        }}
      />
      <TagsHead>
        <Heading as={'h3'} css={tw`mb-2`}>
          Blog Posts
        </Heading>
        <Text css={tw`text-center text-xl`}>All tags</Text>
      </TagsHead>
      <ul css={tw`mx-4`}>
        {tags.map((tag, key) => (
          <li css={tw`list-none inline-block m-2`}>
            <Tag tag={tag} key={key} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export { Tags }

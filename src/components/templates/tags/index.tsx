import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import tw from 'twin.macro'
import { Heading } from '~/components/atoms/heading'
import { Tag } from '~/components/atoms/tag'
import { Text } from '~/components/atoms/text'
import { Seo, OGP_HOST } from '~/components/organisms/seo'
import type { SeoProperties } from '~/components/organisms/seo'
import type { TagsQuery } from '~/graphql'

const TagsHead = tw.div`mb-[22px]`

const meta: SeoProperties = {
  description: 'タグ一覧',
  ogImageUrl: encodeURI(`${OGP_HOST}/api/ogp?title=Tags | re-taro`),
  pageRelPath: '',
  pagetype: 'website',
  sitename: 're-taro.dev',
  title: 'Tags | re-taro',
  twcardtype: 'summary_large_image'
}

type TagsProperties = {
  data: TagsQuery | undefined
}

const Tags: React.FC<TagsProperties> = ({ data }) => {
  const router = useRouter()
  const result = data?.posts.flatMap(post => post.tags)
  const tags = [...new Set(result)]
  useEffect(() => {
    for (const tag of tags) {
      // eslint-disable-next-line no-void
      void router.prefetch('/tags/[tag]', `/tags/${tag}`)
    }
  }, [tags])
  return (
    <React.Fragment>
      <Seo {...meta} />
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

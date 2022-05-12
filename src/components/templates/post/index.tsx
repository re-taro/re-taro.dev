import React from 'react'
import { PostHead } from '~/components/organisms/post-head'
import { PostMeta } from '~/components/organisms/post-meta'
import type { SeoProperties } from '~/components/organisms/seo'
import type { PostQuery } from '~/graphql'
import Styles from '~/styles/post.module.scss'
import { RehypeReact } from '~/utils/rehype-react'

type PostProperties = {
  data: PostQuery | undefined
  content: string
  meta: SeoProperties
}

const Post: React.FC<PostProperties> = ({ data, content, meta }) => (
  <article>
    <PostMeta meta={meta} />
    <PostHead data={data?.postById} />
    <article className={Styles.content}>{RehypeReact(content)}</article>
  </article>
)

export { Post }

import Image from 'next/image'
import React from 'react'
import tw, { css } from 'twin.macro'
import { Chip } from '~/components/atoms/chip'
import { Flex } from '~/components/atoms/flex'
import { Text } from '~/components/atoms/text'
import type { SeoProperties } from '~/components/organisms/seo'
import { WorkHead } from '~/components/organisms/work-head'
import { WorkMeta } from '~/components/organisms/work-meta'
import type { WorkQuery } from '~/graphql'

type WorkProperties = {
  data: WorkQuery | undefined
  meta: SeoProperties
}

// eslint-disable-next-line max-lines-per-function
const Work: React.FC<WorkProperties> = ({ data, meta }) => (
  <article>
    <WorkMeta meta={meta} />
    <WorkHead data={data?.work} />
    <article>
      <Text css={tw`text-lg`}>{data?.work.workPage.detail}</Text>
      <ul css={tw`space-y-4 my-4`}>
        <li css={tw`list-none`}>
          <Flex css={tw`flex-wrap gap-4`}>
            <Chip css={tw`px-5`}>Stack</Chip>
            {data?.work.workPage.meta.stack.map((item, key) => (
              <Chip icon={item.icon} key={key}>
                {item.name}
              </Chip>
            ))}
          </Flex>
        </li>
        <li css={tw`list-none`}>
          <Flex css={tw`flex-wrap`}>
            <Chip css={tw`mr-4 px-5`}>Platform</Chip>
            <Flex css={tw`items-center`}>
              {data?.work.workPage.meta.platform.map((item, key) => (
                <Text
                  css={css`
                    :not(:first-child) {
                      :before {
                        content: ', ';
                      }
                    }
                  `}
                  key={key}
                >
                  {item}
                </Text>
              ))}
            </Flex>
          </Flex>
        </li>
        {data?.work.workPage.meta.website && (
          <li css={tw`list-none`}>
            <div css={tw`inline sm:flex`}>
              <Chip css={tw`mr-4 px-5`}>WebSite</Chip>
              <a
                href={data.work.workPage.meta.website}
                css={tw`text-night-400 dark:text-snow-300 self-center underline transition delay-150 ease-in-out`}
              >
                {data.work.workPage.meta.website}
              </a>
            </div>
          </li>
        )}
        {data?.work.workPage.meta.presentation && (
          <li css={tw`list-none`}>
            <div css={tw`inline sm:flex`}>
              <Chip css={tw`mr-4 px-5`}>Presentation</Chip>
              <a
                href={data.work.workPage.meta.presentation.url}
                css={tw`text-night-400 dark:text-snow-300 self-center underline transition delay-150 ease-in-out`}
              >
                {data.work.workPage.meta.presentation.title}
              </a>
            </div>
          </li>
        )}
        {data?.work.workPage.meta.blogPost && (
          <li css={tw`list-none`}>
            <div css={tw`inline sm:flex`}>
              <Chip css={tw`mr-4 px-5`}>Blog Post</Chip>
              <a
                href={data.work.workPage.meta.blogPost.url}
                css={tw`text-night-400 dark:text-snow-300 self-center underline transition delay-150 ease-in-out`}
              >
                {data.work.workPage.meta.blogPost.title}
              </a>
            </div>
          </li>
        )}
        {data?.work.workPage.meta.source && (
          <li css={tw`list-none`}>
            <div css={tw`inline sm:flex`}>
              <Chip css={tw`mr-4 px-5`}>Source</Chip>
              <a
                href={data.work.workPage.meta.source}
                css={tw`text-night-400 dark:text-snow-300 self-center underline transition delay-150 ease-in-out`}
              >
                {data.work.workPage.meta.source}
              </a>
            </div>
          </li>
        )}
      </ul>
      {data?.work.workPage.images?.map((source, key) => (
        <div css={tw`my-2 flex relative min-h-[20em] w-full`} key={key}>
          <Image
            css={tw`rounded-lg`}
            src={source}
            alt={`${data.work.workPage.title}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </article>
  </article>
)

export { Work }

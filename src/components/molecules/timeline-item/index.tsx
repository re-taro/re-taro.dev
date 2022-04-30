import React from 'react'
import tw, { css } from 'twin.macro'
import type { Bio } from '~/graphql'
import { formatDate } from '~/utils/date'

const ItemBox = tw.div`block relative pl-7 last:before:content-[""] last:before:absolute last:before:-left-0.5 last:before:w-0.5 last:before:h-full last:before:bg-snow-300 dark:last:before:bg-night-300 last:before:transition last:before:delay-150 last:before:ease-in-out`

const Circle = tw.div`absolute flex items-center justify-center border-4 border-solid border-snow-300 dark:border-night-300 w-4 h-4 rounded-[50%] top-0.5 left-[-9px] bg-gray-300 dark:bg-gray-600 transition delay-150 ease-in-out`

const ItemMeta = tw.div`text-[.92rem] leading-[1.4rem] text-night-200 dark:text-snow-200 tracking-widest whitespace-pre-wrap transition delay-150 ease-in-out`

const ItemDate = tw.time`before:content-["/"] dark:before:content-["/"] before:mx-[5px] before:my-0 before:text-night-200 dark:before:text-snow-200 before:transition before:delay-150 before:ease-in-out`

const ItemWrapper = tw.div`mt-4`

const ItemEmbed = tw.div`p-[1.1rem] flex leading-[1.4rem] text-[.95rem] bg-snow-100 dark:bg-night-100 transition delay-150 ease-in-out border border-solid border-night-100/10 dark:border-snow-100/10 rounded-lg relative`

const ItemTitle = tw.div`font-bold text-night-400 dark:text-snow-300 transition delay-150 ease-in-out`

const EmbedDate = tw.div`mt-[.3rem] text-[.84em] text-gray-300 transition delay-150 ease-in-out`

const TimeLineItem: React.FC<Bio> = ({ action, date, title }) => (
  <ItemBox
    css={css`
      :not(:first-child) {
        margin-top: 2.7rem;
      }
    `}
  >
    <Circle />
    <ItemMeta>
      <span>{action}</span>
      <ItemDate>{formatDate(date)}</ItemDate>
    </ItemMeta>
    <ItemWrapper>
      <ItemEmbed>
        <div css={tw`flex-1`}>
          <ItemTitle>{title}</ItemTitle>
          <EmbedDate>{formatDate(date, 'MMM D, YYYY')}</EmbedDate>
        </div>
      </ItemEmbed>
    </ItemWrapper>
  </ItemBox>
)

export { TimeLineItem }

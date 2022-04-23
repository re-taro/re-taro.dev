import { InlineIcon } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'
import { Image } from '~/components/atoms/image'
import { Text } from '~/components/atoms/text'
import { useNowPlayingData } from '~/services/now-playing'

const Spotify: React.FC = () => {
  const { data, isLoading } = useNowPlayingData()
  if (isLoading) {
    return <div css={tw`max-w-[300px] h-20 rounded-[12px] animate-pulse`} />
  }
  if (!data || !data?.isPlaying) {
    // eslint-disable-next-line unicorn/no-null
    return null
  }
  return (
    <React.Fragment>
      <a
        href={data.trackUrl}
        target={'_blank'}
        css={tw`flex rounded-[12px] max-w-[300px] mx-auto items-center gap-2 h-[20px]`}
      >
        <InlineIcon icon={'logos:spotify-icon'} css={'text-2xl'} />
        <Image src={data.albumArtUrl} css={tw`w-16 rounded-[8px]`} />
        <div>
          <Text css={tw`font-bold text-base`}>{data.trackTitle}</Text>
          <Text css={tw`text-sm text-gray-500`}>{data.artist}</Text>
        </div>
      </a>
    </React.Fragment>
  )
}

export { Spotify }

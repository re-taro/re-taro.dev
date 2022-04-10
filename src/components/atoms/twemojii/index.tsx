import Image from 'next/image'
import React from 'react'

type TwemojiProperties = {
  emoji: string
}

const EMOJI_URL = process.env.EMOJI_URL || 'http://localhost:3023'

const Twemoji: React.VFC<TwemojiProperties> = ({ emoji }) => (
  <span>
    <Image width={150} height={150} src={`${EMOJI_URL}/${emoji}.svg`} alt={emoji} draggable={false} />
  </span>
)

export default React.memo(Twemoji)

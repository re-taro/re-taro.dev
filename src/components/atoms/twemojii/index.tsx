import React from 'react'
import twemoji from 'twemoji'

type TwemojiProperties = {
  emoji: string
}

const Twemoji: React.FC<TwemojiProperties> = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        ext: '.svg',
        folder: 'svg'
      })
    }}
  />
)

export default React.memo(Twemoji)

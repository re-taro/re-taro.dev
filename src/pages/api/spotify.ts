import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '~/services//now-playing'
import type { GetNowPlayingTransformed } from '~/services/now-playing/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nowPlaying = async (request: NextApiRequest, response: NextApiResponse): Promise<void | NextApiResponse<any>> => {
  if (request.method !== 'GET') {
    return response.status(400)
  }
  try {
    const result = await getNowPlaying()
    if (!result || !result.item) {
      return response.status(200).json({ isPlaying: false })
    }
    const data: GetNowPlayingTransformed = {
      album: result.item.album.name,
      albumArtUrl: result.item.album.images[0].url,
      artist: result.item.album.artists.map(({ name }) => name).join(', '),
      isPlaying: result.is_playing,
      trackTitle: result.item.name,
      trackUrl: result.item.external_urls.spotify
    }
    return response.status(200).json(data)
  } catch {
    return response.status(200).json({ isPlaying: false })
  }
}

export default nowPlaying

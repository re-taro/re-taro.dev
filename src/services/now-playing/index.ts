import type { GetNowPlayingResponse, GetNowPlayingTransformed } from './types'
import { getAccessToken } from '~/services/auth/get-access-token'
import { useSpotifySWR } from '~/services/fetcher'
import { fetcher } from '~/utils/fetcher'

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetcher<GetNowPlayingResponse>(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const useNowPlayingData = () => useSpotifySWR<GetNowPlayingTransformed>('/api/spotify')

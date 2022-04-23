/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import useSWR from 'swr'
import type { SWRResponse } from 'swr'
import { fetcher } from '~/utils/fetcher'

type SWRHookResponse<DataType, ErrorType = boolean> = {
  isLoading: boolean
  data?: DataType
  isError?: ErrorType
  mutate: SWRResponse<DataType, ErrorType>['mutate']
}

export const useSpotifySWR = <ResponseType>(path: string): SWRHookResponse<ResponseType> => {
  const { data, error, mutate } = useSWR<ResponseType>(path, fetcher)
  return {
    data,
    isError: error,
    isLoading: !error && !data,
    mutate
  }
}

/* eslint-enable */

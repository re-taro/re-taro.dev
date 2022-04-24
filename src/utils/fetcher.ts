export const fetcher = <Response = unknown>(
  input: RequestInfo,
  init?: RequestInit
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
): Promise<Response> => fetch(input, init).then(response => response.json())

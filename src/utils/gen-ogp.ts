type OgpOption = {
  theme: string
  fontSize: string
  images: string
}

const GenOgp = (text: string, options?: OgpOption): string => {
  const defaultOptions: OgpOption = {
    fontSize: '125px',
    images: 'https://re-taro.dev/avatar.svg',
    theme: 'light'
  }
  const Options: OgpOption = {
    ...defaultOptions,
    ...options
  }
  return `https://ogp.re-taro.dev/**${text}**.png?theme=${Options.theme}&md=1&fontSize=${Options.fontSize}&images=${Options.images}`
}

export { GenOgp }

import type { DefaultSeoProps } from 'next-seo'

export const defaultSeoConfig: DefaultSeoProps = {
  canonical: 'https://re-taro.dev',
  defaultTitle: 're-taro | Rintaro Itokawa - Emotion Seeker',
  description: "Rintaro Itokawa's Dev Site | re-taro",
  openGraph: {
    description: "Rintaro Itokawa's Dev Site",
    images: [
      {
        alt: 're-taro.dev og-image',
        url: process.env.OGP_IMAGE || ''
      }
    ],
    site_name: 're-taro',
    title: 're-taro | Emotion Seeker',
    url: 'https://re-taro.dev'
  },
  title: 'Rintaro Itokawa - Emotion Seeker',
  titleTemplate: '%s | re-taro',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@re-taro'
  }
}

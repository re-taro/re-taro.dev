import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { defaultSeoConfig } from '../utils/next-seo'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <React.Fragment>
    <DefaultSeo {...defaultSeoConfig} />
    <GlobalStyles />
    <Component {...pageProps} />
  </React.Fragment>
)

export default App

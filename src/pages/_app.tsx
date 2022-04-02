import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import { GlobalStyles } from 'twin.macro'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <React.Fragment>
    <GlobalStyles />
    <Component {...pageProps} />
  </React.Fragment>
)

export default App

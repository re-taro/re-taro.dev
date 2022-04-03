import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { defaultSeoConfig } from '../utils/next-seo'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute={'class'} defaultTheme="system">
    <DefaultSeo {...defaultSeoConfig} />
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App

import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { Layout } from '~/components/templates/layout'
import { defaultSeoConfig } from '~/utils/next-seo'
import '~/styles/global.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute={'class'} defaultTheme="system">
    <DefaultSeo {...defaultSeoConfig} />
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default App

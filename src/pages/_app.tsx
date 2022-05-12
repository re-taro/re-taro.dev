import type { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { Layout } from '~/components/templates/layout'
import '~/styles/global.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute={'class'} defaultTheme="system">
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default App

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

const App: NextPage<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default App

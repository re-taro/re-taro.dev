import React from 'react'
import tw from 'twin.macro'
import { Footer } from '../../organisms/footer'
import { Header } from '../../organisms/header'

const LayoutBox = tw.div`w-full h-full min-w-full min-h-screen flex flex-col bg-snow-300 dark:bg-night-300 overflow-hidden`

const Main = tw.div`mx-auto w-full max-w-[100vh] md:max-w-[85vh] lg:max-w-[800px] py-4 px-6 md:px-2 lg:px-0`

type layoutProperties = React.ComponentProps<React.ReactHTML['div']> & {
  children: React.ReactNode
}

const Layout: React.VFC<layoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <Header />
    <Main as={'main'}>{children}</Main>
    <Footer />
  </LayoutBox>
)

export { Layout }

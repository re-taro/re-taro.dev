import React from 'react'
import tw from 'twin.macro'
import { Footer } from '~/components/organisms/footer'
import { Header } from '~/components/organisms/header'

const LayoutBox = tw.div`min-h-screen sm:pb-[16px] pt-16 transition delay-150 ease-in-out bg-snow-300 dark:bg-night-300`

const MainBox = tw.div`flex flex-col items-center relative z-10 space-y-8`

const Main = tw.div`mx-auto w-full max-w-[100vh] md:max-w-[85vh] lg:max-w-[800px] py-4 px-6 md:px-2 lg:px-0`

type layoutProperties = React.ComponentProps<React.ReactHTML['div']> & {
  children: React.ReactNode
}

const Layout: React.FC<layoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <Header />
    <MainBox>
      <Main as={'main'}>{children}</Main>
      <Footer />
    </MainBox>
  </LayoutBox>
)

export { Layout }

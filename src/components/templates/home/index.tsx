import React from 'react'
import tw from 'twin.macro'
import { HeroSection } from '~/components/organisms/hero'
import { PostsSection } from '~/components/organisms/posts'
import { ProjectsSection } from '~/components/organisms/projects'
import type { HomeQuery } from '~/graphql'

const HomeBox = tw.div`mt-[-24]`

type HomeProperties = React.ComponentProps<React.ReactHTML['div']> & {
  data: HomeQuery | undefined
}

const Home: React.FC<HomeProperties> = ({ data, ...rest }) => (
  <HomeBox {...rest}>
    <HeroSection data={data?.basic} />
    <ProjectsSection data={data?.works} />
    <PostsSection data={data?.posts} />
  </HomeBox>
)

export { Home }

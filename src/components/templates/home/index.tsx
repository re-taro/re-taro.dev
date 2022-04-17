import React from 'react'
import tw from 'twin.macro'
import type { HomeQuery } from '../../../graphql'
import { HeroSection } from '../../organisms/hero'
import { PostsSection } from '../../organisms/posts'
import { ProjectsSection } from '../../organisms/projects'

const HomeBox = tw.div`mt-[-24]`

type HomeProperties = React.ComponentProps<React.ReactHTML['div']> & {
  data: HomeQuery | undefined
}

const Home: React.VFC<HomeProperties> = ({ data, ...rest }) => (
  <HomeBox {...rest}>
    <HeroSection data={data?.basic} />
    <ProjectsSection data={data?.works} />
    <PostsSection data={data?.posts} />
  </HomeBox>
)

export { Home }

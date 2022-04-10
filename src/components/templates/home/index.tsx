import React from 'react'
import tw from 'twin.macro'
import { HeroSection } from '../../organisms/hero'
import type { Hero } from '../../organisms/hero'
import { PostsSection } from '../../organisms/posts'
import type { Posts } from '../../organisms/posts'
import { ProjectsSection } from '../../organisms/projects'
import type { Projects } from '../../organisms/projects'

const HomeBox = tw.div`mt-[-24]`

export type HomeData = {
  hero: Hero
  posts: Posts
  projects: Projects
}

type HomeProperties = React.ComponentProps<React.ReactHTML['div']> & {
  data: HomeData
}

const Home: React.VFC<HomeProperties> = ({ data, ...rest }) => (
  <HomeBox {...rest}>
    <HeroSection data={data.hero} />
    <ProjectsSection data={data.projects} />
    <PostsSection data={data.posts} />
  </HomeBox>
)

export { Home }

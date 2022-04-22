import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../components/atoms/button'
import { Heading } from '../components/atoms/heading'
import { Text } from '../components/atoms/text'

const ImageBox = tw.div`w-full sm:w-[70%] md:w-[60%] lg:w-[60%] my-0 mx-auto`

const Image = tw.img``

const NotFound: NextPage = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  return (
    <div>
      <ImageBox>
        <Image
          src={mounted && theme === 'dark' ? '/not_found_dark.svg' : '/not_found_light.svg'}
          alt={'404 Not found'}
        />
      </ImageBox>
      <Text as={'p'} css={tw`text-center text-sm cursor-pointer hover:underline`}>
        <a href={'https://undraw.co/illustrations'} target={'_blank'} rel={'noopener noreferrer'}>
          Illustrations by undraw
        </a>
      </Text>
      <div css={tw`my-4`}>
        <Heading as={'h3'} css={tw`text-center mb-2`}>
          Seems like you&apos;re lost.
        </Heading>
        <div css={tw`text-center`}>
          <Link href={'/'} passHref>
            <Button variant={'normal'} as={'a'}>
              Let&apos;s Head Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

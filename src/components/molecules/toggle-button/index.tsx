import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button } from '~/components/atoms/button'

const ToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  return (
    <Button
      as={'button'}
      aria-label={'Toggle theme'}
      variant={'icon'}
      leftIcon={mounted && theme === 'dark' ? 'ri:sun-fill' : 'ri:moon-fill'}
      iconStyles={tw`text-2xl`}
      boxStyles={tw`transition ease-in-out delay-150 p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 hover:-translate-y-1 w-8 h-8 mx-1`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}

export { ToggleButton }

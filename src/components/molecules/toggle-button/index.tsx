import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'

const ToggleButton: React.VFC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  return (
    <Button
      as={'button'}
      variant={'icon'}
      leftIcon={mounted && theme === 'dark' ? 'ri:moon-fill' : 'ri:sun-fill'}
      iconStyles={tw`bg-snow-100 dark:bg-night-200 text-2xl hover:bg-snow-200 dark:hover:bg-night-300`}
      boxStyles={tw`p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 w-8 h-8 mx-1`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}

export { ToggleButton }

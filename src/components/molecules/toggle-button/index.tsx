import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'

const ToggleButton: React.VFC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
      document.querySelector('html')?.classList.add('dark')
    } else {
      setDarkMode(false)
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [darkMode])
  const toggleDarkMode = (): void => {
    if (darkMode) {
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }
  return (
    <Button
      as={'button'}
      variant={'icon'}
      icon={darkMode ? 'ri:moon-fill' : 'ri:sun-fill'}
      iconStyles={tw`bg-snow-100 dark:bg-night-200 text-2xl hover:bg-snow-200 dark:hover:bg-night-300`}
      boxStyles={tw`p-1 hover:outline-none hover:ring-2 hover:ring-frost-100 w-8 h-8 mx-1`}
      onClick={() => toggleDarkMode()}
    />
  )
}

export { ToggleButton }

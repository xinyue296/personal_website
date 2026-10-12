'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'light' ? (
        <SunIcon className='size-4 text-amber-500' />
      ) : (
        <MoonIcon className='size-4 text-blue-200' />
      )}

      <span className='sr-only'>ThemeSwitch: Light/Dark</span>
    </Button>
  )
}

export default ThemeSwitch

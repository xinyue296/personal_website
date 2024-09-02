'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Sun, Moon } from 'lucide-react'
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
        <Sun className='size-4 text-amber-500' />
      ) : (
        <Moon className='size-4 text-blue-200' />
      )}

      <span className='sr-only'>ThemeSwitch: Light/Dark</span>
    </Button>
  )
}

export default ThemeSwitch

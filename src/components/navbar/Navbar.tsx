'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

import ThemeSwitch from '@/components/navbar/ThemeSwitch'
import { Button } from '../ui/button'

const navLinks = [
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'CV',
    path: '/cv'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close on navigation, so the panel never lingers over the new page.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Escape closes the panel, matching how menus are expected to behave.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-card/85 py-6'>
    <header className='fixed inset-x-0 top-0 z-50 bg-card/85 py-6'>
      <nav className='container flex max-w-4xl items-center justify-between'>
        {/* Logo */}
        <div>
          <Link
            href={'/'}
            className='text-bold font-serif text-xl text-muted-foreground hover:text-card-foreground'
            className='text-bold font-serif text-xl text-muted-foreground hover:text-card-foreground'
          >
            C.Tao
          </Link>
        </div>

        {/* Navigation, inline from sm up */}
        <ul className='hidden items-center gap-6 text-sm font-normal sm:flex md:gap-10'>
          {navLinks.map(link => (
            <li
              key={link.path}
              className='text-semibold text-muted-foreground transition-colors hover:text-card-foreground'
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Utility buttons */}
        <div className='flex items-center gap-1'>
          <ThemeSwitch />
          <Button
            size='icon'
            variant='ghost'
            className='sm:hidden'
            aria-expanded={open}
            aria-controls='mobile-menu'
            onClick={() => setOpen(value => !value)}
          >
            {open ? (
              <Cross1Icon className='size-4' />
            ) : (
              <HamburgerMenuIcon className='size-4' />
            )}
            <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
          </Button>
        </div>
      </nav>

      {/* Dropdown, mobile only */}
      {open && (
        <div id='mobile-menu' className='container max-w-4xl sm:hidden'>
          <ul className='mt-3 flex flex-col overflow-hidden rounded-xl border border-border bg-card'>
            {navLinks.map(link => (
              <li
                key={link.path}
                className='border-b border-border last:border-b-0'
              >
                <Link
                  href={link.path}
                  className='block px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-card-foreground'
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar

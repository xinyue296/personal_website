import React from 'react'
import ThemeSwitch from '@/components/navbar/ThemeSwitch'
import Link from 'next/link'

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
    title: 'Contact',
    path: '/contact'
  }
]

const Navbar = () => {
  return (
    <header className='bg-background.75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-4xl items-center justify-between'>
        {/* Logo */}
        <div>
          <Link href={'/'} className='font-serif text-xl text-muted-foreground'>
            C.Tao
          </Link>
        </div>

        {/* Navigation */}
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          {navLinks.map(link => (
            <li
              key={link.path}
              className='transition-colors hover:text-foreground'
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Utitlity Buttons */}
        <div>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  )
}

export default Navbar

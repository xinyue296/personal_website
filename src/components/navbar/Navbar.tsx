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
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

const Navbar = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-card/85 py-6'>
      <nav className='container flex max-w-4xl items-center justify-between'>
        {/* Logo */}
        <div>
          <Link
            href={'/'}
            className='text-bold font-serif text-xl text-muted-foreground hover:text-card-foreground'
          >
            C.Tao
          </Link>
        </div>

        {/* Navigation */}
        <ul className='flex items-center gap-4 text-xs font-normal sm:gap-10 sm:text-sm'>
          {navLinks.map(link => (
            <li
              key={link.path}
              className='text-semibold text-muted-foreground transition-colors hover:text-card-foreground'
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

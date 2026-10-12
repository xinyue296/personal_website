'use client'
import React from 'react'
import Image from 'next/image'
import RollingText from './RollingText'
import Link from 'next/link'
import { Button } from '../ui/button'

const Intro = () => {
  return (
    <section className='flex flex-col items-start pb-24 md:items-center md:justify-around'>
      <div className='flex flex-col gap-x-12 md:flex-row-reverse'>
        {/* Photo */}
        <div className='relative flex shrink-0 items-center'>
          <Image
            className='justify-center rounded-full duration-200 hover:scale-105'
            src='/assets/intro/cindy_profile_1.jpg'
            alt='Photo of Cindy'
            width={175}
            height={175}
            quality={100}
            priority
          />
        </div>
        <div>
          {/* Text Intro */}
          <div className='my-4 items-start'>
            <h1 className='title no-underline'>Hey, I&#39;m Cindy,</h1>
            <RollingText />
            <p className='my-2 max-w-xl font-light text-muted-foreground'>
              Welcome to my digital corner! I&#39;m a computer science and
              statistics student at the University of Toronto, in my final
              year. I spent sixteen months building backend and systems work
              at a regulated fintech, and I like the parts of a system that
              only get interesting under load. Feel free to explore or
              connect!
            </p>
          </div>
          {/* Buttons */}
          <div className='flex flex-row gap-5'>
            <Button onClick={() => {}}>
              <Link href='/contact'>Let&apos;s Connect!</Link>
            </Button>
            <Button variant='secondary' onClick={() => {}}>
              <Link href='/cv'>View CV</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro

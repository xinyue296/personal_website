import React from 'react'
import Image from 'next/image'
import RollingText from './RollingText'
import Link from 'next/link'
import { Button } from '../ui/button'

const Intro = () => {
  return (
    <section className='flex flex-col items-start pb-24 md:items-center'>
      <div className='flex flex-col gap-x-10 gap-y-4 pb-4 md:flex-row-reverse'>
        {/* Photo */}
        <div className='relative'>
          <Image
            className='flex-1 rounded-full duration-200 hover:scale-105'
            src='/assets/cindy_profile_1.jpg'
            alt='Photo of Cindy'
            width={175}
            height={175}
            quality={100}
            priority
          />
        </div>
        {/* Text Intro */}
        <div className='mt-4 flex-1 items-start md:mt-0'>
          <h1 className='title no-underline'>Hey, I&#39;m Cindy,</h1>
          <RollingText />
          <p className='mt-3 font-light text-muted-foreground'>
            I&#39;m a software engineer based in Toronto, Canada. I&#39;m
            passionate about learning new technologies. Welcome to my digital
            corner!
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className='flex flex-row gap-4'>
        <Button variant='outline' onClick={() => {}}>
          <Link
            href='/contact'
            className='mx-6 my-3 inline-block w-full rounded-full sm:w-fit'
          >
            Let&apos;s Connect!
          </Link>
        </Button>
        <Button variant='secondary' onClick={() => {}}>
          <Link
            href='/'
            className='mx-6 my-3 inline-block w-full rounded-full sm:w-fit'
          >
            Download CV
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Intro

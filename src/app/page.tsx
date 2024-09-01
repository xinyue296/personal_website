'use client'
import Home from '@/app/home/page'
import About from './about/page'
import Projects from './projects/page'
import Contact from './contact/page'
import Intro from '@/components/intro/Intro'

export default function App() {
  return (
    <main>
      <section className='py-24'>
        <div className='container max-w-4xl'>
          <Intro />
        </div>
      </section>
      {/* <Home /> */}
      {/* <About />
      <Projects />
      <Contact /> */}
    </main>
  )
}

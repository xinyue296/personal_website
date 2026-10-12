import Intro from '@/components/intro/Intro'
import Experience from '@/components/intro/Experience'
import RecentProjects from '@/components/intro/RecentProjects'

export default function App() {
  return (
    <main>
      <section className='py-24'>
        <div className='container max-w-4xl'>
          <Intro />
          <Experience />
          <RecentProjects />
        </div>
      </section>
    </main>
  )
}


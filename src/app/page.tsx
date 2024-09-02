import Intro from '@/components/intro/Intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function App() {
  const content = `
  # This is a markdown heading`

  return (
    <main>
      <section className='py-24'>
        <div className='container max-w-4xl'>
          <Intro />

          <MDXRemote source={content} />
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/Projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section className='pb-24'>
      <h2 className='subtitle mb-8'>Recent projects</h2>
      <Projects projects={projects} />

      <Link
        href='/projects'
        className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
      >
        <span>View all projects</span>
      </Link>
    </section>
  )
}

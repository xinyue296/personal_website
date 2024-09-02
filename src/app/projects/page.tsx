import Projects from '@/components/Projects'
import { getProjects } from '@/lib/projects'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const ProjectsPage = async () => {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-4xl'>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to main</span>
        </Link>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsPage

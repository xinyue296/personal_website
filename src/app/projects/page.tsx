import Projects from '@/components/Projects'
import { getProjects } from '@/lib/projects'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const ProjectsPage = async () => {
  const projects = await getProjects()

  return (
    <section className='py-24'>
      <div className='container max-w-4xl'>
        <Breadcrumbs
          items={[{ label: 'Main', href: '/' }, { label: 'Projects' }]}
        />
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsPage

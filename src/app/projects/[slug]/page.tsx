import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import { MDXContent } from '@/components/MDX-content'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const project = await getProjectBySlug(params.slug)
  if (!project) {
    return { title: 'Projects | Cindy Tao' }
  }

  const { title, summary, noindex } = project.metadata

  return {
    title: `${title} | Cindy Tao`,
    description: summary,
    ...(noindex ? { robots: { index: false, follow: true } } : {})
  }
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt, pixelated } = metadata

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Breadcrumbs
          items={[
            { label: 'Main', href: '/' },
            { label: 'Projects', href: '/projects' },
            { label: title ?? slug }
          ]}
        />

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              unoptimized={pixelated}
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}

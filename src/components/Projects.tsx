import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image ? (
              <div className='h-64 w-full overflow-hidden sm:h-48'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  unoptimized={project.pixelated}
                  fill
                  className='rounded-xl object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            ) : (
              <div className='flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary to-muted px-6 dark:border-muted dark:from-muted/60 dark:to-background sm:h-48'>
                <span className='text-center font-serif text-2xl font-semibold text-cyan-600'>
                  {project.title}
                </span>
              </div>
            )}

            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>
              <p className='text-xs font-light text-muted-foreground'>
                {formatDate(project.publishedAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

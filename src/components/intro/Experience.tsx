import React from 'react'

export type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  description: string[]
  link?: string
}

const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer (Co-op)',
    company: 'Tetra Digital Group',
    location: 'Toronto, Canada',
    period: 'May 2025 \u2013 Aug. 2026',
    link: 'https://tetradg.com',
    description: [
      'Scaled a data export pipeline to paginated, parallel, queue-backed processing on AWS Lambda, Step Functions, and SQS.',
      'Benchmarked it under rising concurrency and sized the worker pool to the real bottleneck.',
      'Traced data-consistency issues to their root cause and proposed a longer-term redesign.',
      'Automated monthly billing for the finance team, built around how they actually worked.',
      'Migrated an operations workflow to a new platform, owning backend services and a React UI.',
      'Built parts of an event-driven audit service in Go on NATS JetStream.',
      'Led hiring for the next co-op with my manager, and helped mentor the new hire.'
    ]
  }
]

export default function Experience() {
  return (
    <section className='pb-12'>
      <h2 className='subtitle mb-8'>Experience</h2>
      <div className='relative ml-2 flex flex-col gap-12 border-l border-border pl-6 dark:border-muted sm:ml-4'>
        {experiences.map((exp, index) => (
          <div key={index} className='group relative'>
            <div className='mb-2 flex flex-col gap-1 md:flex-row md:items-start md:justify-between'>
              <div>
                <h3 className='text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-cyan-600'>
                  {exp.role}
                </h3>
                <div className='text-sm font-medium text-muted-foreground'>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-foreground hover:underline'
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                  <span className='mx-2'>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <span className='w-fit rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-light text-muted-foreground dark:border-secondary dark:bg-secondary/60 md:mt-1'>
                {exp.period}
              </span>
            </div>

            <ul className='ml-4 mt-3 list-outside list-disc space-y-2 text-sm font-light leading-relaxed text-muted-foreground'>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

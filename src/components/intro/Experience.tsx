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
      'Scaled a data export pipeline that had outgrown its original design, moving it to paginated, parallel, queue-backed processing on AWS Lambda, Step Functions, and SQS.',
      'Benchmarked that pipeline under rising concurrency to find where parallelism stopped paying off, then sized the worker pool to the real constraint instead of a guess.',
      'Investigated data-consistency issues down to their root causes with throwaway triage scripts, and proposed a longer-term redesign.',
      'Automated a monthly billing workflow for the finance team, starting from how they actually worked rather than the written spec, and following up with them after release to plan what came next.',
      'Migrated an operations workflow from a legacy platform to a new one, owning the internal-facing side across backend services and a React UI.',
      'Built parts of an event-driven audit service in Go on NATS JetStream so two platforms could share one audit trail.',
      'Led hiring for the next co-op with my manager and helped mentor the new hire.'
    ]
  }
]

export default function Experience() {
  return (
    <section className='pb-24'>
      <h2 className='subtitle mb-8'>Experience</h2>
      <div className='relative border-l border-muted pl-6 ml-2 sm:ml-4 flex flex-col gap-12'>
        {experiences.map((exp, index) => (
          <div key={index} className='relative group'>
            {/* Dot on Timeline */}
            <div className='absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full border border-muted bg-background group-hover:border-cyan-600 transition-colors duration-300' />
            
            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2'>
              <div>
                <h3 className='text-lg font-semibold text-foreground group-hover:text-cyan-600 transition-colors duration-300'>
                  {exp.role}
                </h3>
                <div className='text-sm font-medium text-muted-foreground'>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline hover:text-foreground'
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
              <span className='text-xs font-light text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-full border border-muted w-fit md:mt-1'>
                {exp.period}
              </span>
            </div>

            <ul className='list-disc list-outside ml-4 text-sm font-light text-muted-foreground space-y-2 mt-3 leading-relaxed'>
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

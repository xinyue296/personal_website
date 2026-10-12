import Link from 'next/link'
import Image from 'next/image'
import Experience from '@/components/intro/Experience'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'About | Cindy Tao',
  description:
    'Xinyue (Cindy) Tao is a computer science and statistics student at the University of Toronto working on systems, performance, and full-stack engineering.'
}

const photos = [
  {
    src: '/assets/about/canam-cup.jpg',
    alt: 'My dragon boat team walking down to the docks before racing at the Can-Am Cup',
    width: 1200,
    height: 900
  },
  {
    src: '/assets/about/toronto-islands.jpg',
    alt: 'Me holding my paddle in the park before the Toronto Islands regatta',
    width: 900,
    height: 1200
  },
  {
    src: '/assets/about/mos.jpg',
    alt: 'Mos, my cat, asleep against my arm',
    width: 1200,
    height: 900
  },
  {
    src: '/assets/about/light-installation.jpg',
    alt: 'A silhouette against a wall of projected flowers at a light installation',
    width: 1200,
    height: 901
  }
]

const About = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-4xl'>
        <Breadcrumbs
          items={[{ label: 'Main', href: '/' }, { label: 'About' }]}
        />
        <h1 className='title mb-12'>About</h1>

        {/* Journey */}
        <div className='my-8 items-start'>
          <h2 className='sectitle text-primary'>Journey</h2>
          <p className='my-2 font-normal text-muted-foreground'>
            I grew up in Shanghai, studied economics at Waseda University in
            Tokyo, and now study computer science and statistics at the
            University of Toronto. I did not start out as an engineer. What
            pulled me in was WasedaTime, a student-run campus web app, where I
            joined as a frontend developer and ended up as its product manager
            too. That is where I learned I care as much about building the right
            thing as about building it well.
          </p>
          <p className='my-2 font-normal text-muted-foreground'>
            From May 2025 to August 2026 I was a software engineer co-op at{' '}
            <a
              href='https://tetradg.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
            >
              Tetra Digital Group
            </a>
            , a fintech building custody and stablecoin infrastructure for
            institutions. Over sixteen months I went from validating other
            people&rsquo;s fixes to owning features end to end. I re-architected
            a transaction export that could not finish its largest jobs, traced
            data inconsistencies back to their root causes, automated invoicing
            for the finance team, migrated signing operations to a new platform,
            and built the event pipeline that lets two platforms share one audit
            trail.
          </p>
          <p className='my-2 font-normal text-muted-foreground'>
            The thread through most of it is systems that worked when they were
            small and started breaking once people relied on them. I like
            finding out why, and I like asking whether we are fixing the right
            thing before I start.
          </p>
        </div>

        {/* Now */}
        <div className='my-8 items-start'>
          <h2 className='sectitle text-primary'>Now</h2>
          <p className='my-2 font-normal text-muted-foreground'>
            I am in my final year at U of T, taking Computer Systems Programming
            and building two projects. ChartProof is my capstone with three
            teammates, an independent accuracy checker for AI medical scribes.
            The AI Marketing Agent is a multi-tenant agentic RAG platform built
            with a collaborator, where I own product direction and evaluation.
          </p>
          <p className='my-2 font-normal text-muted-foreground'>
            I am looking for full-time software engineering roles starting in
            2027. The work I want most sits where systems meet measurement,
            debugging why something is slow or wrong and then proving the fix.
            Full-stack product work is the other half of that, and it is where
            most of my shipped experience lives.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className='my-8'>
          <Experience />
        </div>

        {/* What I work with */}
        <div className='my-8 items-start'>
          <h2 className='sectitle text-primary'>What I work with</h2>
          <p className='my-2 font-normal text-muted-foreground'>
            Most of my production work was in TypeScript and Node.js on
            PostgreSQL, with AWS around it. Lambda, Step Functions, SQS, and S3
            for pipelines, and Terraform for infrastructure. I picked up Go and
            NATS JetStream on the job to build an event-driven service, and I am
            comfortable reading and writing both. I still build frontends when a
            project needs one, mostly React, Next.js, and Tailwind, and this
            site is one of them.
          </p>
          <p className='my-2 font-normal text-muted-foreground'>
            Closer to the metal, I work in C, C++, and MIPS assembly through my
            systems coursework, and the habits I care about most came from
            there. Reading a profile before changing anything, finding the
            actual bottleneck instead of the suspected one, and being precise
            about concurrency.
          </p>
          <p className='my-2 font-normal text-muted-foreground'>
            The statistics half of my degree means R, Python, and SQL for
            analysis feel familiar. Machine learning is the direction I am
            moving in, through my capstone and coursework. What interests me is
            not models for their own sake but using measurement and data to
            understand how systems behave.
          </p>
        </div>

        {/* Outside work */}
        <div className='my-8 items-start'>
          <h2 className='sectitle text-primary'>Outside work</h2>
          <p className='my-2 font-normal text-muted-foreground'>
            I paddled with a Toronto dragon boat team in 2026, training three or
            more times a week and racing at the Toronto Islands regatta and the
            Can-Am Cup in Montreal. I joined to push my fitness and step outside
            my social comfort zone, and it turned out to be one of the most fun
            parts of my year.
          </p>
          <p className='my-2 font-normal text-muted-foreground'>
            I also sing with the Hart House Singers. When I need to unwind I
            take photos, walk the city without a plan, or find somewhere near
            the water.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            {photos.map(photo => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className='h-48 w-auto rounded-lg object-cover lg:h-40'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

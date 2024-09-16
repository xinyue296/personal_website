import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const About = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-4xl'>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to main</span>
        </Link>
        <h1 className='title mb-12'>About</h1>
        {/* Journey */}
        <div className='my-8 items-start'>
          <h1 className='sectitle text-primary'>Journey</h1>
          <p className='my-2 font-normal text-muted-foreground'>
            I was born and raised in Shanghai, China, and my path has taken me
            from Waseda University in Japan to the University of Toronto in
            Canada. Interestingly, I initially majored in Economics before I
            discovered my true passion for software engineering. During my time
            at Waseda, I joined a student-run project called WasedaTime, where I
            worked on frontend web development. This experience allowed me to
            contribute to real projects while honing my ability to prioritize
            tasks and collaborate with a team. Over time, I learned that being
            open to seeking help and taking on new challenges accelerated both
            my personal and professional growth.
          </p>
        </div>

        {/* What i do */}
        <div className='my-8 items-start'>
          <h1 className='sectitle text-primary'>Skills</h1>
          <p className='my-2 font-normal text-muted-foreground'>
            I have developed a versatile skill set, with a focus on both data
            analytics and full-stack development. My technical expertise
            includes Python, R, SQL, and Excel for data analytics, and React,
            TypeScript, Next.js, JavaScript, HTML, CSS, Java, and C++ for
            full-stack software engineering. Additionally, I’m proficient in
            design tools like Figma and Canva. I’ve applied these skills across
            various projects, from building interactive dashboards to developing
            user-friendly web interfaces.
          </p>
        </div>

        {/* Fun Facts */}
        <div className='my-8 items-start'>
          <h1 className='sectitle text-primary'>Hobbies & Fun Facts</h1>
          <p className='my-2 font-normal text-muted-foreground'>
            Outside of my technical work, I’m passionate about music and
            singing. I’ve joined the Hart House Singers to pursue my love for
            singing. Recently, I’ve also started strength training, which has
            become a new source of motivation. Photography is another creative
            outlet I enjoy. When I need to unwind, I love taking spontaneous
            city walks or escaping into nature, finding peace in the breeze of
            the sea or the misty air of forested hills.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

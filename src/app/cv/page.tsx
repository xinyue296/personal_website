import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { MDXContent } from '@/components/MDX-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export const metadata = {
  title: 'CV | Cindy Tao',
  description:
    'Curriculum vitae for Xinyue (Cindy) Tao, backend and distributed systems engineer in Toronto.'
}

export default async function CVPage() {
  let cvContent = ''
  try {
    const cvPath = path.join(process.cwd(), 'src', 'content', 'cv.md')
    cvContent = await fs.readFile(cvPath, 'utf8')
  } catch (error) {
    console.error('Error reading CV file:', error)
    cvContent = '# Error\nCould not load CV. Please check if src/content/cv.md exists.'
  }

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        {/* Back Link */}
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to main</span>
        </Link>

        {/* CV Render */}
        <main className='prose dark:prose-invert max-w-none mt-8 border border-muted p-8 rounded-2xl bg-card shadow-sm'>
          <MDXContent source={cvContent} />
        </main>
      </div>
    </section>
  )
}

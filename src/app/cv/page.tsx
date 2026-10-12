import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'
import { MDXContent } from '@/components/MDX-content'
import Breadcrumbs from '@/components/Breadcrumbs'

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
    cvContent =
      '# Error\nCould not load CV. Please check if src/content/cv.md exists.'
  }

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Breadcrumbs items={[{ label: 'Main', href: '/' }, { label: 'CV' }]} />

        {/* CV Render */}
        <main className='prose mt-8 max-w-none rounded-2xl border border-border bg-card p-8 shadow-sm dark:prose-invert dark:border-muted'>
          <MDXContent source={cvContent} />
        </main>
      </div>
    </section>
  )
}

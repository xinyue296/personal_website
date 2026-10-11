import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { getPosts } from '@/lib/writing'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Writing | Cindy Tao',
  description:
    'Essays and reflections on engineering, systems, and what I learned building them.'
}

export default async function WritingPage() {
  const posts = await getPosts()

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
        <h1 className='title mb-4'>Writing</h1>
        <p className='mb-12 max-w-2xl font-light text-muted-foreground'>
          Notes on the things I build and what they taught me.
        </p>

        {posts.length === 0 ? (
          <p className='font-light text-muted-foreground'>
            Nothing published yet. Check back soon.
          </p>
        ) : (
          <ul className='flex flex-col gap-8'>
            {posts.map(post => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className='group block rounded-xl border border-muted bg-card/40 p-6 transition-colors hover:border-cyan-600/50'
                >
                  <h2 className='font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-cyan-600'>
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className='mt-2 text-sm font-light text-muted-foreground'>
                      {post.summary}
                    </p>
                  )}
                  <p className='mt-3 text-xs font-light text-muted-foreground'>
                    {formatDate(post.publishedAt ?? '')}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

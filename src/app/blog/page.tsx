import Link from 'next/link'

import { getPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Blog | Cindy Tao',
  description:
    'Essays and reflections on engineering, systems, and what I learned building them.'
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <section className='py-24'>
      <div className='container max-w-4xl'>
        <Breadcrumbs
          items={[{ label: 'Main', href: '/' }, { label: 'Blog' }]}
        />
        <h1 className='title mb-4'>Blog</h1>
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
                  href={`/blog/${post.slug}`}
                  className='group block rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-cyan-600/50 dark:border-muted'
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

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { formatDate } from '@/lib/utils'
import { MDXContent } from '@/components/MDX-content'
import { getPostBySlug, getPosts } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Blog | Cindy Tao' }
  }
  return {
    title: `${post.metadata.title} | Cindy Tao`,
    description: post.metadata.summary
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, author, publishedAt } = metadata

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Link
          href='/blog'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to blog</span>
        </Link>

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

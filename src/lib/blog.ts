import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'blog')

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  try {
    const files = await fs.readdir(rootDirectory)

    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => getPostMetadata(file))
    )

    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.publishedAt ?? '')
      const dateB = new Date(b.publishedAt ?? '')
      return dateB.getTime() - dateA.getTime() // Sort by latest date
    })

    if (limit) {
      return sortedPosts.slice(0, limit)
    }

    return sortedPosts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPostMetadata(
  filepath: string
): Promise<PostMetadata> {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = await fs.readFile(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}

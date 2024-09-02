import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'projects')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  try {
    const files = await fs.readdir(rootDirectory)

    const projects = await Promise.all(
      files.map(async file => getProjectMetadata(file))
    )

    const sortedProjects = projects.sort((a, b) => {
      const dateA = new Date(a.publishedAt ?? '')
      const dateB = new Date(b.publishedAt ?? '')
      return dateB.getTime() - dateA.getTime() // Sort by latest date
    })

    if (limit) {
      return sortedProjects.slice(0, limit)
    }

    return sortedProjects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectMetadata(
  filepath: string
): Promise<ProjectMetadata> {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = await fs.readFile(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}

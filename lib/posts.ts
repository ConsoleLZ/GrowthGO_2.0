import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: string
  readingTime: number
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  // 检查目录是否存在
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        description: matterResult.data.description || '',
        date: matterResult.data.date || new Date().toISOString(),
        tags: matterResult.data.tags || [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts.map(post => ({
    ...post,
    readingTime: 0
  }))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // 计算阅读时间（假设平均阅读速度 200 字/分钟）
    const wordCount = matterResult.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      description: matterResult.data.description || '',
      date: matterResult.data.date || new Date().toISOString(),
      tags: matterResult.data.tags || [],
      content: contentHtml,
      readingTime,
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}
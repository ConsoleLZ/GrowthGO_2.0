import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'

// 准确的中文字数统计函数
function countChineseCharacters(text: string): number {
  // 移除markdown语法标记
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/`[^`]*`/g, '') // 移除行内代码
    .replace(/!\[.*?\]\(.*?\)/g, '') // 移除图片
    .replace(/\[.*?\]\(.*?\)/g, '') // 移除链接
    .replace(/#{1,6}\s/g, '') // 移除标题标记
    .replace(/[*_~`]/g, '') // 移除粗体、斜体等标记
    .replace(/<!--[\s\S]*?-->/g, '') // 移除HTML注释
    .replace(/<[^>]*>/g, '') // 移除HTML标签
    .replace(/\n/g, ' ') // 将换行符替换为空格
    .replace(/\s+/g, ' ') // 合并多个空格
    .trim();
  
  // 统计中文字符（包括中文标点）
  const chineseCharCount = (cleanText.match(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/g) || []).length;
  
  // 统计英文字符（单词）
  const englishWordCount = (cleanText.match(/[a-zA-Z]+/g) || []).length;
  
  // 统计数字
  const numberCount = (cleanText.match(/\b\d+\b/g) || []).length;
  
  // 总字数 = 中文字符数 + 英文单词数 + 数字数
  return chineseCharCount + englishWordCount + numberCount;
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: string
  readingTime: number
  wordCount: number
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

      // 计算字数（准确的中文字数统计）
      const wordCount = countChineseCharacters(matterResult.content)
      // 计算阅读时间（假设平均阅读速度 300 字/分钟）
      const readingTime = Math.ceil(wordCount / 300)

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        description: matterResult.data.description || '',
        date: matterResult.data.date || new Date().toISOString(),
        tags: matterResult.data.tags || [],
        readingTime,
        wordCount,
        recommend: matterResult.data.recommend || false,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
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
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeHighlight)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // 计算字数（准确的中文字数统计）
    const wordCount = countChineseCharacters(matterResult.content)
    // 计算阅读时间（假设平均阅读速度 300 字/分钟）
    const readingTime = Math.ceil(wordCount / 300)

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      description: matterResult.data.description || '',
      date: matterResult.data.date || new Date().toISOString(),
      tags: matterResult.data.tags || [],
      content: contentHtml,
      readingTime,
      wordCount,
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
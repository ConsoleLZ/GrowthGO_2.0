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

function rehypeInlineAttrs() {
  return (tree: any) => {
    const walk = (node: any, parent: any = null, index: number = -1): number | void => {
      if (node.type === 'text') {
        const value: string = node.value
        const re = /\{:([^}]+)\}/g
        if (!re.test(value)) return
        re.lastIndex = 0

        const attrsRe = /(\w[\w-]*)\s*=\s*"([^"]*)"|(\w[\w-]*)\s*=\s*'([^']*)'|\.(\w[\w-]*)|#(\w[\w-]*)/g

        const parseAttrs = (raw: string): Record<string, any> => {
          const attrs: Record<string, any> = {}
          let m: RegExpExecArray | null
          attrsRe.lastIndex = 0
          while ((m = attrsRe.exec(raw)) !== null) {
            if (m[1] !== undefined) attrs[m[1]] = m[2]
            else if (m[3] !== undefined) attrs[m[3]] = m[4]
            else if (m[5] !== undefined) {
              attrs.class = (attrs.class ? attrs.class + ' ' : '') + m[5]
            } else if (m[6] !== undefined) {
              attrs.id = m[6]
            }
          }
          return attrs
        }

        const apply = (target: any, attrs: Record<string, any>) => {
          target.properties = target.properties || {}
          for (const [k, val] of Object.entries(attrs)) {
            if (k === 'class') {
              const existing = target.properties.className
              if (Array.isArray(existing)) existing.push(val)
              else if (typeof existing === 'string') target.properties.className = [existing, val]
              else target.properties.className = [val]
            } else {
              target.properties[k] = val
            }
          }
        }

        const wrapText = (textNode: any, attrs: Record<string, any>): any => {
          const wrapper: any = {
            type: 'element',
            tagName: 'span',
            properties: {},
            children: [{ type: 'text', value: textNode.value }],
          }
          apply(wrapper, attrs)
          return wrapper
        }

        const newChildren: any[] = []
        let lastIdx = 0
        let match: RegExpExecArray | null

        while ((match = re.exec(value)) !== null) {
          const before = value.slice(lastIdx, match.index)
          if (before) newChildren.push({ type: 'text', value: before })

          const attrs = parseAttrs(match[1])

          let target: any = newChildren.length > 0 ? newChildren[newChildren.length - 1] : null
          let targetFromParent = false
          if (!target && parent && Array.isArray(parent.children) && index > 0) {
            target = parent.children[index - 1]
            targetFromParent = true
          }

          if (target && target.type === 'element') {
            apply(target, attrs)
          } else if (target && target.type === 'text') {
            const wrapped = wrapText(target, attrs)
            if (targetFromParent && parent && Array.isArray(parent.children)) {
              parent.children[index - 1] = wrapped
            } else {
              newChildren[newChildren.length - 1] = wrapped
            }
          }

          lastIdx = match.index + match[0].length
        }

        if (lastIdx < value.length) {
          newChildren.push({ type: 'text', value: value.slice(lastIdx) })
        }

        if (parent && Array.isArray(parent.children)) {
          parent.children.splice(index, 1, ...newChildren)
          return index + newChildren.length - 1
        }
        return
      }

      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          const next = walk(node.children[i], node, i)
          if (typeof next === 'number') i = next
        }
      }
    }

    walk(tree)
  }
}

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
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypeInlineAttrs)
      .use(rehypeHighlight)
      .use(rehypeKatex)
      .use(rehypeStringify, { allowDangerousHtml: true })
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

export function hasTableOfContents(contentHtml: string): boolean {
  const regex = /<h[2-4][^>]*>/g
  return regex.test(contentHtml)
}

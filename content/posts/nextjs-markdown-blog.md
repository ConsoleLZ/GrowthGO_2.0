---
title: "使用 Next.js 构建 Markdown 博客"
description: "详细讲解如何使用 Next.js 和 Markdown 构建个人博客系统"
date: "2024-01-20"
tags: ["Next.js", "Markdown", "博客", "教程"]
---

## 项目结构

首先，让我们看一下项目的目录结构：

```
app/
  blog/
    page.tsx          # 博客列表页面
    [slug]/
      page.tsx        # 博客详情页面
content/
  posts/              # Markdown 文章目录
    welcome.md
    nextjs-markdown-blog.md
lib/
  posts.ts            # 文章处理工具函数
```

## 核心实现

### 1. Markdown 文件解析

我们使用 `gray-matter` 来解析 Markdown 文件的前言（frontmatter）和内容：

```typescript
import matter from 'gray-matter'

const fileContents = fs.readFileSync(fullPath, 'utf8')
const matterResult = matter(fileContents)

const { title, description, date, tags } = matterResult.data
const content = matterResult.content
```

### 2. Markdown 到 HTML 转换

使用 `remark` 和 `remark-html` 将 Markdown 内容转换为 HTML：

```typescript
import { remark } from 'remark'
import html from 'remark-html'

const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
const contentHtml = processedContent.toString()
```

### 3. 文章列表获取

```typescript
export function getAllPosts(): Omit<Post, 'content'>[] {
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

  return posts
}
```

## 页面实现

### 博客列表页面

博客列表页面显示所有文章的摘要信息，支持搜索功能：

```typescript
export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const posts: Post[] = getAllPosts()

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts
    
    const query = searchQuery.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [posts, searchQuery])
}
```

### 博客详情页面

博客详情页面使用动态路由 `[slug]` 来显示具体文章内容：

```typescript
export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  )
}
```

## 优化功能

### 1. 静态生成

使用 `generateStaticParams` 实现静态生成，提高性能：

```typescript
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

### 2. 阅读时间计算

根据文章字数估算阅读时间：

```typescript
const wordCount = matterResult.content.split(/\s+/).length
const readingTime = Math.ceil(wordCount / 200) // 假设 200 字/分钟
```

## 总结

通过这个实现，我们创建了一个功能完整的 Markdown 博客系统，具有以下特点：

- ✅ 支持 Markdown 格式文章
- ✅ 自动解析文章元数据
- ✅ 响应式设计
- ✅ 搜索功能
- ✅ 标签分类
- ✅ 静态生成优化
- ✅ 阅读时间估算

这个博客系统易于扩展，可以轻松添加新功能如评论系统、文章统计等。
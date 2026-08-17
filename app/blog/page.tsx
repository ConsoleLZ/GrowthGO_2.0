import type { Metadata } from 'next'
import { getAllPosts } from "@/lib/posts"
import BlogClient from "./blog-client"
import { CollectionPageJsonLd, BreadcrumbJsonLd } from "@/components/seo-jsonld"

export const metadata: Metadata = {
  title: '技术笔记',
  description: '小哲的技术博客，记录前端开发、AI工具、工程实践、学习笔记等技术文章与经验分享。',
  keywords: ['技术博客', '前端开发', 'AI', '学习笔记', 'React', 'Next.js', 'TypeScript'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: '技术笔记',
    description: '小哲的技术博客，记录前端开发、AI工具、工程实践等技术文章。',
  },
  twitter: {
    title: '技术笔记',
    description: '小哲的技术博客，记录前端开发、AI工具、工程实践等技术文章。',
  },
}

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <CollectionPageJsonLd
        title="技术笔记"
        description="小哲的技术博客，记录前端开发、AI工具、工程实践等技术文章。"
        url="/blog"
      />
      <BreadcrumbJsonLd
        items={[
          { name: '首页', url: '/' },
          { name: '技术笔记' },
        ]}
      />
      <BlogClient posts={posts} />
    </>
  )
}
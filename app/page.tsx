import type { Metadata } from 'next'
import { getAllPosts } from "@/lib/posts"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: '首页',
  description: '小哲的个人主页——个人信息、简历展示、技术博客、精选资源导航。分享前端开发、AI工具、设计资源与学习资料。',
  keywords: ['小哲', '个人主页', '个人简历', '技术博客', '资源导航', '前端开发'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: '首页',
    description: '小哲的个人主页——个人信息、简历展示、技术博客、精选资源导航。',
  },
  twitter: {
    title: '首页',
    description: '小哲的个人主页——个人信息、简历展示、技术博客、精选资源导航。',
  },
}

export default function HomePage() {
  const posts = getAllPosts()
  return <HomeClient posts={posts} />
}

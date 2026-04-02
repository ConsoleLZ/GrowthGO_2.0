"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { NavHeader } from "@/components/nav-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

interface BlogClientProps {
  posts: Post[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts
    
    const query = searchQuery.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [posts, searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">博客文章</h1>
          <p className="mt-2 text-muted-foreground">
            分享技术心得、项目经验和学习笔记
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Link href={`/blog/${post.slug}`}>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </Link>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    {new Date(post.date).toLocaleDateString('zh-CN')}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">没有找到相关文章</p>
          </div>
        )}
      </main>
    </div>
  )
}
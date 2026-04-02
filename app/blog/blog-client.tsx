"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { NavHeader } from "@/components/nav-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // 获取所有标签及其计数
  const tagsWithCount = useMemo(() => {
    const tagMap = new Map<string, number>()
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      })
    })
    return Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }))
  }, [posts])

  // 筛选文章
  const filteredPosts = useMemo(() => {
    let result = posts
    
    // 标签筛选
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag))
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    return result
  }, [posts, selectedTag, searchQuery])

  // 切换标签时滚动到顶部
  const handleTagSelect = useCallback((tag: string | null) => {
    setSelectedTag(tag)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 md:py-12">
          {/* Left Sidebar - Fixed Tags with Independent Scroll */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="fixed top-24 h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
              <h2 className="mb-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                文章标签
              </h2>
              <nav className="space-y-1 pr-4">
                <button
                  onClick={() => handleTagSelect(null)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                    !selectedTag
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>全部</span>
                  <span className="text-xs opacity-60">{posts.length}</span>
                </button>
                {tagsWithCount.map(({ tag, count }) => (
                  <button
                    key={tag}
                    onClick={() => handleTagSelect(tag)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                      selectedTag === tag
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <span>{tag}</span>
                    <span className="text-xs opacity-60">{count}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Tags - Horizontal Scroll */}
            <div className="md:hidden mb-6">
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  <button
                    onClick={() => handleTagSelect(null)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
                      !selectedTag
                        ? "bg-foreground text-background shadow-sm"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    )}
                  >
                    全部
                  </button>
                  {tagsWithCount.map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => handleTagSelect(tag)}
                      className={cn(
                        "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
                        selectedTag === tag
                          ? "bg-foreground text-background shadow-sm"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Header and Search */}
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

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg border border-border/50 p-4 transition-colors hover:border-border hover:bg-muted/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('zh-CN')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">没有找到相关文章</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
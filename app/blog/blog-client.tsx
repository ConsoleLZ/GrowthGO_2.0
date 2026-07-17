"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import Link from "next/link"
import { SimpleNavigation } from "@/components/simple-navigation"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll"
import { LoadingSpinner } from "@/components/loading-spinner"

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
  const [visibleCount, setVisibleCount] = useState(12)

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

  const filteredPosts = useMemo(() => {
    let result = posts
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag))
    }
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

  const visiblePosts = useMemo(() => filteredPosts.slice(0, visibleCount), [filteredPosts, visibleCount])
  const hasMore = visibleCount < filteredPosts.length

  const handleLoadMore = useCallback(() => setVisibleCount(prev => prev + 12), [])
  const { isLoading, resetLoading } = useInfiniteScroll({ hasMore, onLoadMore: handleLoadMore })

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => resetLoading(), 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading, resetLoading])

  useEffect(() => { setVisibleCount(12) }, [searchQuery, selectedTag])

  const handleTagSelect = useCallback((tag: string | null) => {
    setSelectedTag(tag)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      <main className="pt-20 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 md:py-12">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
              <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                文章标签
              </h2>
              <nav className="space-y-0.5 pr-4">
                <button
                  onClick={() => handleTagSelect(null)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[8px] px-3 py-2 text-[13px] transition-colors",
                    !selectedTag
                      ? "bg-accent text-accent-on"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <span>全部</span>
                  <span className="text-[11px] opacity-60">{posts.length}</span>
                </button>
                {tagsWithCount.map(({ tag, count }) => (
                  <button
                    key={tag}
                    onClick={() => handleTagSelect(tag)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-[8px] px-3 py-2 text-[13px] transition-colors",
                      selectedTag === tag
                        ? "bg-accent text-accent-on"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    <span>{tag}</span>
                    <span className="text-[11px] opacity-60">{count}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Mobile tags */}
            <div className="md:hidden mb-6 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                <button onClick={() => handleTagSelect(null)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-1.5 text-[13px] font-medium transition-all",
                    !selectedTag ? "bg-accent text-accent-on" : "bg-secondary/50 text-muted-foreground"
                  )}
                >全部</button>
                {tagsWithCount.map(({ tag, count }) => (
                  <button key={tag} onClick={() => handleTagSelect(tag)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-1.5 text-[13px] font-medium transition-all",
                      selectedTag === tag ? "bg-accent text-accent-on" : "bg-secondary/50 text-muted-foreground"
                    )}
                  >{tag}</button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-serif font-semibold tracking-[-0.01em]">一些零散的个人笔记</h1>
              <p className="mt-1.5 text-[14px] text-muted-foreground">分享技术心得、项目经验和学习记录</p>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-10 bg-secondary/50 border-0 focus-visible:ring-accent/40 text-[14px] rounded-[8px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-[8px] border border-border/50 p-4 transition-all hover:border-border hover:bg-secondary/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] font-medium truncate group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-[12px] text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[11px] text-muted-foreground">{tag}</span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-[11px] text-muted-foreground">+{post.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 text-[11px] text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('zh-CN')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {hasMore && (
              <div className="mt-6 text-center">
                {isLoading ? <LoadingSpinner /> : (
                  <p className="text-[13px] text-muted-foreground">
                    滚动到底部加载更多... ({filteredPosts.length - visiblePosts.length} 篇)
                  </p>
                )}
              </div>
            )}

            {visiblePosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-[14px]">没有找到相关文章</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

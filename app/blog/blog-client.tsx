"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import Link from "next/link"
import { SimpleNavigation } from "@/components/simple-navigation"
import { Input } from "@/components/ui/input"
import { Search, ChevronUp, ChevronDown } from "lucide-react"
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

interface YearGroup {
  year: number
  posts: Post[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [collapsedYears, setCollapsedYears] = useState<Set<number>>(new Set())

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

  const yearGroups = useMemo<YearGroup[]>(() => {
    const groups = new Map<number, Post[]>()
    for (const post of filteredPosts) {
      const year = new Date(post.date).getFullYear()
      if (!groups.has(year)) groups.set(year, [])
      groups.get(year)!.push(post)
    }
    return Array.from(groups.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([year, posts]) => ({
        year,
        posts: posts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
      }))
  }, [filteredPosts])

  const totalCount = filteredPosts.length

  const toggleYear = useCallback((year: number) => {
    setCollapsedYears((prev) => {
      const next = new Set(prev)
      if (next.has(year)) next.delete(year)
      else next.add(year)
      return next
    })
  }, [])

  const handleTagSelect = useCallback((tag: string | null) => {
    setSelectedTag(tag)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    setCollapsedYears(new Set())
  }, [searchQuery, selectedTag])

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return `${d.getMonth() + 1}月${d.getDate()}日`
  }

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      <main className="pt-20 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="py-6 md:py-12">
          <h1 className="text-3xl font-serif font-semibold tracking-[-0.01em]">
            一些零散的个人笔记
          </h1>
          <p className="mt-1.5 text-[14px] text-muted-foreground">
            分享技术心得、项目经验和学习记录
          </p>
        </div>

        {/* Search + Tags */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 pl-10 bg-transparent border-0 border-b border-border rounded-none focus-visible:ring-accent/40 text-[14px]"
            />
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleTagSelect(null)}
              className={cn(
                "rounded-none px-3 py-1 text-[12px] font-medium transition-all",
                !selectedTag
                  ? "bg-accent text-accent-on"
                  : "border border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-foreground"
              )}
            >
              全部
            </button>
            {tagsWithCount.map(({ tag, count }) => (
              <button
                key={tag}
                onClick={() => handleTagSelect(tag)}
                className={cn(
                  "rounded-none px-3 py-1 text-[12px] font-medium transition-all",
                  selectedTag === tag
                    ? "bg-accent text-accent-on"
                    : "border border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-foreground"
                )}
              >
                {tag}
                <span className="ml-1 opacity-60">{count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Year Groups */}
        <div className="space-y-10 pb-20">
          {yearGroups.map(({ year, posts: yearPosts }) => {
            const isCollapsed = collapsedYears.has(year)
            return (
              <section key={year}>
                {/* Year Header */}
                <div
                  className="group mb-3 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleYear(year)}
                >
                  <div className="flex items-center gap-3">
                    <span className="block h-5 w-[3px] bg-foreground/80" />
                    <h2 className="text-[28px] font-serif font-semibold tracking-tight">
                      {year}
                    </h2>
                    <span className="text-[13px] text-muted-foreground">
                      {yearPosts.length} 篇文章
                    </span>
                  </div>
                  <button
                    className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                    aria-label={isCollapsed ? "展开" : "收起"}
                  >
                    {isCollapsed ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronUp className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Articles */}
                {!isCollapsed && (
                  <ul className="divide-y divide-border/40">
                    {yearPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex items-baseline gap-4 py-4 transition-colors hover:bg-secondary/20 -mx-3 px-3 rounded-md"
                        >
                          {/* Date */}
                          <span className="w-16 shrink-0 text-[13px] text-muted-foreground tabular-nums">
                            {formatDate(post.date)}
                          </span>

                          {/* Title + Description */}
                          <div className="min-w-0 flex-1">
                            <h3 className="text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
                              {post.title}
                            </h3>
                            {post.description && (
                              <p className="mt-0.5 text-[12px] text-muted-foreground line-clamp-1">
                                {post.description}
                              </p>
                            )}
                          </div>

                          {/* Tags */}
                          <div className="hidden sm:flex shrink-0 items-center gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-none bg-secondary/60 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )
          })}
        </div>

        {/* Empty state */}
        {totalCount === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-[14px]">没有找到相关文章</p>
          </div>
        )}
      </main>
    </div>
  )
}

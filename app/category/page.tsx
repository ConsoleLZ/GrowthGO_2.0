"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { SimpleNavigation } from "@/components/simple-navigation"
import { SiteCard } from "@/components/site-card"
import { LazyImage } from "@/components/lazy-image"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { sites } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll"

const ITEMS_PER_PAGE = 20

export default function CategoryPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)

  const tagsWithCount = useMemo(() => {
    const tagMap = new Map<string, number>()
    sites.forEach((site) => {
      site.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      })
    })
    return Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }))
  }, [])

  const filteredSites = useMemo(() => {
    let result = sites
    
    // 标签筛选
    if (selectedTag) {
      result = result.filter(site => site.tags.includes(selectedTag))
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(site => 
        site.name.toLowerCase().includes(query) ||
        site.description.toLowerCase().includes(query) ||
        site.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    return result
  }, [selectedTag, searchQuery])

  // 懒加载逻辑
  const sitesToDisplay = useMemo(() => {
    return filteredSites.slice(0, page * ITEMS_PER_PAGE)
  }, [filteredSites, page])

  const hasMore = useMemo(() => {
    return sitesToDisplay.length < filteredSites.length
  }, [sitesToDisplay.length, filteredSites.length])

  const handleLoadMore = useCallback(() => {
    setPage(prev => prev + 1)
  }, [])

  const { isLoading, resetLoading } = useInfiniteScroll({
    hasMore,
    onLoadMore: handleLoadMore
  })

  // 数据加载完成后重置加载状态
  useEffect(() => {
    if (isLoading) {
      // 设置一个延迟来确保数据已经更新
      const timer = setTimeout(() => {
        resetLoading()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading, resetLoading])

  // 搜索或标签变化时重置分页
  useEffect(() => {
    setPage(1)
  }, [searchQuery, selectedTag])

  // 切换标签时滚动到顶部
  const handleTagSelect = useCallback((tag: string | null) => {
    setSelectedTag(tag)
    
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />

      <div className="pt-20 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 md:py-12">
          {/* Left Sidebar - Fixed Tags with Independent Scroll */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="fixed top-24 h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
              <h2 className="mb-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                分类标签
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
                  <span className="text-xs opacity-60">{sites.length}</span>
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

          {/* Mobile Tags - Horizontal Scroll with Better Styling */}
          <div className="md:hidden">
            <div className="mb-4 overflow-x-auto pb-2">
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

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <header className="mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
                {selectedTag || "全部资源"}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                已显示 {sitesToDisplay.length} / {filteredSites.length} 个资源
              </p>
            </header>

            {/* Search Box */}
            <div className="relative mb-6 md:mb-8">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索资源..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 sm:h-11 pl-10 bg-muted/50 border-0 focus-visible:ring-1 text-sm sm:text-base"
              />
            </div>

            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
              {sitesToDisplay.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg md:rounded-xl border border-border/50 bg-card p-3 md:p-4 transition-all hover:border-border hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg bg-muted overflow-hidden">
                      <LazyImage
                        src={site.ico}
                        alt={site.name}
                        className="h-4 w-4 md:h-6 md:w-6 object-contain"
                        fallback={<span className="text-xs md:text-sm font-medium">{site.name.charAt(0)}</span>}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm md:text-base font-medium leading-tight group-hover:text-primary">
                        {site.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {site.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* 加载更多 */}
            {hasMore && (
              <div className="mt-8">
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <p className="text-center text-sm text-muted-foreground">
                    滚动加载更多...
                  </p>
                )}
              </div>
            )}

            {filteredSites.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">没有找到资源</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

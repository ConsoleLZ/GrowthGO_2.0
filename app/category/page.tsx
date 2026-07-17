"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { SimpleNavigation } from "@/components/simple-navigation"
import { LazyImage } from "@/components/lazy-image"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { sites } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll"

const ITEMS_PER_PAGE = 20

export default function CategoryPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>("推荐")
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)

  const tagsWithCount = useMemo(() => {
    const tagMap = new Map<string, number>()
    let recommendCount = 0
    sites.forEach((site) => {
      if (site.recommend) recommendCount++
      site.tags.forEach((tag) => tagMap.set(tag, (tagMap.get(tag) || 0) + 1))
    })
    const otherTags = Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }))
    return [
      { tag: "推荐", count: recommendCount },
      { tag: "全部", count: sites.length },
      ...otherTags
    ]
  }, [])

  const filteredSites = useMemo(() => {
    let result = sites
    if (selectedTag && selectedTag !== "全部") {
      if (selectedTag === "推荐") result = result.filter(site => site.recommend)
      else result = result.filter(site => site.tags.includes(selectedTag))
    }
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

  const sitesToDisplay = useMemo(() => filteredSites.slice(0, page * ITEMS_PER_PAGE), [filteredSites, page])
  const hasMore = sitesToDisplay.length < filteredSites.length
  const handleLoadMore = useCallback(() => setPage(prev => prev + 1), [])
  const { isLoading, resetLoading } = useInfiniteScroll({ hasMore, onLoadMore: handleLoadMore })

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => resetLoading(), 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading, resetLoading])

  useEffect(() => { setPage(1) }, [searchQuery, selectedTag])

  const handleTagSelect = useCallback((tag: string) => {
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
                分类标签
              </h2>
              <nav className="space-y-0.5 pr-4">
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

          {/* Mobile tags */}
          <div className="md:hidden mb-4 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {tagsWithCount.map(({ tag, count }) => (
                <button
                  key={tag}
                  onClick={() => handleTagSelect(tag)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-1.5 text-[13px] font-medium transition-all",
                    selectedTag === tag ? "bg-accent text-accent-on" : "bg-secondary/50 text-muted-foreground"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <main className="min-w-0 flex-1">
            <header className="mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl font-serif font-semibold tracking-[-0.01em]">
                {selectedTag || "全部资源"}
              </h1>
              <p className="mt-1 text-[13px] text-muted-foreground">
                已显示 {sitesToDisplay.length} / {filteredSites.length} 个资源
              </p>
            </header>

            <div className="relative mb-6 md:mb-8">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索资源..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-10 bg-secondary/50 border-0 focus-visible:ring-accent/40 text-[14px] rounded-[8px]"
              />
            </div>

            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
              {sitesToDisplay.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[8px] border border-border/50 bg-card p-3 md:p-4 transition-all hover:border-border hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-[8px] bg-secondary overflow-hidden">
                      <LazyImage
                        src={site.ico}
                        alt={site.name}
                        className="h-4 w-4 md:h-5 md:w-5 object-contain"
                        fallback={<span className="text-[12px] md:text-[14px] font-medium text-muted-foreground">{site.name.charAt(0)}</span>}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] md:text-[15px] font-medium leading-tight group-hover:text-accent transition-colors">
                        {site.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[12px] text-muted-foreground">
                        {site.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8">
                {isLoading ? <LoadingSpinner /> : (
                  <p className="text-center text-[13px] text-muted-foreground">滚动加载更多...</p>
                )}
              </div>
            )}

            {filteredSites.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-muted-foreground text-[14px]">没有找到资源</p>
              </div>
            )}
          </main>
        </div>
      </main>
    </div>
  )
}

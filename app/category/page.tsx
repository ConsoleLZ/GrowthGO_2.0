"use client"

import { useState, useMemo } from "react"
import { NavHeader } from "@/components/nav-header"
import { SiteCard } from "@/components/site-card"
import { sites } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function CategoryPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

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
    if (!selectedTag) return sites
    return sites.filter((site) => site.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex gap-12 py-12">
          {/* Left Sidebar - Fixed Tags */}
          <aside className="hidden w-56 shrink-0 md:block">
            <div className="sticky top-8">
              <h2 className="mb-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                分类标签
              </h2>
              <nav className="space-y-1">
                <button
                  onClick={() => setSelectedTag(null)}
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
                    onClick={() => setSelectedTag(tag)}
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

          {/* Mobile Tags - Horizontal Scroll */}
          <div className="mb-6 overflow-x-auto pb-2 md:hidden">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors",
                  !selectedTag
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground"
                )}
              >
                全部
              </button>
              {tagsWithCount.map(({ tag }) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors",
                    selectedTag === tag
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <header className="mb-8">
              <h1 className="text-2xl font-semibold tracking-tight">
                {selectedTag || "全部资源"}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {filteredSites.length} 个资源
              </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredSites.map((site) => (
                <a
                  key={site.id}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border/50 bg-card p-4 transition-all hover:border-border hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted overflow-hidden">
                      <img 
                        src={site.icon} 
                        alt={site.name}
                        className="h-6 w-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-sm font-medium">${site.name.charAt(0)}</span>`
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium leading-tight group-hover:text-primary">
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

            {filteredSites.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">没有找到资源</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-xs text-muted-foreground">
            © 2024 小哲导航
          </p>
        </div>
      </footer>
    </div>
  )
}

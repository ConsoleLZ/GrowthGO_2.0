"use client"

import { NavHeader } from "@/components/nav-header"
import { sites, stats } from "@/lib/data"
import { useMemo } from "react"

export default function StatsPage() {
  const tagStats = useMemo(() => {
    const tagCount: Record<string, number> = {}
    sites.forEach((site) => {
      site.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      })
    })
    return Object.entries(tagCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }, [])

  const maxCount = Math.max(...tagStats.map((t) => t.count))

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="mx-auto max-w-3xl px-6">
        <section className="py-16">
          <h1 className="text-3xl font-semibold tracking-tight">统计</h1>
          <p className="mt-2 text-muted-foreground">
            站点数据一览
          </p>
        </section>

        {/* Stats Grid */}
        <section className="pb-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-border/50 p-6">
              <p className="text-sm text-muted-foreground">收录数</p>
              <p className="mt-1 text-3xl font-semibold">{stats.totalSites}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-6">
              <p className="text-sm text-muted-foreground">分类数</p>
              <p className="mt-1 text-3xl font-semibold">{stats.totalCategories}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-6">
              <p className="text-sm text-muted-foreground">访问量</p>
              <p className="mt-1 text-3xl font-semibold">{stats.totalVisits.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-6">
              <p className="text-sm text-muted-foreground">运行时间</p>
              <p className="mt-1 text-3xl font-semibold">{stats.runningDays}天</p>
            </div>
          </div>
        </section>

        {/* Tag Distribution */}
        <section className="pb-16">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
            标签分布
          </h2>
          <div className="space-y-3">
            {tagStats.map((tag) => (
              <div key={tag.name} className="flex items-center gap-4">
                <span className="w-16 shrink-0 text-sm">{tag.name}</span>
                <div className="flex-1">
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-all"
                      style={{ width: `${(tag.count / maxCount) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="w-8 text-right text-sm text-muted-foreground">
                  {tag.count}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-xs text-muted-foreground">
            © 2024 小哲导航
          </p>
        </div>
      </footer>
    </div>
  )
}

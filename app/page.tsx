"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { NavHeader } from "@/components/nav-header"
import { SiteCardGrid } from "@/components/site-card"
import { sites } from "@/lib/data"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [query, setQuery] = useState("")
  
  const featuredSites = sites.filter((site) => site.featured)
  const filteredSites = query
    ? sites.filter(
        (site) =>
          site.name.toLowerCase().includes(query.toLowerCase()) ||
          site.description.toLowerCase().includes(query.toLowerCase())
      )
    : null

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            小哲导航
          </h1>
          <p className="mt-3 text-muted-foreground">
            精选开发者资源，简单、高效、实用
          </p>
          
          {/* Search */}
          <div className="relative mt-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索资源..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </section>

        {/* Search Results */}
        {filteredSites && (
          <section className="pb-12">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              搜索结果 ({filteredSites.length})
            </h2>
            {filteredSites.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredSites.map((site) => (
                  <SiteCardGrid key={site.url} site={site} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">未找到相关资源</p>
            )}
          </section>
        )}

        {/* Featured Sites */}
        {!filteredSites && (
          <>
            <section className="pb-12">
              <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                精选推荐
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {featuredSites.map((site) => (
                  <SiteCardGrid key={site.url} site={site} />
                ))}
              </div>
            </section>
          </>
        )}
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

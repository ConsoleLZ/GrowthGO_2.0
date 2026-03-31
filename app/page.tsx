"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Search } from "lucide-react";
import { NavHeader } from "@/components/nav-header";
import { SiteCardGrid } from "@/components/site-card";
import { LoadingSpinner } from "@/components/loading-spinner";
import { sites } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";

const ITEMS_PER_PAGE = 20;

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const featuredSites = useMemo(
    () => sites.filter((site) => site.recommend),
    [],
  );
  const quickAccessSites = useMemo(
    () => sites.filter((site) => site.quickAccess),
    [],
  );

  const filteredSites = useMemo(() => {
    if (query) {
      return sites.filter(
        (site) =>
          site.name.toLowerCase().includes(query.toLowerCase()) ||
          site.description.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return null;
  }, [query]);

  // 懒加载逻辑
  const allSitesToDisplay = useMemo(() => {
    if (filteredSites) {
      return filteredSites.slice(0, page * ITEMS_PER_PAGE);
    }
    return sites.slice(0, page * ITEMS_PER_PAGE);
  }, [filteredSites, page]);

  const hasMore = useMemo(() => {
    if (filteredSites) {
      return allSitesToDisplay.length < filteredSites.length;
    }
    return allSitesToDisplay.length < sites.length;
  }, [allSitesToDisplay.length, filteredSites, sites.length]);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const { isLoading, resetLoading } = useInfiniteScroll({
    hasMore,
    onLoadMore: handleLoadMore,
  });

  // 数据加载完成后重置加载状态
  useEffect(() => {
    if (isLoading) {
      // 设置一个延迟来确保数据已经更新
      const timer = setTimeout(() => {
        resetLoading();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading, resetLoading]);

  // 搜索时重置分页
  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    setPage(1);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            前端、硬件、AI等各种实用网站和工具
          </h1>
          <p className="mt-3 text-muted-foreground font-mono">
            宝剑锋从磨砺出，梅花香自苦寒来。
          </p>

          {/* Search */}
          <div className="relative mt-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索资源..."
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
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
            {allSitesToDisplay.length > 0 ? (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  {allSitesToDisplay.map((site) => (
                    <SiteCardGrid key={site.url} site={site} />
                  ))}
                </div>
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
              </>
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
                快速访问
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {quickAccessSites.map((site) => (
                  <SiteCardGrid key={site.url} site={site} />
                ))}
              </div>
            </section>

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

            {/* All Sites with Lazy Loading */}
          </>
        )}
      </main>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-xs text-muted-foreground">
            <a href="https://consolelz.github.io/">我的博客</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

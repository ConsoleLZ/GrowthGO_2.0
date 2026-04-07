"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { NavHeader } from "@/components/nav-header";
import { SiteCardGrid } from "@/components/site-card";
import { LoadingSpinner } from "@/components/loading-spinner";
import { FeaturedPosts } from "@/components/blog/featured-posts";
import { sites } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";

interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
  recommend?: boolean
}

interface HomeClientProps {
  posts: Post[]
}

const ITEMS_PER_PAGE = 20;

export default function HomeClient({ posts }: HomeClientProps) {
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

  // 搜索结果：包含网站和文章
  const searchResults = useMemo(() => {
    if (!query) return null;
    
    const queryLower = query.toLowerCase();
    
    // 搜索网站
    const siteResults = sites.filter(
      (site) =>
        site.name.toLowerCase().includes(queryLower) ||
        site.description.toLowerCase().includes(queryLower),
    );
    
    // 搜索文章
    const postResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(queryLower) ||
        post.description.toLowerCase().includes(queryLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(queryLower)),
    );
    
    return {
      sites: siteResults,
      posts: postResults,
      total: siteResults.length + postResults.length
    };
  }, [query, posts]);

  // 懒加载逻辑 - 只对网站生效
  const allSitesToDisplay = useMemo(() => {
    if (searchResults) {
      return searchResults.sites.slice(0, page * ITEMS_PER_PAGE);
    }
    return sites.slice(0, page * ITEMS_PER_PAGE);
  }, [searchResults, page]);

  const hasMore = useMemo(() => {
    if (searchResults) {
      return allSitesToDisplay.length < searchResults.sites.length;
    }
    return allSitesToDisplay.length < sites.length;
  }, [allSitesToDisplay.length, searchResults, sites.length]);

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

      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-24">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl">
            100+个人笔记文章📘 &
          </h1>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight md:text-4xl">
            前端、AI等各种实用网站和工具
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground font-mono">
            宝剑锋从磨砺出，梅花香自苦寒来。
          </p>

          {/* Search */}
          <div className="relative mt-6 sm:mt-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索资源..."
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="h-10 sm:h-11 pl-10 bg-muted/50 border-0 focus-visible:ring-1 text-sm sm:text-base"
            />
          </div>
        </section>

        {/* Search Results */}
        {searchResults && (
          <section className="pb-8 md:pb-12">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
              搜索结果 ({searchResults.total})
            </h2>
            
            {/* 文章搜索结果 */}
            {searchResults.posts.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">文章</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResults.posts.map((post) => (
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
              </div>
            )}
            
            {/* 网站搜索结果 */}
            {searchResults.sites.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3">网站</h3>
                {allSitesToDisplay.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {allSitesToDisplay.map((site) => (
                        <SiteCardGrid key={site.url} site={site} />
                      ))}
                    </div>
                    {hasMore && (
                      <div className="mt-6 md:mt-8">
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
                  <p className="text-sm text-muted-foreground">未找到相关网站</p>
                )}
              </div>
            )}
            
            {/* 无结果 */}
            {searchResults.total === 0 && (
              <p className="text-sm text-muted-foreground">未找到相关资源</p>
            )}
          </section>
        )}

        {/* Featured Posts */}
        {!searchResults && posts.length > 0 && (
          <FeaturedPosts posts={posts} />
        )}

        {/* Featured Sites */}
        {!searchResults && (
          <>
            <section className="pb-8 md:pb-12">
              <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                快速访问
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickAccessSites.map((site) => (
                  <SiteCardGrid key={site.url} site={site} />
                ))}
              </div>
            </section>

            <section className="pb-8 md:pb-12">
              <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
                精选推荐
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {featuredSites.map((site) => (
                  <SiteCardGrid key={site.url} site={site} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4 sm:gap-6">
            <p className="text-xs text-muted-foreground">
              <a href="https://consolelz.github.io/" target="_blank">
                我的博客 - 个人笔记
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              <a href="https://juejin.cn/user/1295692732053241" target="_blank">
                掘金 - 技术文章
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              <a
                href="https://v.douyin.com/zocGwtB8qq0/ 1@7.com"
                target="_blank"
              >
                抖音 - 个人生活
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              邮箱：17347187569@163.com
            </p>
            <p className="text-xs text-muted-foreground">
              <a href="https://github.com/ConsoleLZ/GrowthGO_2.0" target="_blank">开源地址</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
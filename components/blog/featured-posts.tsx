"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
  recommend?: boolean
}

interface FeaturedPostsProps {
  posts: Post[]
  initialPosts?: number
  loadMorePosts?: number
}

export function FeaturedPosts({ posts, initialPosts = 4, loadMorePosts = 4 }: FeaturedPostsProps) {
  const [visibleCount, setVisibleCount] = useState(initialPosts)
  
  // 筛选精选文章：只显示recommend为true的文章，按日期倒序
  const allFeaturedPosts = posts
    .filter(post => post.recommend === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  // 当前可见的文章
  const visiblePosts = allFeaturedPosts.slice(0, visibleCount)
  
  // 是否还有更多文章可以加载
  const hasMore = visibleCount < allFeaturedPosts.length
  
  // 加载更多文章
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + loadMorePosts)
  }

  if (allFeaturedPosts.length === 0) {
    return null
  }

  return (
    <section className="pb-8 md:pb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          精选文章 ({allFeaturedPosts.length})
        </h2>
        <Link 
          href="/blog" 
          className="text-xs text-muted-foreground hover:text-foreground transition-colors dark:text-muted-foreground dark:hover:text-foreground"
        >
          查看全部 →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {visiblePosts.map((post) => (
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
      
      {/* 加载更多按钮 */}
      {hasMore && (
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLoadMore}
            className="text-xs"
          >
            加载更多 ({allFeaturedPosts.length - visibleCount} 篇)
          </Button>
        </div>
      )}
    </section>
  )
}
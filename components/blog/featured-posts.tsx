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

export function FeaturedPosts({ posts, initialPosts = 9999, loadMorePosts = 100 }: FeaturedPostsProps) {
  const [visibleCount, setVisibleCount] = useState(initialPosts)

  const allFeaturedPosts = posts
    .filter(post => post.recommend === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const visiblePosts = allFeaturedPosts.slice(0, visibleCount)
  const hasMore = visibleCount < allFeaturedPosts.length
  const handleLoadMore = () => setVisibleCount(prev => prev + loadMorePosts)

  if (allFeaturedPosts.length === 0) return null

  return (
    <section className="pb-8 md:pb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
          精选文章 ({allFeaturedPosts.length})
        </h2>
        <Link href="/blog" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">
          查看全部 →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {visiblePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-[8px] border border-border/50 p-4 transition-all hover:border-border hover:bg-secondary/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-medium truncate group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] text-muted-foreground">{tag}</span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-[10px] text-muted-foreground">+{post.tags.length - 2}</span>
                  )}
                </div>
              </div>
              <div className="shrink-0 text-[10px] text-muted-foreground">
                {new Date(post.date).toLocaleDateString('zh-CN')}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <Button variant="outline" size="sm" onClick={handleLoadMore} className="text-[12px]">
            加载更多 ({allFeaturedPosts.length - visibleCount} 篇)
          </Button>
        </div>
      )}
    </section>
  )
}

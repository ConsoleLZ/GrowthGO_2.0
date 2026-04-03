import { notFound } from "next/navigation"
import { NavHeader } from "@/components/nav-header"
import { getPostBySlug, getAllPosts, getAllSlugs } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { MobileTocDrawer } from "@/components/blog/mobile-toc-drawer"
import MarkdownContent from "../markdown-content"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-8">
          {/* 侧边栏大纲 - 桌面端 */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <TableOfContents content={post.content} />
          </aside>
          
          {/* 主内容区域 */}
          <main className="flex-1 min-w-0">
            <article className="prose prose-lg max-w-none dark:prose-invert">
              <header className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('zh-CN')}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime} 分钟阅读</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              <MarkdownContent content={post.content} />
            </article>
          </main>
        </div>
      </div>
      
      {/* 移动端大纲抽屉 */}
      <MobileTocDrawer content={post.content} />
    </div>
  )
}
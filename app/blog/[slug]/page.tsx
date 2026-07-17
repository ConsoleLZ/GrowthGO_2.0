import { notFound } from "next/navigation"
import { SimpleNavigation } from "@/components/simple-navigation"
import { getPostBySlug, getAllSlugs, hasTableOfContents } from "@/lib/posts"
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
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const hasToc = hasTableOfContents(post.content)

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      <div className="pt-20 mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-8">
          {hasToc && (
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <TableOfContents content={post.content} />
            </aside>
          )}

          <main className="flex-1 min-w-0 max-w-3xl">
            <article>
              <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-[-0.01em] mb-4 text-foreground">
                  {post.title}
                </h1>
                <div className="flex items-center gap-3 text-[13px] text-muted-foreground mb-4 flex-wrap">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('zh-CN')}
                  </time>
                  <span className="text-border">·</span>
                  <span>{post.wordCount} 字</span>
                  <span className="text-border">·</span>
                  <span>{post.readingTime} 分钟阅读</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px] border-border/50 text-muted-foreground">
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
      {hasToc && <MobileTocDrawer content={post.content} />}
    </div>
  )
}

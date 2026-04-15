import Link from "next/link"

export function ResumeFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {currentYear} 小哲. 保留所有权利。
        </p>
        <div className="flex items-center gap-6">
          <Link href="/category" className="hover:text-foreground transition-colors">
            分类
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            笔记
          </Link>
          <Link href="/stats" className="hover:text-foreground transition-colors">
            统计
          </Link>
          <Link href="/guestbook" className="hover:text-foreground transition-colors">
            留言板
          </Link>
        </div>
      </div>
    </footer>
  )
}

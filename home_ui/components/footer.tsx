export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {currentYear} 张明. 保留所有权利。
        </p>
        <p>
          使用 Next.js 和 Tailwind CSS 精心构建
        </p>
      </div>
    </footer>
  )
}

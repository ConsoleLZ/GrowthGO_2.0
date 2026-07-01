import { Heart } from "lucide-react"

export function ResumeFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} 小哲</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1">
              用 <Heart size={14} className="text-highlight fill-highlight" /> 与 代码 构建
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="text-muted-foreground">友链：</span>
            <a 
              className="hover:text-highlight transition-colors" 
              href="https://blog.joker2yue.com/" 
              target="_blank"
            >
              joker2yue
            </a>
            <span className="text-border">·</span>
            <a 
              className="hover:text-highlight transition-colors" 
              href="https://mikeytk.cn/" 
              target="_blank"
            >
              mikey
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Heart } from "lucide-react"

export function ResumeFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t border-[#d2d2d7] bg-[#fbfbfd]" data-od-id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[13px] text-[#6e6e73]">
            <span>© {currentYear} 小哲</span>
            <span className="text-[#d2d2d7]">·</span>
            <span className="inline-flex items-center gap-1">
              用 <Heart size={13} className="text-accent fill-accent" /> 与 代码 构建
            </span>
          </div>

          <div className="flex items-center gap-4 text-[13px] text-[#6e6e73]">
            <span>友链：</span>
            <a className="hover:text-accent transition-colors" href="https://blog.joker2yue.com/" target="_blank">joker2yue</a>
            <span className="text-[#d2d2d7]">·</span>
            <a className="hover:text-accent transition-colors" href="https://mikeytk.cn/" target="_blank">mikey</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

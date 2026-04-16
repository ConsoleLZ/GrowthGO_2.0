import Link from "next/link"
import { Github, Mail, ArrowDown, Folder, FileText, BarChart3, MessageSquare } from "lucide-react"

const socialLinks = [
  { href: "https://consolelz.github.io/", icon: Github, label: "我的博客" },
  { href: "https://juejin.cn/user/1295692732053241", icon: Mail, label: "掘金" },
  { href: "mailto:17347187569@163.com", icon: Mail, label: "Email" },
]

const pageLinks = [
  { href: "/category", label: "分类", icon: Folder },
  { href: "/blog", label: "笔记", icon: FileText },
  { href: "/stats", label: "统计", icon: BarChart3 },
  { href: "/guestbook", label: "留言板", icon: MessageSquare },
]

export function ResumeHeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                你好，我是
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
                小哲
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                前端开发者 & 终身学习者
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              专注于构建高性能、可访问的用户界面，创造优雅的数字体验。
            </p>

            <div className="grid grid-cols-2 gap-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-secondary hover:border-foreground/20 transition-all"
                >
                  <link.icon size={20} className="text-foreground" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-full hover:bg-secondary hover:border-foreground/20 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} className="text-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                我是一名热衷于创造优秀用户体验的开发者，相信技术应该服务于人。我的工作融合了深思熟虑的设计与稳健的工程实现。
              </p>
              <p>
                在过去的几年里，我一直在探索前端技术的边界，从基础的HTML/CSS到现代的React/Next.js应用，都有深入的实践。
              </p>
              <p>
                我喜欢分享技术知识，也喜欢探索新的技术领域。如果你也对技术充满热情，欢迎与我交流！
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">向下滚动</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

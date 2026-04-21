import Link from "next/link"
import { Github, Mail, ArrowDown, Send, FileText, BarChart3, MessageSquare } from "lucide-react"

const socialLinks = [
  { href: "mailto:17347187569@163.com", icon: Mail, label: "Email" },
]

const pageLinks = [
  { href: "/category", label: "导航", icon: Send },
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
                前端终结者 & 电子工程菜鸟
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              一个喜欢解决难题的疯子，越难的东西只会让我更加兴奋
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

          <div className="relative flex flex-col items-center lg:items-center">
            <div className="relative w-64 h-64">
              {/* 头像背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
              
              {/* 头像容器 */}
              <div className="relative w-full h-full">
                {/* 头像图片 */}
                <img
                  src="/avatar.jpg"
                  alt="小哲的头像"
                  className="w-full h-full object-cover rounded-full border-4 border-background"
                />
                
                {/* 头像装饰圆环 */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                
                {/* 装饰点 */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
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

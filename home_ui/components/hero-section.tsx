import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Name and Title */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                你好，我是
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
                张明
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                高级前端工程师
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              专注于构建高性能、可访问的用户界面，创造优雅的数字体验。
            </p>

            {/* Social Links */}
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

          {/* Right Column - Brief Introduction */}
          <div className="space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                我是一名热衷于打造精确到像素级别、高可访问性用户界面的开发者。我的工作融合了深思熟虑的设计与稳健的工程实现。
              </p>
              <p>
                目前在 <span className="text-foreground font-medium">字节跳动</span> 担任高级前端工程师，专注于无障碍体验设计。我负责构建和维护支撑产品前端的核心UI组件库。
              </p>
              <p>
                过去几年，我有机会在不同环境中开发软件——从创业公司到大型科技企业。我相信技术应该服务于人，创造有意义的连接。
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">向下滚动</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

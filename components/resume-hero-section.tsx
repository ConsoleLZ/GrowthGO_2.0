"use client"

import Link from "next/link"
import { Github, Mail, ArrowDown, Send, FileText, BarChart3, MessageSquare, Sparkles, Zap, Code2 } from "lucide-react"

const socialLinks = [
  { href: "mailto:17347187569@163.com", icon: Mail, label: "Email" },
  { href: "https://github.com/ConsoleLZ", icon: Github, label: "GitHub" },
]

const pageLinks = [
  { href: "/category", label: "导航", icon: Send, desc: "精选资源" },
  { href: "/blog", label: "笔记", icon: FileText, desc: "技术文章" },
  { href: "/stats", label: "统计", icon: BarChart3, desc: "数据看板" },
  { href: "/guestbook", label: "留言板", icon: MessageSquare, desc: "来打个招呼" },
]

const highlights = [
  { icon: Code2, text: "前端开发" },
  { icon: Zap, text: "电子工程" },
  { icon: Sparkles, text: "持续学习" },
]

export function ResumeHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight-soft text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight"></span>
                </span>
                <span>开放合作机会</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-lg tracking-wide animate-fade-in-up animation-delay-100">
                你好，我是
              </p>
              <h1 className="animate-fade-in-up animation-delay-200">
                <span className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-gradient">
                  小哲
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground/80 font-light animate-fade-in-up animation-delay-300">
                前端爱好者 <span className="text-highlight">·</span> 电子工程探索者
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm"
                >
                  <item.icon size={16} className="text-highlight" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animation-delay-500">
              一个对技术充满狂热的探索者——越难的问题越让我兴奋。
              从前端交互到嵌入式开发，我享受每一次破解难题的快感，
              相信好的代码如同艺术品，既要优雅，也要有灵魂。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in-up animation-delay-600">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex flex-col gap-1 p-4 rounded-xl border border-border bg-card/30 hover:bg-card hover:border-highlight/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <link.icon size={18} className="text-highlight group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{link.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{link.desc}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2 animate-fade-in-up animation-delay-700">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl border border-border bg-card/30 hover:bg-highlight hover:border-highlight hover:text-highlight-foreground transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a
                href="mailto:17347187569@163.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                <span>联系我</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 relative animate-fade-in-right animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-highlight/20 via-transparent to-highlight/10 rounded-[3rem] blur-2xl" />
              
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-highlight/30 to-highlight/5 rotate-6" />
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tl from-foreground/5 to-transparent -rotate-3" />
                
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-border/50 shadow-2xl">
                  <img
                    src="/avatar.jpg"
                    alt="小哲的头像"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl bg-card border border-border shadow-xl animate-float">
                  <p className="text-xs text-muted-foreground mb-1">当前状态</p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    探索新技术中
                  </p>
                </div>

                <div className="absolute -top-3 -left-3 px-3 py-2 rounded-xl bg-highlight text-highlight-foreground shadow-lg rotate-[-8deg]">
                  <span className="text-sm font-bold">2+ 年经验</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in-up animation-delay-800">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="relative">
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

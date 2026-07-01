"use client"

import { Mail, ArrowUpRight, Github, BookOpen, PenTool, MessageCircle } from "lucide-react"

const contactLinks = [
  { label: "Email", value: "17347187569@163.com", href: "mailto:17347187569@163.com", icon: Mail },
  { label: "GitHub", value: "@ConsoleLZ", href: "https://github.com/ConsoleLZ", icon: Github },
  { label: "掘金", value: "小哲的技术分享", href: "https://juejin.cn/user/1295692732053241", icon: PenTool },
  { label: "博客", value: "consolelz.github.io", href: "https://consolelz.github.io/", icon: BookOpen },
]

export function ResumeContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative bg-secondary/20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-highlight text-sm font-medium tracking-widest uppercase">联系方式</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            让我们一起，<br />
            <span className="text-gradient">在技术的路上同行</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-2xl font-semibold">
              有想法？来聊聊吧
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              无论你有技术问题、合作想法，或者只是想打个招呼，
              我都很乐意收到你的消息。技术路上，我们一起成长。
            </p>
            <a
              href="mailto:17347187569@163.com"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-highlight text-highlight-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              <Mail size={20} />
              <span>发送邮件</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <MessageCircle size={16} className="text-highlight" />
                也欢迎来留言板坐坐
              </p>
              <a
                href="/guestbook"
                className="text-foreground hover:text-highlight transition-colors inline-flex items-center gap-1"
              >
                前往留言板
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-highlight/30 hover:bg-card hover:shadow-xl hover:shadow-highlight/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-highlight/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:bg-highlight/10 transition-colors" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-highlight/10 group-hover:scale-110 transition-transform">
                      <link.icon size={22} className="text-highlight" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-highlight group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {link.label}
                    </p>
                    <p className="font-medium group-hover:text-highlight transition-colors">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

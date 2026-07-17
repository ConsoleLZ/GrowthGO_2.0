"use client";

import {
  Mail,
  ArrowUpRight,
  Github,
  BookOpen,
  PenTool,
  MessageCircle,
} from "lucide-react";

const contactLinks = [
  { label: "Email", value: "17347187569@163.com", href: "mailto:17347187569@163.com", icon: Mail },
  { label: "GitHub", value: "@ConsoleLZ", href: "https://github.com/ConsoleLZ", icon: Github },
  { label: "掘金", value: "小哲的技术分享", href: "https://juejin.cn/user/1295692732053241", icon: PenTool },
  { label: "博客", value: "consolelz.github.io", href: "https://consolelz.github.io/", icon: BookOpen },
];

export function ResumeContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#f5f5f7] overflow-hidden" data-od-id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-accent text-[13px] font-medium tracking-[0.08em] uppercase">联系方式</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.01em] text-[#1d1d1f]">
            让我们一起，
            <br />
            <span className="text-gradient">在技术的路上同行</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-[#1d1d1f]">
              有想法？来聊聊吧
            </h3>
            <p className="text-[15px] text-[#6e6e73] leading-relaxed">
              无论你有技术问题、合作想法，或者只是想打个招呼，
              我都很乐意收到你的消息。技术路上，我们一起成长。
            </p>
            <a
              href="mailto:17347187569@163.com"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-[12px] bg-accent text-accent-on font-medium text-[14px] hover:bg-accent-hover transition-colors"
            >
              <Mail size={18} />
              <span>发送邮件</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <p className="text-[13px] text-[#6e6e73]">其它邮箱：</p>
            <div className="text-[14px] text-[#6e6e73] space-y-0.5">
              <p><a href="mailto:1804319025@qq.com" className="hover:text-accent transition-colors">1804319025@qq.com</a></p>
              <p><a href="mailto:P17347187569@outlook.com" className="hover:text-accent transition-colors">P17347187569@outlook.com</a></p>
            </div>

            <div className="pt-6">
              <p className="text-[13px] text-[#6e6e73] mb-3 flex items-center gap-2">
                <MessageCircle size={15} className="text-accent" />
                也欢迎来留言板坐坐
              </p>
              <a href="/guestbook" className="text-foreground hover:text-accent transition-colors inline-flex items-center gap-1 text-[14px]">
                前往留言板
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-[12px] bg-white border border-[#d2d2d7] hover:border-accent/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-[-48px] w-24 h-24 bg-accent/5 rounded-full blur-xl -translate-y-1/2 group-hover:bg-accent/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-[8px] bg-accent/10 group-hover:scale-110 transition-transform">
                      <link.icon size={20} className="text-accent" />
                    </div>
                    <ArrowUpRight size={16} className="text-[#6e6e73] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#6e6e73] uppercase tracking-wider mb-1">{link.label}</p>
                    <p className="text-[14px] font-medium text-[#1d1d1f] group-hover:text-accent transition-colors">{link.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

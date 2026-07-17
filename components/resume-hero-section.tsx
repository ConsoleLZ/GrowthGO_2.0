"use client";

import Link from "next/link";
import {
  Github,
  Mail,
  ArrowDown,
  FileText,
  BarChart3,
  MessageSquare,
  Sparkles,
  Zap,
  Code2,
  Cpu,
} from "lucide-react";

const socialLinks = [
  { href: "mailto:17347187569@163.com", icon: Mail, label: "Email" },
  { href: "https://github.com/ConsoleLZ", icon: Github, label: "GitHub" },
];

const pageLinks = [
  { href: "/category", label: "导航", icon: Sparkles, desc: "精选资源" },
  { href: "/blog", label: "笔记", icon: FileText, desc: "技术文章" },
  { href: "/stats", label: "统计", icon: BarChart3, desc: "数据看板" },
  { href: "/guestbook", label: "留言板", icon: MessageSquare, desc: "来打个招呼" },
];

const highlights = [
  { icon: Code2, text: "前端开发" },
  { icon: Cpu, text: "电子工程" },
  { icon: Zap, text: "持续学习" },
];

export function ResumeHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 bg-[#000000] overflow-hidden" data-od-id="hero">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <div className="col-span-1 lg:col-span-8 space-y-6 lg:space-y-8">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[13px] font-medium text-white/80 backdrop-blur-sm border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>开放合作机会</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-white/50 text-[17px] tracking-wide animate-fade-in-up animation-delay-100">
                你好，我是
              </p>
              <h1 className="animate-fade-in-up animation-delay-200">
                <span className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] leading-[1.05] text-white">
                  小哲
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 animate-fade-in-up animation-delay-400">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[13px] font-medium backdrop-blur-sm"
                >
                  <item.icon size={15} className="text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[17px] text-white/60 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-500">
              一个对技术充满狂热的探索者——越难的问题越让我兴奋。
              从前端交互到嵌入式开发，我享受每一次破解难题的快感，
              相信好的代码如同艺术品，既要优雅，也要有灵魂。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in-up animation-delay-600">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex flex-col gap-1 p-4 rounded-[12px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <link.icon
                      size={16}
                      className="text-accent group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium text-[14px] text-white/90">{link.label}</span>
                  </div>
                  <span className="text-[12px] text-white/40">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="lg:col-span-4 relative animate-fade-in-right animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-[3rem] blur-2xl" />
              <div className="relative aspect-square max-w-xs mx-auto">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-accent/20 to-accent/5 rotate-6" />
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/avatar.jpg"
                    alt="小哲的头像"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-[16px] bg-white/10 border border-white/10 backdrop-blur-xl shadow-xl">
                  <p className="text-[11px] text-white/50 mb-0.5 tracking-wider uppercase">当前状态</p>
                  <p className="text-[13px] font-medium text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    探索新技术中
                  </p>
                </div>

                <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-[8px] bg-accent text-accent-on shadow-lg -rotate-3">
                  <span className="text-[12px] font-semibold">2+ 年经验</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex justify-center mt-16 text-white/40 animate-fade-in-up animation-delay-800">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.15em] uppercase">Scroll</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { ArrowUpRight, Github, Sparkles, Rocket, Wrench } from "lucide-react"
import Link from "next/link"

const upcomingProjects = [
  {
    title: "GrowthGO 2.0",
    description: "正在打造的个人成长平台，集成导航、笔记、统计等功能",
    status: "进行中",
    icon: Rocket,
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    title: "嵌入式项目集",
    description: "单片机与上位机开发的实践项目，持续更新中",
    status: "积累中",
    icon: Wrench,
    tags: ["嵌入式", "C语言", "上位机"]
  },
  {
    title: "更多精彩",
    description: "好的项目需要时间打磨，敬请期待更多作品",
    status: "筹备中",
    icon: Sparkles,
    tags: ["未来可期"]
  },
]

export function ResumeProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-highlight text-sm font-medium tracking-widest uppercase">精选项目</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            用代码创造，<br />
            <span className="text-gradient">用作品说话</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-border bg-card/30 hover:border-highlight/30 hover:bg-card hover:shadow-xl hover:shadow-highlight/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-highlight/10 transition-colors" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-highlight/10">
                    <project.icon size={24} className="text-highlight" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-highlight/10 text-highlight">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-highlight transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-highlight transition-colors"
                  >
                    <span>查看笔记</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">更多项目正在赶来的路上...</p>
          <a
            href="https://github.com/ConsoleLZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-highlight/50 hover:bg-highlight/5 transition-all"
          >
            <Github size={18} />
            <span className="font-medium">去 GitHub 看看</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

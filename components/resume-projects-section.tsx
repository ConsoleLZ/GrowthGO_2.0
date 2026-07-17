"use client"

import { ArrowUpRight, Github, Sparkles, Rocket, Wrench } from "lucide-react"
import Link from "next/link"

const upcomingProjects = [
  {
    title: "GrowthGO 2.0",
    description: "正在打造的个人成长平台，集成导航、笔记、统计等功能",
    status: "进行中",
    icon: Rocket,
    tags: ["Next.js", "React", "TypeScript"],
    link: 'https://github.com/ConsoleLZ/GrowthGO_2.0'
  },
  {
    title: "嵌入式项目集",
    description: "单片机与上位机开发的实践项目，持续更新中",
    status: "积累中",
    icon: Wrench,
    tags: ["嵌入式", "C语言", "上位机"],
    link: ''
  },
  {
    title: "更多精彩",
    description: "好的项目需要时间打磨，敬请期待更多作品",
    status: "筹备中",
    icon: Sparkles,
    tags: ["未来可期"],
    link: ''
  },
]

export function ResumeProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-[#000000] text-white" data-od-id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-accent/80 text-[13px] font-medium tracking-[0.08em] uppercase">精选项目</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.01em]">
            用代码创造，
            <br />
            <span className="text-white/50">用作品说话</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-[12px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-[-64px] w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 group-hover:bg-accent/15 transition-colors" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-[8px] bg-accent/15">
                    <project.icon size={22} className="text-accent" />
                  </div>
                  <span className="px-3 py-1 text-[11px] font-medium rounded-full bg-accent/15 text-accent tracking-wide">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[11px] rounded-md bg-white/10 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-[13px] text-white/50 hover:text-accent transition-colors"
                  >
                    <span>查看</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-[14px] mb-4">更多项目正在赶来的路上...</p>
          <a
            href="https://github.com/ConsoleLZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[980px] border border-white/20 text-white/80 text-[14px] font-medium hover:bg-white/10 hover:border-accent/40 transition-all"
          >
            <Github size={16} />
            <span>去 GitHub 看看</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

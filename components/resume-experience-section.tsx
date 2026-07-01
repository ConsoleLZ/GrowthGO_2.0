"use client"

import { ArrowUpRight, Briefcase, Building2 } from "lucide-react"

const experiences = [
  {
    period: "2025 — 至今",
    title: "电子工程师-软件方向",
    company: "深圳市芯连心电子科技有限公司",
    companyUrl: "http://www.chipmindmcu.com/",
    description: "专注于嵌入式软件开发与电子工程领域的探索，将前端思维带入嵌入式开发，追求代码质量与用户体验的双重卓越。",
    tags: ["嵌入式开发", "单片机", "上位机"]
  },
  {
    period: "2024 ~ 2025",
    title: "前端工程师",
    company: "武汉木仓科技",
    companyUrl: "https://www.mucang.cn/",
    description: '参与公司核心产品的前端架构搭建与性能优化，深入学习微前端、工程化等前沿技术。在直系领导的指导下，建立了严谨的代码规范和架构思维，深刻理解前端不仅是"切图"，更是一门值得深耕的工程学科。',
    tags: ["React", "性能优化", "微前端", "工程化"]
  },
]

export function ResumeExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-highlight text-sm font-medium tracking-widest uppercase">工作经历</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            每一段经历，<br />
            <span className="text-gradient">都是成长的脚印</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-highlight/50 via-border to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-12 md:pl-20 group"
              >
                <div className="absolute left-0 md:left-4 top-2 w-8 h-8 rounded-full bg-background border-2 border-highlight flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-highlight" />
                </div>

                <div className="p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-highlight/30 hover:bg-card hover:shadow-xl hover:shadow-highlight/5 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-highlight font-medium mb-2">
                        <Briefcase size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-highlight transition-colors group/link"
                      >
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 -translate-x-1 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all"
                        />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-highlight/10 text-highlight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

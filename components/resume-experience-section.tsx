"use client"

import { Briefcase, Building2, ArrowUpRight } from "lucide-react"

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
    description: "参与公司核心产品的前端架构搭建与性能优化，深入学习微前端、工程化等前沿技术。在直系领导的指导下，建立了严谨的代码规范和架构思维，深刻理解前端不仅是'切图'，更是一门值得深耕的工程学科。",
    tags: ["React", "性能优化", "微前端", "工程化"]
  },
  {
    period: "2021 ~ 2024",
    title: "学生",
    company: "湖南人文科技学院",
    companyUrl: "https://www.huhst.edu.cn/",
    description: "高等数学、线性代数、数据结构、计算机网络原理、网络安全等",
    tags: ["网络工程"]
  },
]

export function ResumeExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-[#ffffff]" data-od-id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-accent text-[13px] font-medium tracking-[0.08em] uppercase">工作经历</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.01em] text-[#1d1d1f]">
            每一段经历，
            <br />
            <span className="text-gradient">都是成长的脚印</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-[#d2d2d7] to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-12 md:pl-20 group"
              >
                <div className="absolute left-0 md:left-4 top-2 w-7 h-7 rounded-full bg-[#ffffff] border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="p-6 md:p-8 rounded-[12px] bg-[#f5f5f7] border border-[#d2d2d7] hover:border-accent/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-[13px] text-accent font-medium mb-2">
                        <Briefcase size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-[#1d1d1f] mb-1">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#6e6e73] hover:text-accent transition-colors group/link"
                      >
                        <Building2 size={15} />
                        <span className="text-[14px]">{exp.company}</span>
                        <ArrowUpRight size={13} className="opacity-0 group-hover/link:opacity-100 transition-all" />
                      </a>
                    </div>
                  </div>

                  <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[12px] font-medium rounded-full bg-accent/10 text-accent"
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

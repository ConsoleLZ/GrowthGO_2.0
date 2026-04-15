import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2022 — 至今",
    title: "高级前端工程师",
    company: "字节跳动",
    companyUrl: "https://bytedance.com",
    description:
      "负责构建和维护核心前端组件库，与跨职能团队紧密协作，包括开发者、设计师和产品经理，推动和实施Web无障碍最佳实践。",
    skills: ["React", "TypeScript", "Vue.js", "Node.js"],
  },
  {
    period: "2020 — 2022",
    title: "前端工程师",
    company: "阿里巴巴",
    companyUrl: "https://alibaba.com",
    description:
      "参与电商平台的前端架构设计与优化，主导多个核心模块的开发，提升了30%的页面加载性能。",
    skills: ["React", "Webpack", "SASS", "GraphQL"],
  },
  {
    period: "2018 — 2020",
    title: "初级前端开发",
    company: "美团",
    companyUrl: "https://meituan.com",
    description:
      "参与移动端H5页面开发，负责用户端交互体验优化，学习并实践了多种前端工程化方案。",
    skills: ["JavaScript", "Vue.js", "CSS3", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            工作经历
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 p-6 -mx-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              {/* Period */}
              <div className="text-sm text-muted-foreground">
                {exp.period}
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Title and Company */}
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.title} ·{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      {exp.company}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

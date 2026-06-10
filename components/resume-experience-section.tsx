import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2025 — 至今",
    title: "电子工程师-软件方向",
    company: "深圳市芯连心电子科技有限公司",
    companyUrl: "http://www.chipmindmcu.com/",
    description:
      "",
  },
  {
    period: "2024 ~ 2025",
    title: "前端工程师",
    company: "武汉木仓科技",
    companyUrl: "https://www.mucang.cn/",
    description:
      `公司的氛围还可以，我的直系领导很负责，学习了很多代码规范和思路，学习了架构的搭建，前端性能优化，微前端等等知识，第一次感受到前端还有这么多东西，并不是所谓的“切图崽”`,
  },
]

export function ResumeExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            学习经历
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 p-6 -mx-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground">
                {exp.period}
              </div>

              <div className="space-y-4">
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

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — 至今",
    title: "前端开发者",
    company: "独立开发者",
    companyUrl: "https://consolelz.github.io/",
    description:
      "专注于个人项目和开源贡献，持续学习新技术，分享技术文章和经验。",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    title: "前端工程师",
    company: "某科技公司",
    companyUrl: "#",
    description:
      "参与多个Web应用的前端开发，负责组件设计和性能优化，提升用户体验。",
    skills: ["Vue.js", "Webpack", "SASS", "JavaScript"],
  },
  {
    period: "2019 — 2021",
    title: "初级前端开发",
    company: "创业公司",
    companyUrl: "#",
    description:
      "从零开始学习前端开发，参与移动端H5页面开发，积累了丰富的实践经验。",
    skills: ["HTML5", "CSS3", "JavaScript", "Git"],
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

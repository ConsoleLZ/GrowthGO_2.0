import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "GrowthGO 2.0",
    description:
      "个人导航网站，整合了个人笔记、网站收藏、统计数据和留言板等功能，使用Next.js和Tailwind CSS构建。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/ConsoleLZ/GrowthGO_2.0",
  },
  {
    title: "个人博客",
    description:
      "技术博客，分享前端开发经验、学习笔记和项目总结，记录成长历程。",
    tags: ["Markdown", "VuePress", "Git"],
    liveUrl: "https://consolelz.github.io/",
    githubUrl: "#",
  },
  {
    title: "笔记系统",
    description:
      "基于Markdown的个人笔记管理系统，支持标签分类、搜索和阅读进度记录。",
    tags: ["React", "TypeScript", "Markdown"],
    liveUrl: "/blog",
    githubUrl: "#",
  },
]

export function ResumeProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            精选项目
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group p-6 bg-background border border-border rounded-lg hover:border-foreground/20 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("/") ? "_self" : "_blank"}
                        rel={project.liveUrl.startsWith("/") ? "" : "noopener noreferrer"}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} 在线演示`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-muted-foreground border border-border rounded"
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
    </section>
  )
}

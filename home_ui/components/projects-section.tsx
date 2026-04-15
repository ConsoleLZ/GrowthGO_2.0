import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "设计系统",
    description:
      "从零构建的企业级设计系统，包含50+可复用组件，支持主题定制和无障碍访问。",
    tags: ["React", "TypeScript", "Storybook"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "性能监控平台",
    description:
      "实时Web性能监控工具，可视化展示核心性能指标，帮助团队快速定位和解决性能问题。",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "智能文档编辑器",
    description:
      "基于Markdown的协作文档编辑器，集成AI辅助写作功能，支持实时多人协作。",
    tags: ["Vue.js", "WebSocket", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CLI 工具集",
    description:
      "提升开发效率的命令行工具集，包含项目脚手架、代码生成器和自动化部署工具。",
    tags: ["Node.js", "Commander", "Chalk"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            精选项目
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group p-6 bg-background border border-border rounded-lg hover:border-foreground/20 transition-all"
            >
              <div className="space-y-4">
                {/* Title with Links */}
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} 在线演示`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
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

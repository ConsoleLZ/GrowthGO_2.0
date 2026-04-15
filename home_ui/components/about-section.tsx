const skills = [
  { category: "语言", items: ["TypeScript", "JavaScript", "Python", "HTML/CSS"] },
  { category: "框架", items: ["React", "Vue.js", "Next.js", "Node.js"] },
  { category: "工具", items: ["Git", "Webpack", "Vite", "Docker"] },
  { category: "设计", items: ["Figma", "Sketch", "响应式设计", "无障碍设计"] },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            关于我
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              我对技术的热爱始于大学时期，当时我被代码能够创造出交互式体验的魔力深深吸引。从那以后，我一直在探索前端技术的边界，追求代码的优雅与用户体验的完美。
            </p>
            <p>
              我相信好的软件不仅仅是功能的实现，更是一种艺术表达。每一行代码都应该被精心考虑，每一个交互都应该让用户感到愉悦。
            </p>
            <p>
              工作之余，我喜欢阅读技术博客、参与开源项目，偶尔也会写一些技术分享文章。我也是一个咖啡爱好者，认为好的咖啡和好的代码有异曲同工之妙。
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h3 className="text-sm font-medium text-foreground tracking-wide">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

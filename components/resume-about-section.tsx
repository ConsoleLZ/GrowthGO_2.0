"use client"

import { Code2, Cpu, Smartphone, Server, Briefcase, GraduationCap, Heart, Coffee } from "lucide-react"

const skillGroups = [
  {
    category: "前端开发",
    icon: Code2,
    color: "from-blue-500/20 to-blue-500/5",
    items: ["React", "Vue", "TypeScript", "TailwindCSS", "Vite", "WebSocket", "Node.js", "Express"]
  },
  {
    category: "电子工程",
    icon: Cpu,
    color: "from-amber-500/20 to-amber-500/5",
    items: ["单片机软件开发", "上位机开发", "基础电路设计", "C语言"]
  },
  {
    category: "移动端开发",
    icon: Smartphone,
    color: "from-green-500/20 to-green-500/5",
    items: ["uni-app", "React Native"]
  },
  {
    category: "运维部署",
    icon: Server,
    color: "from-purple-500/20 to-purple-500/5",
    items: ["Linux", "Nginx", "Docker", "宝塔面板"]
  },
]

const stats = [
  { icon: Briefcase, value: "2+", label: "年工作经验" },
  { icon: GraduationCap, value: "100+", label: "技术文章笔记" },
  { icon: Heart, value: "∞", label: "学习热情" },
  { icon: Coffee, value: "N", label: "杯咖啡" },
]

export function ResumeAboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-highlight text-sm font-medium tracking-widest uppercase">关于我</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            技术是我的热爱，<br />
            <span className="text-gradient">探索是我的本能</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                我对技术的热爱始于大学时期，当时我被代码创造出交互体验的魔力深深吸引。从那以后，我一直在探索技术的边界，追求代码的优雅与用户体验的完美。
              </p>
              <p>
                我相信好的软件不仅仅是功能的实现，更是一种艺术表达。每一行代码都应该被精心考虑，每一个交互都应该让用户感到愉悦。
              </p>
              <p>
                工作之余，我喜欢阅读技术博客、参与开源项目，偶尔也会写一些技术分享文章。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-highlight/20 hover:bg-card transition-all duration-300"
                >
                  <stat.icon size={24} className="text-highlight mb-3" />
                  <div className="font-serif text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.category}
                className="group relative p-6 rounded-2xl border border-border bg-card/30 hover:border-highlight/30 hover:bg-card/60 transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-highlight/10">
                      <group.icon size={20} className="text-highlight" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold">{group.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-full bg-background/80 border border-border/50 hover:border-highlight/30 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

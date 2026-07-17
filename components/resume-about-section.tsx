"use client"

import { Code2, Cpu, Smartphone, Server, Briefcase, GraduationCap, Heart, Coffee } from "lucide-react"

const skillGroups = [
  {
    category: "前端开发",
    icon: Code2,
    items: ["React", "Vue", "TypeScript", "TailwindCSS", "Vite", "WebSocket", "Node.js", "Express"]
  },
  {
    category: "电子工程",
    icon: Cpu,
    items: ["单片机软件开发", "上位机开发", "基础电路设计", "C语言"]
  },
  {
    category: "移动端开发",
    icon: Smartphone,
    items: ["uni-app", "React Native"]
  },
  {
    category: "运维部署",
    icon: Server,
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
    <section id="about" className="py-24 md:py-32 px-6 bg-[#f5f5f7]" data-od-id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-accent text-[13px] font-medium tracking-[0.08em] uppercase">关于我</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.01em] text-[#1d1d1f]">
            技术是我的热爱，
            <br />
            <span className="text-gradient">探索是我的本能</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <div className="space-y-4 text-[17px] text-[#6e6e73] leading-[1.6]">
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

            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-[16px] bg-white border border-[#d2d2d7] hover:border-accent/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <stat.icon size={20} className="text-accent mb-3" />
                  <div className="font-serif text-3xl font-semibold text-[#1d1d1f] mb-1">{stat.value}</div>
                  <div className="text-[13px] text-[#6e6e73]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 space-y-3">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="group p-6 rounded-[12px] bg-white border border-[#d2d2d7] hover:border-accent/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-[8px] bg-accent/10">
                    <group.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1d1d1f]">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-[13px] rounded-full bg-[#f5f5f7] text-[#424245] border border-[#d2d2d7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

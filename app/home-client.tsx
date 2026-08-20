"use client"

import Link from "next/link"
import { SimpleNavigation } from "@/components/simple-navigation"
import type { Post } from "@/lib/posts"

const DISPLAY_FONT =
  '"Iowan Old Style", "Charter", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", "SimSun", serif'

function formatDate(date: string) {
  const d = new Date(date)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}/${m}/${day}`
}

interface HomeClientProps {
  posts: Omit<Post, "content">[]
}

const siteInfo = {
  name: "小哲",
  tagline: "一个还在成长的程序员",
  bio:
    "我是一名研发，白天写代码，做产品设计与工程交付，晚上把踩过的坑写下来。这里没有「10分钟学会 XX」，只有我真实做过、并且愿意为自己说过的话负责的记录。",
  email: "17347187569@163.com",
  github: "https://github.com/ConsoleLZ",
  juejin: "https://juejin.cn/user/1295692732053241",
  githubRepo: "https://github.com/ConsoleLZ/GrowthGO_2.0",
  location: "广东",
  keywords: ["前端开发", "AI agent", "效率工具", "skills", "资源素材", "随笔"],
  interests: ["DIY爱好者", "代码", "吉他", "无畏契约"],
}

export default function HomeClient({ posts }: HomeClientProps) {
  const latest = posts[0]
  const recent = posts.slice(1, 6)

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <SimpleNavigation />

      <div className="mx-auto max-w-[1120px] px-6">
        {/* ═════════ Hero ═════════ */}
        <section className="border-b border-border/70 py-16 md:py-24">
          <div className="mb-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-muted-foreground">
            <span>最新文章</span>
            <span className="text-foreground/30">·</span>
            <span>{latest ? formatDate(latest.date) : ""}</span>
          </div>
          <h1
            className="max-w-[900px] text-[clamp(36px,5.4vw,68px)] font-semibold leading-[1.05] tracking-[-0.015em] text-foreground"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            {latest?.title ?? "设计系统不是组件库"}
          </h1>
          <p className="mt-5 max-w-[680px] text-[15px] leading-[1.7] text-foreground/75 md:text-base">
            {latest?.description ??
              "组件可以复制，规范会漂移。这篇写给既写代码、又要维护设计系统的工程师。"}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-[13px] text-muted-foreground">
            <span>{latest ? formatDate(latest.date) : ""}</span>
            <span className="text-foreground/30">·</span>
            <span>约 {latest?.readingTime ?? 12} 分钟</span>
            <span className="text-foreground/30">·</span>
            <span>设计系统</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/blog/${latest?.slug ?? ""}`}
              className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-[13px] font-medium text-accent-on transition-colors hover:bg-accent-hover"
            >
              阅读全文
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              查看全部文章 →
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {siteInfo.interests.map((it) => (
              <span
                key={it}
                className="border-l border-border/70 pl-3 text-[12px] tracking-wide text-muted-foreground first:border-l-0 first:pl-0"
              >
                {it}
              </span>
            ))}
          </div>
        </section>

        {/* ═════════ 最新文章列表 ═════════ */}
        <section className="border-b border-border/70 py-16 md:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                写作 · 按时间倒序
              </div>
              <h2
                className="text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.1] tracking-[-0.012em] text-foreground"
                style={{ fontFamily: DISPLAY_FONT }}
              >
                最新文章
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[12px] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              全部文章 →
            </Link>
          </div>

          <ul className="divide-y divide-border/70">
            {recent.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group grid grid-cols-1 items-start gap-4 py-6 transition-colors hover:bg-surface/60 md:grid-cols-12 md:gap-6 md:py-7 md:px-2"
                >
                  <div className="text-[12px] tracking-[0.05em] text-muted-foreground md:col-span-2 md:pt-1">
                    {formatDate(p.date)}
                  </div>
                  <div className="md:col-span-8">
                    <h3
                      className="text-[20px] font-semibold leading-[1.3] tracking-[-0.005em] text-foreground transition-colors group-hover:text-accent"
                      style={{ fontFamily: DISPLAY_FONT }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.65] text-foreground/70">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:col-span-2 md:justify-end">
                    {p.tags.slice(0, 1).map((t) => (
                      <span
                        key={t}
                        className="border border-border px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ═════════ 关于 / 个人联系方式 ═════════ */}
        <section className="border-b border-border/70 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              {/* <div className="mb-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">关于</div> */}
              <h2
                className="mb-5 text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.1] tracking-[-0.012em] text-foreground"
                style={{ fontFamily: DISPLAY_FONT }}
              >
                关于我
              </h2>
              <p className="max-w-[640px] text-[15px] leading-[1.8] text-foreground/80">
                {siteInfo.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
                {siteInfo.keywords.map((k, i) => (
                  <span key={k}>
                    {k}
                    {i < siteInfo.keywords.length - 1 && (
                      <span className="ml-6 text-foreground/20">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <aside className="md:col-span-5 md:border-l md:border-border/70 md:pl-10">
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                个人 IP · 联系方式
              </div>
              <ul className="divide-y divide-border/70">
                {[
                  { label: "GitHub", href: siteInfo.github, note: "代码仓库与日常提交", target: "_blank" },
                  { label: "掘金", href: siteInfo.juejin, note: "中文技术文章", target: "_blank" },
                  { label: "邮箱", href: `mailto:${siteInfo.email}`, note: siteInfo.email, target: undefined },
                  { label: "站点源码", href: siteInfo.githubRepo, note: "本站开源实现", target: "_blank" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.target}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="group flex items-start justify-between gap-6 py-4 transition-colors hover:bg-surface/60"
                    >
                      <div>
                        <div className="text-[14px] font-medium text-foreground">{item.label}</div>
                        <div className="mt-1 text-[12px] text-muted-foreground">{item.note}</div>
                      </div>
                      <span className="pt-1 text-[12px] text-muted-foreground transition-colors group-hover:text-foreground">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ═════════ 页脚 ═════════ */}
        <footer className="border-t border-border/70 py-10">
          <div className="flex flex-col items-start justify-between gap-4 text-[12px] text-muted-foreground md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>© {new Date().getFullYear()} {siteInfo.name}</span>
              <Link href="https://blog.joker2yue.com/" className="transition-colors hover:text-foreground">
                Moker2yue
              </Link>
              <Link href="https://mikeytk.cn/" className="transition-colors hover:text-foreground">
                MiKey
              </Link>
              <Link href="https://www.travellings.cn/go" className="transition-colors hover:text-foreground">
                随机博客
              </Link>
            </div>
            <div className="flex items-center gap-x-5">
              <span>用键盘与咖啡维护</span>
              <span className="hidden md:inline text-foreground/20">·</span>
              <span>每篇文章都手写</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

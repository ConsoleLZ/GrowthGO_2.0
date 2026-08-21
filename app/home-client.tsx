"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"
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
  bio:
    "一个非常普通的开发，用此网站来记录自己的一些笔记、心得或者一些好用的工具，喜欢的菜是火腿炒蛋，喜欢的水果是发青的香蕉，爱玩的游戏是无畏契约，喜欢的歌手是赵雷",
  email: "17347187569@163.com",
  github: "https://github.com/ConsoleLZ",
  juejin: "https://juejin.cn/user/1295692732053241",
  githubRepo: "https://github.com/ConsoleLZ/GrowthGO_2.0",
  location: "广东",
  keywords: ["前端开发", "AI agent", "效率工具", "skills", "资源素材", "随笔"],
  interests: ["DIY爱好者", "痴迷代码", "落灰的吉他"],
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
          <RoleIdleSprite />
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
              <a target="_blank" href="https://blog.joker2yue.com/" className="transition-colors hover:text-foreground">
                Joker2yue
              </a>
              <a target="_blank" href="https://mikeytk.cn/" className="transition-colors hover:text-foreground">
                MiKey
              </a>
              <a target="_blank" href="https://www.travellings.cn/go" className="transition-colors hover:text-foreground">
                随机博客
              </a>
            </div>
            <div className="flex items-center gap-x-5">
              <span>用键盘与咖啡维护</span>
              <span className="hidden md:inline text-foreground/20">·</span>
              <span>每篇文章都手写</span>
            </div>
          </div>
        </footer>
      </div>

      <RoleSprite />
    </main>
  )
}

// ═════════ 右下角小角色:走 → 撞墙 → 攻击 → 反向走,循环 ═════════
const ROLE_FRAME_MS = 140
const ROLE_ATTACK_FRAME_MS = 140
const ROLE_MOVE_MS = 16
const ROLE_SPEED = 1.4
const ROLE_X_MIN = -240
const ROLE_X_MAX = 0

function RoleSprite() {
  const [action, setAction] = useState<"walk" | "attack">("walk")
  const [dir, setDir] = useState<-1 | 1>(-1)
  const [x, setX] = useState(ROLE_X_MAX)
  const [frame, setFrame] = useState(0)
  const [ready, setReady] = useState(false)
  const dialogRef = useRef<HTMLSpanElement>(null)
  const typedRef = useRef<Typed | null>(null)

  // 预加载所有帧,避免运行时切 src 触发"加载-取消-重试"循环
  useEffect(() => {
    const urls = [
      "/images/role/Run/1.png",
      "/images/role/Run/2.png",
      "/images/role/Run/3.png",
      "/images/role/Run/4.png",
      "/images/role/Run/5.png",
      "/images/role/Run/6.png",
      "/images/role/Run/7.png",
      "/images/role/Run/8.png",
      "/images/role/Idle/1.png",
      "/images/role/Idle/2.png",
      "/images/role/Idle/3.png",
      "/images/role/Idle/4.png",
      "/images/role/Idle/5.png",
      "/images/role/Idle/6.png",
    ]
    const preload = () => {
      let pending = urls.length
      const done = () => { if (--pending === 0) setReady(true) }
      urls.forEach((u) => {
        const img = new Image()
        img.onload = done
        img.onerror = done
        img.src = u
      })
    }
    preload()
    // 切回标签页时浏览器可能已清空 memory cache,先停动画再重新预加载,避免运行时切 src 陷入加载循环
    const onVis = () => { if (!document.hidden) { setReady(false); preload() } }
    document.addEventListener("visibilitychange", onVis)
    return () => document.removeEventListener("visibilitychange", onVis)
  }, [])

  // 打字机对话框:首页加载时请求一次 API,与第一段固定文案循环打字
  useEffect(() => {
    let mounted = true
    const start = (line2: string) => {
      if (!mounted || !dialogRef.current) return
      typedRef.current = new Typed(dialogRef.current, {
        strings: ["哥布林正在巡视领地", line2],
        typeSpeed: 45,
        backSpeed: 20,
        backDelay: 1800,
        loop: true,
      })
    }
    fetch("https://v2.xxapi.cn/api/dujitang")
      .then((r) => r.json())
      .then((j) => start(typeof j?.data === "string" && j.data ? j.data : "网络走丢了"))
      .catch(() => start("网络走丢了"))
    return () => {
      mounted = false
      typedRef.current?.destroy()
    }
  }, [])

  // 帧动画:走  / 闲置,切换动作时重置(预加载完成后启动)
  useEffect(() => {
    if (!ready) return
    setFrame(0)
    const max = action === "walk" ? 8 : 6
    const ms = action === "walk" ? ROLE_FRAME_MS : ROLE_ATTACK_FRAME_MS
    const id = setInterval(() => setFrame((f) => (f + 1) % max), ms)
    return () => clearInterval(id)
  }, [action, ready])

  // 走路位移
  useEffect(() => {
    if (!ready || action !== "walk") return
    const id = setInterval(() => {
      setX((p) => Math.min(ROLE_X_MAX, Math.max(ROLE_X_MIN, p + dir * ROLE_SPEED)))
    }, ROLE_MOVE_MS)
    return () => clearInterval(id)
  }, [action, dir, ready])

  // 撞墙 → 触发闲置动画(dir 条件避免翻转后立刻再次触发,形成死循环)
  useEffect(() => {
    if (action !== "walk") return
    if (x <= ROLE_X_MIN && dir === -1) setAction("attack")
    else if (x >= ROLE_X_MAX && dir === 1) setAction("attack")
  }, [x, action, dir])

  // 播完一轮 → 翻转方向,继续走
  useEffect(() => {
    if (action !== "attack") return
    const id = setTimeout(() => {
      setDir((d) => (d === 1 ? -1 : 1))
      setAction("walk")
    }, ROLE_ATTACK_FRAME_MS * 24)
    return () => clearTimeout(id)
  }, [action])

  const src =
    action === "walk"
      ? `/images/role/Run/${frame + 1}.png`
      : `/images/role/Idle/${frame + 1}.png`

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-3 right-3 z-40 select-none"
      style={{ width: 36, height: 36, transform: `translateX(${x}px)` }}
    >
      {/* NPC 对话框:角色右上角,随根 div 的 translateX 跟随移动 */}
      <div className="absolute bottom-full right-0 mb-2 w-[200px] break-words rounded-md border border-black/15 bg-white px-3 py-1.5 text-[12px] leading-relaxed text-black shadow-md">
        <span ref={dialogRef} />
      </div>
      <img
        src={src}
        alt=""
        className="h-full w-full object-contain"
        style={{ transform: `scaleX(${dir})` }}
      />
    </div>
  )
}

// ═════════ Hero 区 idle 角色(gif) ═════════
function RoleIdleSprite() {
  return (
    <div style={{ width: 36, height: 36 }}>
      <img
        src="/images/role1/idle/1.gif"
        alt=""
        className="h-full w-full object-contain"
      />
    </div>
  )
}

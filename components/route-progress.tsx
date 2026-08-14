"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// ponytail: App Router 没有 router 事件，用捕获阶段拦截 <a> 点击 + pathname 变化收尾。
// 覆盖点击到跳转开始的盲区；静态路由的 loading.tsx 是 no-op，靠这个补上反馈。
export function RouteProgress() {
  const pathname = usePathname()
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest?.("a")
      if (!a) return
      const href = a.getAttribute("href") ?? ""
      // 跳过外链、锚点、特殊协议、修饰键打开新标签
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ||
        a.target === "_blank" ||
        a.hasAttribute("download")
      ) return
      // 同路径不处理
      if (href === pathname || href === window.location.pathname) return
      setPending(true)
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [pathname])

  useEffect(() => {
    if (pending) setPending(false)
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // ponytail: 不蒜子脚本只在页面加载时执行一次，SPA 导航时要手动重新执行，否则 .busuanzi_value_* span 不刷新
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="busuanzi.pure.mini.js"]'
    )
    if (!existing) return
    const s = document.createElement("script")
    s.src = existing.src
    existing.remove()
    document.head.appendChild(s)
  }, [pathname])

  if (!pending) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent pointer-events-none">
      <div className="h-full w-full origin-left animate-route-progress bg-[var(--accent)]" />
    </div>
  )
}

"use client"

import { Suspense, useRef, useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Float, Html, useProgress } from "@react-three/drei"
import * as THREE from "three"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

/* 功能入口（保留在最上方） */
const navItems = [
  { href: "/category", label: "导航" },
  { href: "/blog", label: "笔记" },
  { href: "/stats", label: "统计" },
  { href: "/guestbook", label: "留言板" },
]

/* ─── 3D model ─────────────────────────────────────────────────────── */

function Model() {
  const { scene } = useGLTF("/glb/me.glb")
  const ref = useRef<THREE.Group>(null)

  useEffect(() => {
    if (!ref.current) return
    const box = new THREE.Box3().setFromObject(ref.current)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const scale = 2.0 / maxDim
    ref.current.scale.setScalar(scale)
    ref.current.position.x = -center.x * scale
    ref.current.position.y = -center.y * scale
    ref.current.position.z = -center.z * scale
  }, [])

  return <primitive ref={ref} object={scene} />
}

/* ─── Scroll-driven camera ─────────────────────────────────────────── */

type Key = { p: number; pos: [number, number, number]; look: [number, number, number] }

const KEYS: Key[] = [
  { p: 0.0, pos: [0, 0.3, 5.6], look: [0, 0.25, 0] },
  { p: 0.5, pos: [3.8, 0.6, 3.0], look: [0, 0.25, 0] },
  { p: 1.0, pos: [0, 0.3, 6.8], look: [0, 0.25, 0] },
]

const _v = new THREE.Vector3()
const _look = new THREE.Vector3()

function sampleCamera(p: number, out: THREE.Vector3, lookOut: THREE.Vector3) {
  const k = KEYS
  let a = k[0]
  let b = k[k.length - 1]
  for (let i = 0; i < k.length - 1; i++) {
    if (p >= k[i].p && p <= k[i + 1].p) {
      a = k[i]
      b = k[i + 1]
      break
    }
  }
  const span = b.p - a.p || 1
  let t = (p - a.p) / span
  t = t * t * (3 - 2 * t)
  out.set(
    a.pos[0] + (b.pos[0] - a.pos[0]) * t,
    a.pos[1] + (b.pos[1] - a.pos[1]) * t,
    a.pos[2] + (b.pos[2] - a.pos[2]) * t,
  )
  lookOut.set(
    a.look[0] + (b.look[0] - a.look[0]) * t,
    a.look[1] + (b.look[1] - a.look[1]) * t,
    a.look[2] + (b.look[2] - a.look[2]) * t,
  )
}

function ScrollCamera({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const { camera } = useThree()
  useFrame(() => {
    sampleCamera(scrollRef.current, _v, _look)
    camera.position.lerp(_v, 0.08)
    camera.lookAt(_look)
  })
  return null
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 select-none">
        <div className="w-9 h-9 border-2 border-white/15 border-t-white/80 rounded-full animate-spin" />
        <div className="text-white/50 text-[11px] tracking-[0.3em] uppercase">
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  )
}

function Scene({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#ffffff", "#2a2a3a", 0.7]} />
      <directionalLight position={[5, 7, 4]} intensity={1.7} />
      <directionalLight position={[-5, 4, -3]} intensity={0.5} color="#aaccff" />
      <pointLight position={[0, 1, 4]} intensity={0.4} color="#ffd9a8" />
      <Suspense fallback={<Loader />}>
        <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.45}>
          <Model />
        </Float>
      </Suspense>
      <ScrollCamera scrollRef={scrollRef} />
    </>
  )
}

/* ─── Reveal on scroll ─────────────────────────────────────────────── */

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

/* ─── Mobile nav ───────────────────────────────────────────────────── */

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 text-white hover:bg-white/10 transition-colors duration-200"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-[3px]">
            <span className="h-[2px] w-4 rounded-full bg-white" />
            <span className="h-[2px] w-4 rounded-full bg-white" />
            <span className="h-[2px] w-4 rounded-full bg-white" />
          </div>
          <span className="sr-only">切换菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] border-l border-white/10 bg-[#0a0a0c]/95 text-white backdrop-blur-xl sm:w-[300px]"
      >
        <SheetTitle className="sr-only">导航菜单</SheetTitle>
        <div className="flex flex-col space-y-8 pt-14">
          <div className="px-6">
            <span className="text-xl font-serif tracking-tight text-white/90">小哲</span>
          </div>
          <nav className="flex flex-col space-y-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-3 text-[15px] font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-[8px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

/* ─── 内容数据（完全复制 intro3d 模板，后续可替换） ──────────────── */

// 滚动后右侧时间线的内容卡片
const timeline = [
  {
    tag: "2026 · Milestone",
    title: "A New Chapter",
    subtitle: "Add a short subtitle",
    body: "Share what this moment is about.",
  },
  {
    tag: "2025 · Journey",
    title: "New Beginning",
    subtitle: "Add a short subtitle",
    body: "Share what this moment is about.",
  },
  {
    tag: "2024 · Growth",
    title: "Keep Going",
    subtitle: "Add a short subtitle",
    body: "Share what this moment is about.",
  },
]

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function HomeClient() {
  const isMobile = useIsMobile()
  const scrollRef = useRef(0)
  // 内部滚动容器，与 intro3d 一致：3D 固定全屏背景 + 内部 overflow-y-auto 内容
  const scrollElRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollElRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      scrollRef.current = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0
    }
    onScroll()
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main className="dark relative h-screen w-full overflow-hidden bg-[#0a0a0c] text-white">
      {/* 固定全屏 3D 背景 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0.3, 5.6], fov: 35 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene scrollRef={scrollRef} />
        </Canvas>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
      </div>

      {/* 四角装饰角标 */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-[24px] top-[24px]">
          <span className="absolute left-[-6px] top-1/2 h-px w-[11px] -translate-y-1/2 bg-white/40" />
          <span className="absolute left-0 top-[-6px] h-[11px] w-px bg-white/40" />
        </div>
        <div className="absolute right-[24px] top-[24px]">
          <span className="absolute right-[-6px] top-1/2 h-px w-[11px] -translate-y-1/2 bg-white/40" />
          <span className="absolute right-0 top-[-6px] h-[11px] w-px bg-white/40" />
        </div>
        <div className="absolute left-[24px] bottom-[24px]">
          <span className="absolute left-[-6px] top-1/2 h-px w-[11px] -translate-y-1/2 bg-white/40" />
          <span className="absolute left-0 bottom-[-6px] h-[11px] w-px bg-white/40" />
        </div>
        <div className="absolute right-[24px] bottom-[24px]">
          <span className="absolute right-[-6px] top-1/2 h-px w-[11px] -translate-y-1/2 bg-white/40" />
          <span className="absolute right-0 bottom-[-6px] h-[11px] w-px bg-white/40" />
        </div>
      </div>

      {/* 四角文字 */}
      <div className="pointer-events-none absolute inset-0 z-20 px-[42px] py-[42px]">
        {/* 左上 */}
        <div className="absolute left-[42px] top-[42px]">
          <div className="text-[13px] font-medium leading-tight text-white/90">Your Name</div>
          <div className="text-[11px] tracking-[0.18em] text-white/50">Your Title</div>
        </div>
        {/* 右上 */}
        <div className="absolute right-[42px] top-[42px] text-[12px] tracking-[0.18em] text-white/60">
          Portfolio · 2026
        </div>
        {/* 左下 */}
        <div className="absolute left-[42px] bottom-[42px] text-[12px] tracking-[0.18em] text-white/60">
          Work · Craft · Play
        </div>
        {/* 右侧竖排 */}
        <div className="absolute right-[28px] top-1/2 -translate-y-1/2">
          <span
            className="text-[12px] tracking-[0.2em] text-white/50"
            style={{ writingMode: "vertical-rl" }}
          >
            Based in Your City
          </span>
        </div>
      </div>

      {/* 最上方功能入口 */}
      <header className="absolute left-1/2 top-[28px] z-30 -translate-x-1/2">
        {isMobile ? (
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNav />
          </div>
        ) : (
          <div className="flex items-center gap-6 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-3 w-px bg-white/15" />
            <ThemeToggle />
          </div>
        )}
      </header>

      {/* 内部滚动容器 */}
      <div
        ref={scrollElRef}
        className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>

        {/* 第一屏：模型居中，文字叠加 */}
        <section className="relative flex h-screen w-full items-center justify-center">
          <div className="pointer-events-none flex flex-col items-center translate-y-[24vh]">
            <h1 className="text-[clamp(36px,7cqw,72px)] font-medium tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              xiaozhe
            </h1>
            <p className="mt-3 max-w-[min(560px,86cqw)] text-center text-[clamp(12px,1.3cqw,15px)] leading-relaxed text-white/60">
              superstar
            </p>
            <div className="pointer-events-auto mt-6 flex flex-wrap gap-2">
              {[0, 1, 2].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <span className="text-[11px]">•</span>
                </a>
              ))}
            </div>
          </div>

          {/* 底部 Scroll down 提示 */}
          <div className="pointer-events-none absolute bottom-[58px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">
              Scroll down
            </span>
            <span className="relative block h-10 w-px overflow-hidden bg-white/15">
              <span className="absolute left-1/2 top-0 h-[9px] w-[3px] -translate-x-1/2 animate-[scrolldot_1.8s_ease-in-out_infinite] bg-white/70" />
            </span>
          </div>
        </section>

        {/* 滚动后右侧时间线内容 */}
        <section className="relative w-full">
          <div className="ml-auto w-[min(520px,92vw)] px-[34px] pb-[20vh]">
            <div className="space-y-[14vh]">
              {timeline.map((item, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="relative pl-[34px]">
                    {/* 时间线圆点 */}
                    <span className="absolute -left-[6px] top-[6px] size-[11px] rounded-full border border-white/40 bg-[#0a0a0c]" />
                    <div className="flex flex-col">
                      <div className="text-[13px] font-medium tracking-[0.18em] text-white/70">
                        {item.tag}
                      </div>
                      <div className="flex items-center gap-3 pt-2.5">
                        <h2 className="text-[clamp(18px,2.4cqw,26px)] leading-[1.15] font-medium text-white">
                          {item.title}
                        </h2>
                      </div>
                      <div className="pt-1.5 text-[15px] text-white/55">{item.subtitle}</div>
                      <div className="pt-4 text-[14px] leading-[1.5] text-white/50">
                        {item.body}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 右下徽章 */}
        <a
          href="/"
          className="group fixed bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md transition-colors hover:text-white"
        >
          <span className="size-1.5 rounded-full bg-[#cb7350]" />
          <span>Made with</span>
          <span className="font-semibold text-white">intro3d</span>
        </a>
      </div>

      <style>{`
        @keyframes scrolldot {
          0% { transform: translate(-50%, 0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translate(-50%, 40px); opacity: 0; }
        }
      `}</style>
    </main>
  )
}

useGLTF.preload("/glb/me.glb")

"use client"

import { Suspense, useRef, useEffect, useState, type ReactNode } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, useProgress, Html } from "@react-three/drei"
import * as THREE from "three"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"
import { SimpleNavigation } from "@/components/simple-navigation"
import { cn } from "@/lib/utils"

/* 原站 intro3d 显示字体：Bricolage Grotesque（layout 中已加载） */
const DISPLAY_FONT =
  '"Bricolage Grotesque", "PingFang SC", -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif'

/* ─── 3D model ─────────────────────────────────────────────────────── */

function Model() {
  // 使用 Draco 压缩版本 + Google CDN 解码器，显著减小下载体积
  // 注意：贴纸已烘焙在 me.glb 模型内，这里不再重复加载
  const { scene } = useGLTF("/glb/me-draco.glb", "https://www.gstatic.com/draco/v1/decoders/")
  const ref = useRef<THREE.Group>(null)

  useEffect(() => {
    const group = ref.current
    if (!group) return
    const box = new THREE.Box3().setFromObject(group)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const scale = 2.15 / maxDim
    // 对齐原站：模型 position [0,0,0]，居中于原点
    group.scale.setScalar(scale)
    group.position.x = -center.x * scale
    group.position.y = -center.y * scale
    group.position.z = -center.z * scale

    // 降低环境反射光泽：material envMapIntensity=0.5（× scene 0.5 = 有效 0.25）
    // 与参考版一致，避免模型显得过亮过油；想更哑光可再调小此值
    group.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (!mesh.isMesh) return
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      mats.forEach((m) => {
        const std = m as THREE.MeshStandardMaterial
        if (std.envMapIntensity !== undefined) std.envMapIntensity = 0.1
      })
    })
  }, [])

  return <primitive ref={ref} object={scene} />
}

/* ─── Scroll-driven camera（原站精确相机 tour） ─────────────────────── */

type Key = { p: number; pos: [number, number, number]; look: [number, number, number] }

// 原站精确值：hero 桌面 [-0.1966,1.4111,3.3293] / 移动端 [0.7885,-0.1009,3.5330]；节点1 [2.5846,0.3788,2.5081]
const HERO_POS: [number, number, number] =
  typeof window !== "undefined" && window.innerWidth < 768
    ? [0.7885, -0.1009, 3.5330]
    : [-0.1966, 1.4111, 3.3293]

const KEYS: Key[] = [
  { p: 0.0, pos: HERO_POS, look: [0, 0, 0] },
  { p: 0.64, pos: [2.5846, 0.3788, 2.5081], look: [0, 0, 0] }, // 节点1（原站 node camera）
  { p: 0.97, pos: [-1.9, 0.8, 3.4], look: [0, 0, 0] },         // 节点2（延续：环绕左侧）
  { p: 1.0, pos: [-0.3, 0.9, 4.3], look: [0, 0, 0] },          // 节点3（延续：拉远回中）
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

/* ── 3D 模型加载指示（画布内，随模型加载显示） ──────────────────────── */

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 select-none">
        <div className="w-9 h-9 border-2 border-[#f4f1ea]/15 border-t-[#f4f1ea]/80 rounded-full animate-spin" />
        <div className="text-[#f4f1ea]/50 text-[11px] tracking-[0.3em] uppercase">
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  )
}

function PointerFollow({
  children,
  pointerRef,
}: {
  children: ReactNode
  pointerRef: React.MutableRefObject<{ x: number; y: number }>
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame(() => {
    if (!ref.current) return
    const p = pointerRef.current
    const targetY = p.x * 0.16
    const targetX = -p.y * 0.1
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.07
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.07
  })
  return <group ref={ref}>{children}</group>
}

// 环境映射：原站 environment preset "city" intensity 0.5，用 RoomEnvironment 近似
function EnvironmentMap() {
  const { gl, scene } = useThree()
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl)
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    scene.environment = envTex
    scene.environmentIntensity = 0.1
    return () => {
      scene.environment = null
      envTex.dispose()
      pmrem.dispose()
    }
  }, [gl, scene])
  return null
}

function Scene({
  scrollRef,
  pointerRef,
}: {
  scrollRef: React.MutableRefObject<number>
  pointerRef: React.MutableRefObject<{ x: number; y: number }>
}) {
  return (
    <>
      {/* 原站渲染机制：环境映射 + 白环境光 0.2 + 主光 0.8 @45° height1.2 */}
      <EnvironmentMap />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1.2, 1.2]} intensity={0.8} />
      <Suspense fallback={<Loader />}>
        <PointerFollow pointerRef={pointerRef}>
          <Model />
        </PointerFollow>
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
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[26px]",
        className,
      )}
    >
      {children}
    </div>
  )
}

/* ─── 内容数据（完全复制 intro3d 模板，后续可替换） ──────────────── */

// 滚动后右侧时间线的内容卡片
const timeline = [
  {
    title: "技能",
    subtitle: "正在积攒技能点数",
    body: "前端：HTML、CSS、JS、Node、Vue、React、Mysql、Redis、Docker等，\n硬件：C语言、单片机各种外设，单片机各种通讯协议（IIC、SPI、USART）、电路设计等",
  },
  {
    title: "作品",
    subtitle: "一个好的作品是经得起时间的考验的",
    body: "说来惭愧，觉得自己并没有作品拿的出手的，很多东西做的中途就放弃了（各种原因），后续会加油做出至少令自己满意的作品的",
  },
  {
    title: "文化水平",
    subtitle: "一个普通的本科生-湖南人文科技学院",
    body: "我爱我的大学",
  },
]

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function HomeClient() {
  const scrollRef = useRef(0)
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
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

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      pointerRef.current.x = (e.clientX / w) * 2 - 1
      pointerRef.current.y = -((e.clientY / h) * 2 - 1)
    }
    window.addEventListener("pointermove", onPointer, { passive: true })
    return () => window.removeEventListener("pointermove", onPointer)
  }, [])

  const cornerInset = "clamp(14px,2.2vw,28px)"

  return (
    <main
      className="dark relative h-screen w-full overflow-hidden bg-[#0a0a0b] text-[#f4f1ea]"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif' }}
    >
      {/* 站内统一导航（SimpleNavigation） */}
      <SimpleNavigation />

      {/* 固定全屏 3D 背景（透明 canvas，DOM 提供暗背景，贴合 intro3d） */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: HERO_POS, fov: 38 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          className="!h-full !w-full"
          style={{ touchAction: "none", background: "transparent" }}
        >
          <Scene scrollRef={scrollRef} pointerRef={pointerRef} />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(60,50,40,0.5)_0%,rgba(10,10,11,1)_70%)]" />
      </div>

      {/* 四角细边框 + 角标（原站：inset clamp(14,2.2cqw,28) · 1px @18% · 11px 角标） */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        <div className="absolute border border-white/[0.18]" style={{ inset: cornerInset }} />
        <span className="absolute" style={{ top: cornerInset, left: cornerInset }}>
          <span className="absolute left-1/2 top-1/2 h-px w-[11px] -translate-x-1/2 -translate-y-1/2 bg-white/40" />
          <span className="absolute left-1/2 top-1/2 h-[11px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/40" />
        </span>
        <span className="absolute" style={{ top: cornerInset, right: cornerInset }}>
          <span className="absolute left-1/2 top-1/2 h-px w-[11px] -translate-x-1/2 -translate-y-1/2 bg-white/40" />
          <span className="absolute left-1/2 top-1/2 h-[11px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/40" />
        </span>
        <span className="absolute" style={{ bottom: cornerInset, left: cornerInset }}>
          <span className="absolute left-1/2 top-1/2 h-px w-[11px] -translate-x-1/2 -translate-y-1/2 bg-white/40" />
          <span className="absolute left-1/2 top-1/2 h-[11px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/40" />
        </span>
        <span className="absolute" style={{ bottom: cornerInset, right: cornerInset }}>
          <span className="absolute left-1/2 top-1/2 h-px w-[11px] -translate-x-1/2 -translate-y-1/2 bg-white/40" />
          <span className="absolute left-1/2 top-1/2 h-[11px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/40" />
        </span>
      </div>

      {/* 四角文字（原站：clamp(9,0.9cqw,11) · tracking .26em · 60%） */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          fontSize: "clamp(9px,0.9vw,11px)",
          letterSpacing: "0.26em",
          lineHeight: 1.7,
          textTransform: "uppercase",
          whiteSpace: "pre-line",
          color: "rgba(244,241,234,.6)",
        }}
      >
        <div className="absolute" style={{ top: `calc(${cornerInset} + 18px)`, left: `calc(${cornerInset} + 18px)` }}>
          <div>xiaozhe</div>
          <div className="mt-1 text-[#f4f1ea]/60">一个还在成长的程序员</div>
        </div>
        <div className="absolute text-right" style={{ top: `calc(${cornerInset} + 18px)`, right: `calc(${cornerInset} + 18px)` }}>
          Portfolio · 2026
        </div>
        <div className="absolute" style={{ bottom: `calc(${cornerInset} + 18px)`, left: `calc(${cornerInset} + 18px)` }}>
          diy爱好者 · 代码 · 吉他 · 无畏契约
        </div>
        <div
          className="absolute"
          style={{
            top: "50%",
            right: `calc(${cornerInset} + 6px)`,
            transform: "translateY(-50%)",
            writingMode: "vertical-rl",
            letterSpacing: "0.3em",
          }}
        >
          广东
        </div>
      </div>

      {/* 内部滚动容器 */}
      <div
        ref={scrollElRef}
        className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>

        {/* 第一屏：模型居中，文字叠底（原站 classic Flow：底部锚定） */}
        <section className="pointer-events-none relative z-[1] -mb-[28.57vh] flex h-screen w-full flex-col items-center justify-end px-6 pb-[7vh] text-center">
          <div className="flex flex-col items-center">
            <h1
              className="text-[clamp(28px,5.2vw,60px)] font-semibold leading-[1.05] tracking-[-0.01em] text-[#f4f1ea]"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              XIAO ZHE
            </h1>
            <p className="mt-3 max-w-[min(560px,86vw)] text-[clamp(12px,1.3vw,15px)] leading-relaxed text-[#f4f1ea]/80">
              Your future is created by what you do today, not tomorrow.
            </p>
            <div className="pointer-events-auto mt-6 flex flex-wrap gap-2">
              {[
                { src: "/images/juejin.png", href: "https://juejin.cn/user/1295692732053241", label: "掘金" },
                { src: "/images/github.png", href: "https://github.com/ConsoleLZ", label: "GitHub" },
                { src: "/images/email.png", href: "mailto:17347187569@163.com", label: "邮箱" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/85 transition-colors hover:bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.label} className="size-4 object-contain" />
                </a>
              ))}
            </div>
            {/* 底部 Scroll down 提示（原站 scroll-cue） */}
            <div className="mt-[2.2vh] flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#f4f1ea]/60">Scroll down</span>
              <span
                className="relative block h-10 w-px overflow-hidden"
                style={{ background: "linear-gradient(rgba(244,241,234,.28), rgba(244,241,234,.04))" }}
              >
                <span
                  className="absolute left-1/2 top-0 h-[9px] w-[3px] rounded-[2px] bg-[#f4f1ea] shadow-[0_0_6px_rgba(244,241,234,.8)]"
                  style={{ animation: "scroll-cue 2s ease-in-out infinite" }}
                />
              </span>
            </div>
          </div>
        </section>

        {/* 滚动后右侧时间线（原站 classic Renderer） */}
        <section className="relative w-full">
          <div className="ml-auto mr-[clamp(20px,6vw,72px)] w-[min(420px,86vw)] px-[34px] pb-[20vh] pt-[30vh]">
            <div className="relative">
              {/* 竖线 */}
              <span
                className="absolute left-[5px] top-[6px] w-px bg-[#f4f1ea]"
                style={{ height: `${(timeline.length - 1) * 71.43}vh` }}
                aria-hidden="true"
              />
              {timeline.map((item, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="pl-[34px]" style={{ minHeight: "71.43vh" }}>
                    <div className="relative">
                      {/* 节点圆点（原站 nodeColor #ffd9b3 + 光晕） */}
                      <span
                        className="absolute -left-[34px] top-[6px] size-[11px] rounded-full bg-[#ffd9b3] shadow-[0_0_0_4px_rgba(255,217,179,0.14)]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 pt-2.5">
                          <h2
                            className="text-[clamp(18px,2.4vw,26px)] font-semibold leading-[1.25] text-[#f4f1ea]"
                            style={{ fontFamily: DISPLAY_FONT }}
                          >
                            {item.title}
                          </h2>
                        </div>
                        <div className="pt-1.5 text-[15px] font-normal text-[#f4f1ea]/80">{item.subtitle}</div>
                        <div className="pt-4 text-[14px] leading-[1.5] font-normal text-[#f4f1ea]/95">{item.body}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes scroll-cue {
          0% { opacity: 0; transform: translate(-50%, -2px); }
          18%, 82% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, 30px); }
        }
      `}</style>
    </main>
  )
}

useGLTF.preload("/glb/me-draco.glb", "https://www.gstatic.com/draco/v1/decoders/")

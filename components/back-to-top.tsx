"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:border-foreground hover:text-foreground",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
      )}
      aria-label="回到顶部"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}

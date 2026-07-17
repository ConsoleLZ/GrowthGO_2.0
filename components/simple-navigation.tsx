"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function SimpleNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-[8px] flex items-center justify-center text-accent-on">
            <img src="/avatar.png" alt="" />
          </div>
          <span className="text-[14px] font-medium tracking-tight text-foreground/90 group-hover:text-accent transition-colors">
            小哲
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

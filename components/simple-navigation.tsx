"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function SimpleNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-highlight flex items-center justify-center text-highlight-foreground">
              <Sparkles size={16} />
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight group-hover:text-highlight transition-colors">
              小哲
            </span>
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

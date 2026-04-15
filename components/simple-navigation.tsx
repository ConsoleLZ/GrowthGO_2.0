"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function SimpleNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground tracking-tight hover:opacity-80 transition-opacity">
            小哲
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
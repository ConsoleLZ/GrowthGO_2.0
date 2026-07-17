"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "首页" },
  { href: "/category", label: "导航" },
  { href: "/blog", label: "笔记" },
  { href: "/stats", label: "统计" },
  { href: "/guestbook", label: "留言板" },
]

function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 hover:bg-secondary/50 transition-colors duration-200"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-[3px]">
            <span className={cn(
              "h-[2px] w-4 rounded-full bg-foreground transition-all duration-300",
              open ? "translate-y-[4px] rotate-45" : ""
            )} />
            <span className={cn(
              "h-[2px] w-4 rounded-full bg-foreground transition-all duration-300",
              open ? "opacity-0" : ""
            )} />
            <span className={cn(
              "h-[2px] w-4 rounded-full bg-foreground transition-all duration-300",
              open ? "-translate-y-[4px] -rotate-45" : ""
            )} />
          </div>
          <span className="sr-only">切换菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] border-l border-border/40 bg-background/90 backdrop-blur-xl sm:w-[300px]"
      >
        <SheetTitle className="sr-only">导航菜单</SheetTitle>
        <div className="flex flex-col space-y-8 pt-12">
          <div className="px-6">
            <Link
              href="/"
              className="text-xl font-serif tracking-tight text-foreground/90"
              onClick={() => setOpen(false)}
            >
              小哲的一些宝藏
            </Link>
          </div>
          <nav className="flex flex-col space-y-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center px-4 py-3 text-[15px] font-medium transition-all duration-200 rounded-[8px]",
                  pathname === item.href
                    ? "text-accent bg-accent/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
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

function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "px-3 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 rounded-[8px]",
            pathname === item.href
              ? "text-accent bg-accent/8"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export function SimpleNavigation() {
  const isMobile = useIsMobile()

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

        {isMobile ? (
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNav />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <DesktopNav />
            <div className="h-4 w-px bg-border/50 mx-1" />
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  )
}
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
  { href: "/category", label: "分类" },
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
          className="relative h-9 w-9 hover:bg-accent/20 transition-colors duration-200"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
            <span 
              className={cn(
                "h-0.5 w-4 transform rounded-full bg-foreground transition-all duration-300",
                open ? "translate-y-1 rotate-45" : ""
              )}
            />
            <span 
              className={cn(
                "h-0.5 w-4 rounded-full bg-foreground transition-all duration-300",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "h-0.5 w-4 transform rounded-full bg-foreground transition-all duration-300",
                open ? "-translate-y-1 -rotate-45" : ""
              )}
            />
          </div>
          <span className="sr-only">切换菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[280px] border-l border-border/40 bg-background/90 backdrop-blur-lg sm:w-[300px]"
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
          
          <nav className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center px-4 py-3 text-base font-medium transition-all duration-200 border-l-2",
                  pathname === item.href
                    ? "text-foreground border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-accent/10"
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
    <nav className="hidden md:flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-all duration-200 px-2 py-1 rounded-md",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          )}
        >
          {item.label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  )
}

export function NavHeader() {
  const isMobile = useIsMobile()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="text-base font-serif tracking-tight hover:opacity-80 transition-opacity duration-200"
        >
          小哲的一些宝藏
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        ) : (
          <DesktopNav />
        )}
      </div>
    </header>
  )
}
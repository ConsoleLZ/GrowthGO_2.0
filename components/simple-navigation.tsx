"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
          className="relative h-9 w-9 text-white hover:bg-white/10 transition-colors duration-200"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-[3px]">
            <span className={cn(
              "h-[2px] w-4 rounded-full bg-white transition-all duration-300",
              open ? "translate-y-[4px] rotate-45" : ""
            )} />
            <span className={cn(
              "h-[2px] w-4 rounded-full bg-white transition-all duration-300",
              open ? "opacity-0" : ""
            )} />
            <span className={cn(
              "h-[2px] w-4 rounded-full bg-white transition-all duration-300",
              open ? "-translate-y-[4px] -rotate-45" : ""
            )} />
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
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 text-[15px] font-medium transition-all duration-200 rounded-[8px]",
                    active
                      ? "text-white bg-white/5"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SimpleNavigation() {
  const isMobile = useIsMobile()
  const pathname = usePathname()

  return (
    <header
      className={cn(
        "fixed z-50",
        isMobile ? "right-[16px] top-[20px]" : "left-1/2 top-[30px] -translate-x-1/2"
      )}
    >
      {isMobile ? (
        <MobileNav />
      ) : (
        <nav className="flex items-center gap-6 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[12px] font-normal uppercase tracking-[0.2em] transition-colors duration-300",
                  active ? "text-[#f4f1ea]" : "text-[#f4f1ea]/55 hover:text-[#f4f1ea]"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "#about", label: "关于" },
  { href: "#experience", label: "经历" },
  { href: "#projects", label: "项目" },
  { href: "#contact", label: "联系" },
]

export function ResumeNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-7 h-7 rounded-[8px] bg-accent flex items-center justify-center text-accent-on">
            <Sparkles size={13} />
          </div>
          <span className="font-serif text-[16px] font-semibold tracking-tight text-foreground/90 group-hover:text-accent transition-colors">
            小哲
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-[8px] hover:bg-secondary/50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-border/50" />
          {/* <ThemeToggle /> */}
          <a
            href="mailto:17347187569@163.com"
            className="px-4 py-1.5 text-[13px] font-medium rounded-[980px] bg-accent text-accent-on hover:opacity-90 transition-opacity"
          >
            联系我
          </a>
        </div>

        <div className="md:hidden flex items-center gap-1">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-[8px] hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-[8px] text-[15px] text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:17347187569@163.com"
              className="block w-full text-center px-4 py-3 rounded-[8px] text-[14px] font-medium bg-accent text-accent-on mt-2"
            >
              联系我
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

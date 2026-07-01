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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
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
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-5 w-px bg-border" />
            <ThemeToggle />
            <a
              href="mailto:17347187569@163.com"
              className="px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              联系我
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in-up">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:17347187569@163.com"
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-medium bg-foreground text-background"
            >
              联系我
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

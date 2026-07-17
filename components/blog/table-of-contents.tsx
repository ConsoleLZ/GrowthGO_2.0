"use client"

import { useEffect, useState } from "react"

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const extractedHeadings: Heading[] = []

    headingElements.forEach((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, "-") || ""
      const text = element.textContent || ""
      const level = parseInt(element.tagName.substring(1))
      if (text && level >= 2 && level <= 4) {
        extractedHeadings.push({ id, text, level })
      }
    })
    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      if (headingElements.length === 0) return

      const offset = 150
      const scrollTop = window.scrollY + offset
      let currentActiveId = ""

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset
        if (elementTop <= scrollTop) { currentActiveId = element.id; break }
      }
      if (!currentActiveId && headingElements.length > 0) currentActiveId = headingElements[0].id
      setActiveId(currentActiveId)
    }

    const debouncedScroll = () => requestAnimationFrame(handleScroll)
    window.addEventListener("scroll", debouncedScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", debouncedScroll)
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementTop - 100, behavior: "smooth" })
      setActiveId(id)
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
      <div className="space-y-2">
        <h3 className="text-[12px] font-semibold text-muted-foreground mb-4 tracking-[0.02em]">
          文章大纲
        </h3>
        <nav className="space-y-0.5">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              style={{ paddingLeft: `${(heading.level - 2) * 12 + 12}px` }}
              className={`block w-full text-left text-[12px] py-1 transition-colors border-l-2 ${
                activeId === heading.id
                  ? "text-accent font-medium border-accent"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted"
              }`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

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
    // 从HTML内容中提取标题
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
    
    const extractedHeadings: Heading[] = []
    
    headingElements.forEach((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, "-") || ""
      const text = element.textContent || ""
      const level = parseInt(element.tagName.substring(1))
      
      if (text && level >= 2 && level <= 4) { // 只显示 h2-h4 标题
        extractedHeadings.push({ id, text, level })
      }
    })
    
    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    // 监听滚动，高亮当前可见的标题
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => 
        document.getElementById(id)
      ).filter(Boolean) as HTMLElement[]
      
      if (headingElements.length === 0) return
      
      const offset = 150 // 偏移量，考虑导航栏和间距
      const scrollTop = window.scrollY + offset
      
      let currentActiveId = ""
      
      // 从后往前查找第一个进入视口的标题
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset
        
        if (elementTop <= scrollTop) {
          currentActiveId = element.id
          break
        }
      }
      
      // 如果没有找到，选择第一个标题
      if (!currentActiveId && headingElements.length > 0) {
        currentActiveId = headingElements[0].id
      }
      
      setActiveId(currentActiveId)
    }
    
    // 添加防抖，避免频繁触发
    const debouncedScroll = () => {
      requestAnimationFrame(handleScroll)
    }
    
    window.addEventListener("scroll", debouncedScroll, { passive: true })
    handleScroll() // 初始检查
    
    return () => window.removeEventListener("scroll", debouncedScroll)
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // 获取元素相对于文档顶部的精确位置
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      
      // 计算滚动位置，考虑导航栏高度
      const offset = 100
      const targetPosition = elementTop - offset
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      })
      
      // 更新活动ID
      setActiveId(id)
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4">
          文章大纲
        </h3>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left text-sm transition-colors hover:text-foreground ${
                activeId === heading.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              } ${
                heading.level === 2 ? "pl-0" :
                heading.level === 3 ? "pl-4" :
                "pl-8"
              }`}
              style={{
                paddingLeft: `${(heading.level - 2) * 16}px`
              }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
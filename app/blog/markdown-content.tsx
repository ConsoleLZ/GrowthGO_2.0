"use client"

import { useEffect, useRef } from "react"
import "./typora-compatible-styles.css"
import "./highlight-styles.css"
import "./katex-styles.css"

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const preElements = container.querySelectorAll("pre")

    preElements.forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return

      const wrapper = document.createElement("div")
      wrapper.className = "code-block-wrapper"
      pre.parentNode?.insertBefore(wrapper, pre)
      wrapper.appendChild(pre)

      const copyBtn = document.createElement("button")
      copyBtn.className = "copy-btn"
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon" style="display: none;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `

      copyBtn.addEventListener("click", async () => {
        const code = pre.querySelector("code")
        if (!code) return

        try {
          await navigator.clipboard.writeText(code.textContent || "")
          copyBtn.classList.add("copied")
          copyBtn.querySelector(".copy-icon")!.style.display = "none"
          copyBtn.querySelector(".check-icon")!.style.display = "block"

          setTimeout(() => {
            copyBtn.classList.remove("copied")
            copyBtn.querySelector(".copy-icon")!.style.display = "block"
            copyBtn.querySelector(".check-icon")!.style.display = "none"
          }, 2000)
        } catch (error) {
          console.error("Failed to copy code:", error)
        }
      })

      wrapper.appendChild(copyBtn)
    })
  }, [content])

  return (
    <div 
      ref={containerRef}
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
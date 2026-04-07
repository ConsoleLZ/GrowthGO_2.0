"use client"

import "./typora-compatible-styles.css"
import "./highlight-styles.css"
import "./katex-styles.css"

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div 
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
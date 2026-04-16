"use client"

import { useEffect, useRef } from "react"
import { SimpleNavigation } from "@/components/simple-navigation"

declare global {
  interface Window {
    Valine: any
  }
}

export function GuestbookClient() {
  const valineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 动态加载 Valine 脚本
    const loadValine = () => {
      if (typeof window !== 'undefined' && !window.Valine) {
        const script = document.createElement('script')
        script.src = '//unpkg.com/valine/dist/Valine.min.js'
        script.async = true
        script.onload = initializeValine
        document.head.appendChild(script)
      } else {
        initializeValine()
      }
    }

    const initializeValine = () => {
      if (window.Valine && valineRef.current) {
        // 清除之前的实例
        if (valineRef.current.children.length > 0) {
          valineRef.current.innerHTML = ''
        }

        new window.Valine({
            el: '#vcomments',
            appId: '1Wgun0BNYRkq1uy13wzMTTlt-gzGzoHsz',
            appKey: 'LgkvFc6EjDZy8neCIKorXwET',
            placeholder: '这是一个留言板，你可以留下一点东西在这里',
            avatar: 'wavatar',
            pageSize: 10,
        })
      }
    }

    loadValine()

    // 清理函数
    return () => {
      if (valineRef.current) {
        valineRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      
      <main className="pt-20 mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-xl font-serif tracking-tight">
              留言板
            </h1>
          </div>

          <div id="vcomments" ref={valineRef} className="min-h-[400px]">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">正在加载留言系统...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

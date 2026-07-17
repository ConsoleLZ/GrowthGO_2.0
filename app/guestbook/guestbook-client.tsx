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
        if (valineRef.current.children.length > 0) {
          valineRef.current.innerHTML = ''
        }
        new window.Valine({
          el: '#vcomments',
          appId: 'xxxx',
          appKey: 'xxxx',
          placeholder: '这是一个留言板，你可以留下一点东西在这里',
          avatar: 'wavatar',
          pageSize: 10,
        })
      }
    }

    loadValine()
    return () => {
      if (valineRef.current) valineRef.current.innerHTML = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      <main className="pt-20 mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-serif font-semibold tracking-[-0.01em]">留言板</h1>
            <p className="mt-1.5 text-[14px] text-muted-foreground">欢迎留下你的想法，我会尽快回复</p>
          </div>

          {/* <div id="vcomments" ref={valineRef} className="min-h-[400px]">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-accent border-t-transparent mx-auto mb-3"></div>
                <p className="text-[13px] text-muted-foreground">正在加载留言系统...</p>
              </div>
            </div>
          </div> */}
          <div>LeanCloud 将于 2027 年 1 月 12 日停止对外提供服务, 留言板暂时停止使用...</div>
        </div>
      </main>
    </div>
  )
}

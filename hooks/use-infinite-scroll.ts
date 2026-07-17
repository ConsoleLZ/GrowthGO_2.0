import { useState, useEffect, useCallback, useRef } from 'react'

interface UseInfiniteScrollOptions {
  threshold?: number
  hasMore: boolean
  onLoadMore: () => void
  timeout?: number
}

export function useInfiniteScroll({
  threshold = 100,
  hasMore,
  onLoadMore,
  timeout = 2000 // 默认2秒超时
}: UseInfiniteScrollOptions) {
  const [isLoading, setIsLoading] = useState(false)
  const isLoadingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const checkScrollPosition = useCallback(() => {
    if (isLoadingRef.current || !hasMore) return

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    // 更精确的滚动检测，增加容错范围
    const distanceToBottom = scrollHeight - (scrollTop + clientHeight)
    
    if (distanceToBottom <= threshold) {
      isLoadingRef.current = true
      setIsLoading(true)
      
      // 设置超时，确保即使加载失败也能恢复状态
      timeoutRef.current = setTimeout(() => {
        isLoadingRef.current = false
        setIsLoading(false)
      }, timeout)
      
      onLoadMore()
    }
  }, [hasMore, threshold, onLoadMore, timeout])

  const handleScroll = useCallback(() => {
    // 添加防抖，避免频繁触发
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      checkScrollPosition()
    }, 50) // 50ms防抖延迟
  }, [checkScrollPosition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // 初始检查一次，确保页面加载时就能检测到
    checkScrollPosition()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll, checkScrollPosition])

  const resetLoading = useCallback(() => {
    isLoadingRef.current = false
    setIsLoading(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  return { isLoading, resetLoading }
}
import { useState, useEffect, useCallback } from 'react'

interface UseInfiniteScrollOptions {
  threshold?: number
  hasMore: boolean
  onLoadMore: () => void
}

export function useInfiniteScroll({
  threshold = 100,
  hasMore,
  onLoadMore
}: UseInfiniteScrollOptions) {
  const [isLoading, setIsLoading] = useState(false)

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      setIsLoading(true)
      onLoadMore()
    }
  }, [isLoading, hasMore, threshold, onLoadMore])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const resetLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  return { isLoading, resetLoading }
}
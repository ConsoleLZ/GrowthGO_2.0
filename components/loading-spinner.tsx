export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8 gap-2">
      <div className="animate-spin rounded-full h-5 w-5 border-2 border-accent border-t-transparent"></div>
      <span className="text-[13px] text-muted-foreground">加载中...</span>
    </div>
  )
}

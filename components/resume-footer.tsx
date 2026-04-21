export function ResumeFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          <span className="mr-4">友链：</span>
          <a className="mr-3" href="https://blog.joker2yue.com/" target="_blank">joker2yue</a>
          <a href="https://mikeytk.cn/" target="_blank">mikey</a>
        </p>
      </div>
    </footer>
  )
}

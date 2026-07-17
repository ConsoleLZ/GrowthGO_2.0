"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { TableOfContents } from "./table-of-contents"

interface MobileTocDrawerProps {
  content: string
}

export function MobileTocDrawer({ content }: MobileTocDrawerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="lg:hidden fixed bottom-6 right-6 z-50 shadow-lg bg-background text-[12px] rounded-[8px] border-border/50"
        >
          <Menu className="h-3.5 w-3.5 mr-1.5" />
          大纲
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 bg-background">
        <SheetTitle className="sr-only">文章大纲</SheetTitle>
        <div className="pt-6 px-4">
          <TableOfContents content={content} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

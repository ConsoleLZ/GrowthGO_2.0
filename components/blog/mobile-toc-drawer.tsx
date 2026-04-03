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
          className="lg:hidden fixed bottom-6 right-6 z-50 shadow-lg bg-background dark:bg-background"
        >
          <Menu className="h-4 w-4 mr-2" />
          大纲
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-background dark:bg-background">
        <SheetTitle className="sr-only">文章大纲</SheetTitle>
        <div className="pt-6 px-4">
          <TableOfContents content={content} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
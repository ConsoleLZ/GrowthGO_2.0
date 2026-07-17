"use client"

import { ArrowUpRight } from "lucide-react"
import { LazyImage } from "@/components/lazy-image"
import type { Site } from "@/lib/data"

interface SiteCardProps {
  site: Site
}

export function SiteCard({ site }: SiteCardProps) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-4 border-b border-border/50 last:border-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] font-medium group-hover:text-accent transition-colors">{site.name}</h3>
            <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="mt-0.5 text-[13px] text-muted-foreground line-clamp-1">{site.description}</p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          {site.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[11px] text-muted-foreground">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function SiteCardGrid({ site }: SiteCardProps) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[8px] border border-border/50 p-4 transition-all hover:border-border hover:bg-secondary/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-secondary overflow-hidden">
          <LazyImage
            src={site.ico}
            alt={site.name}
            className="h-5 w-5 object-contain"
            fallback={<span className="text-[13px] font-medium text-muted-foreground">{site.name.charAt(0)}</span>}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[13px] font-medium truncate group-hover:text-accent transition-colors">{site.name}</h3>
          <p className="text-[11px] text-muted-foreground truncate">{site.description}</p>
        </div>
      </div>
    </a>
  )
}

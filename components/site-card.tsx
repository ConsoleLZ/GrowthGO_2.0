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
            <h3 className="text-sm font-medium">{site.name}</h3>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
            {site.description}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          {site.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground"
            >
              {tag}
            </span>
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
      className="group block rounded-lg border border-border/50 p-4 transition-colors hover:border-border hover:bg-muted/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted overflow-hidden">
          <LazyImage
            src={site.ico}
            alt={site.name}
            className="h-5 w-5 object-contain"
            fallback={<span className="text-sm font-medium">{site.name.charAt(0)}</span>}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium truncate">{site.name}</h3>
          <p className="text-xs text-muted-foreground truncate">{site.description}</p>
        </div>
      </div>
    </a>
  )
}

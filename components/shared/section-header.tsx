import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleNode?: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
  titleId?: string
}

export function SectionHeader({
  eyebrow,
  title,
  titleNode,
  description,
  align = "left",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <Badge
          variant="outline"
          className="rounded-full border-[color:var(--brand-accent-border)] bg-[color:var(--brand-accent-soft)] px-3 py-1 text-[0.68rem] tracking-[0.22em] text-white/82 uppercase backdrop-blur-xl"
        >
          {eyebrow}
        </Badge>
      ) : null}
      <div className="space-y-3">
        <h2
          id={titleId}
          className="max-w-2xl text-3xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl"
        >
          {titleNode ?? title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

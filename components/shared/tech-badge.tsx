import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { TechCategory } from "@/types/content"

const categoryLabels: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  cloud: "Cloud",
  design: "Design",
  automation: "Automation",
  strategy: "Strategy",
}

interface TechBadgeProps {
  label: string
  category?: TechCategory
  className?: string
}

export function TechBadge({ label, category, className }: TechBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto rounded-full border-[color:var(--brand-accent-border)] bg-[color:var(--brand-accent-soft)] px-3 py-1.5 text-[0.76rem] font-medium text-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl",
        className
      )}
    >
      <span>{label}</span>
      {category ? (
        <span className="ml-2 rounded-full bg-white/8 px-2 py-0.5 text-[0.63rem] tracking-[0.18em] text-white/52 uppercase">
          {categoryLabels[category]}
        </span>
      ) : null}
    </Badge>
  )
}

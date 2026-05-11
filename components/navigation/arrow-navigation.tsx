import { ArrowLeft, ArrowRight } from "lucide-react"

import { GlassPanel } from "@/components/shared/glass-panel"
import { cn } from "@/lib/utils"

interface ArrowNavigationProps {
  currentLabel: string
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
  className?: string
}

export function ArrowNavigation({
  currentLabel,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  className,
}: ArrowNavigationProps) {
  return (
    <GlassPanel
      tone="subtle"
      padding="sm"
      className={cn(
        "flex items-center gap-2 rounded-full border-white/10 bg-black/15",
        className
      )}
    >
      <button
        type="button"
        onClick={onPrevious}
        aria-label={`Go to previous identity: ${previousLabel}`}
        className="focus-ring glass-interactive inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 hover:bg-white/[0.1] hover:text-white"
      >
        <ArrowLeft className="size-4" />
      </button>
      <div className="hidden min-w-[7rem] px-2 text-center sm:block">
        <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
          Current
        </p>
        <p className="mt-1 text-sm font-medium text-white">{currentLabel}</p>
      </div>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Go to next identity: ${nextLabel}`}
        className="focus-ring glass-interactive inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 hover:bg-white/[0.1] hover:text-white"
      >
        <ArrowRight className="size-4" />
      </button>
    </GlassPanel>
  )
}

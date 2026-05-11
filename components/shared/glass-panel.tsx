import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const glassPanelVariants = cva(
  "relative overflow-hidden rounded-[1.75rem] text-foreground shadow-none",
  {
    variants: {
      tone: {
        default: "glass-panel soft-texture",
        strong: "glass-panel-strong soft-texture",
        subtle:
          "border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_24px_60px_rgba(4,10,24,0.18)]",
      },
      padding: {
        none: "",
        sm: "p-4 sm:p-5",
        md: "p-5 sm:p-6 lg:p-7",
        lg: "p-6 sm:p-8 lg:p-10",
      },
    },
    defaultVariants: {
      tone: "default",
      padding: "md",
    },
  }
)

export interface GlassPanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassPanelVariants> {
  asChild?: boolean
}

export function GlassPanel({
  className,
  tone,
  padding,
  asChild = false,
  ...props
}: GlassPanelProps) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      className={cn(glassPanelVariants({ tone, padding }), className)}
      {...props}
    />
  )
}

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const studioButtonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "border border-[color:var(--brand-accent-border)] bg-[color:var(--brand-accent)] text-slate-950 shadow-[0_20px_42px_rgba(104,226,255,0.24),inset_0_1px_0_rgba(255,255,255,0.5)] hover:-translate-y-0.5 hover:bg-[color:var(--brand-accent-strong)]",
        secondary:
          "glass-panel border-[color:var(--brand-accent-border)] bg-[color:var(--brand-accent-soft)] text-white hover:-translate-y-0.5 hover:bg-[color:var(--brand-accent-soft)]",
        ghost:
          "border border-transparent bg-transparent text-white/72 hover:bg-white/[0.06] hover:text-white",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface StudioButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof studioButtonVariants> {
  asChild?: boolean
}

export function StudioButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: StudioButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      className={cn(studioButtonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

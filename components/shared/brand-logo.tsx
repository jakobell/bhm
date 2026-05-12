import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  speed?: number
  colors?: [string, string, string, string]
}

export function BrandLogo({
  className,
  speed = 0.9,
  colors = [
    "var(--brand-accent)",
    "var(--brand-accent-strong)",
    "rgb(255 255 255 / 0.94)",
    "rgb(125 211 252 / 0.95)",
  ],
}: BrandLogoProps) {
  const logoStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    backgroundSize: "220% 220%",
    animationDuration: `${10 / speed}s`,
    maskImage: "url('/logo_hbm.svg')",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
    WebkitMaskImage: "url('/logo_hbm.svg')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
  } satisfies CSSProperties

  return (
    <div
      className={cn(
        "relative isolate inline-flex h-7 w-[6.5rem] shrink-0 items-center justify-center",
        className
      )}
      aria-label="BHM Studios"
      role="img"
    >
      <div className="absolute inset-[-16%] rounded-full bg-[radial-gradient(circle,var(--brand-accent-soft),transparent_72%)] blur-xl" />
      <div
        aria-hidden="true"
        className="animate-aurora relative z-10 h-full w-full drop-shadow-[0_0_18px_rgba(104,226,255,0.22)]"
        style={logoStyle}
      />
    </div>
  )
}

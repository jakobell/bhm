"use client"

import * as React from "react"

import { BorderBeam } from "@/components/ui/border-beam"
import { ShineBorder } from "@/components/ui/shine-border"
import { cn } from "@/lib/utils"
import { GlassPanel, type GlassPanelProps } from "@/components/shared/glass-panel"

export interface LightBorderCardProps extends GlassPanelProps {
  beam?: boolean
}

export function LightBorderCard({
  children,
  className,
  beam = true,
  tone = "strong",
  padding = "md",
  ...props
}: LightBorderCardProps) {
  return (
    <GlassPanel
      tone={tone}
      padding={padding}
      className={cn(
        "glass-interactive group isolate rounded-[2rem] hover:border-white/18 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_42px_110px_rgba(4,10,24,0.5)]",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_22%,transparent)] opacity-90" />
      <ShineBorder
        borderWidth={1}
        duration={16}
        shineColor={[
          "rgba(255,255,255,0.14)",
          "rgba(166,190,255,0.34)",
          "rgba(255,255,255,0.12)",
        ]}
      />
      {beam ? (
        <BorderBeam
          size={112}
          duration={9}
          borderWidth={1.2}
          colorFrom="rgba(255,255,255,0.22)"
          colorTo="rgba(166,190,255,0.68)"
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </GlassPanel>
  )
}

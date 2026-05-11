import { ArrowUpRight } from "lucide-react"

import { LightBorderCard } from "@/components/shared/light-border-card"
import { StudioButton } from "@/components/shared/studio-button"
import type { FounderProfile, IdentityId } from "@/types/content"

interface FounderPreviewCardProps {
  founder: FounderProfile
  onSelectFounder: (identityId: IdentityId) => void
}

export function FounderPreviewCard({
  founder,
  onSelectFounder,
}: FounderPreviewCardProps) {
  return (
    <LightBorderCard className="h-full rounded-[1.9rem]">
      <div className="flex h-full flex-col gap-6">
        <div className="space-y-3">
          <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
            Founder
          </p>
          <div>
            <h3 className="text-2xl leading-tight font-medium tracking-[-0.04em] text-white">
              {founder.fullName}
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/58">{founder.role}</p>
          </div>
          <p className="text-sm leading-7 text-white/66">{founder.overview}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {founder.strengths.slice(0, 3).map((strength) => (
            <span
              key={strength}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] text-white/72"
            >
              {strength}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <StudioButton
            variant="secondary"
            onClick={() => onSelectFounder(founder.id)}
            aria-label={`Switch to ${founder.fullName}'s portfolio`}
          >
            View portfolio
            <ArrowUpRight className="size-4" />
          </StudioButton>
        </div>
      </div>
    </LightBorderCard>
  )
}

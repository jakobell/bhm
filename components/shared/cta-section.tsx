import Link from "next/link"

import type { CallToActionGroup } from "@/types/content"
import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import { StudioButton } from "@/components/shared/studio-button"

interface CTASectionProps {
  eyebrow?: string
  title: string
  description: string
  actions: CallToActionGroup
}

export function CTASection({
  eyebrow,
  title,
  description,
  actions,
}: CTASectionProps) {
  return (
    <LightBorderCard className="rounded-[2rem] p-0" padding="none">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_0.8fr] lg:p-10">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="flex flex-col items-start justify-center gap-3 lg:items-end">
          <StudioButton asChild variant="primary" size="lg">
            <Link href={actions.primary.href}>{actions.primary.label}</Link>
          </StudioButton>
          {actions.secondary ? (
            <StudioButton asChild variant="secondary" size="lg">
              <Link href={actions.secondary.href}>{actions.secondary.label}</Link>
            </StudioButton>
          ) : null}
        </div>
      </div>
    </LightBorderCard>
  )
}

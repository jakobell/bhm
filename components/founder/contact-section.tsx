import { ArrowLeft } from "lucide-react"

import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import { StudioButton } from "@/components/shared/studio-button"
import type { FounderProfile, IdentityId } from "@/types/content"

interface ContactSectionProps {
  founder: FounderProfile
  onSelectIdentity: (identityId: IdentityId) => void
}

export function ContactSection({
  founder,
  onSelectIdentity,
}: ContactSectionProps) {
  return (
    <LightBorderCard className="rounded-[2rem]">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <SectionHeader
          titleId={`founder-contact-heading-${founder.id}`}
          eyebrow="Founder Contact"
          title={`Work directly with ${founder.fullName}.`}
          description={founder.contact.availability}
        />

        <div className="flex flex-col items-start justify-center gap-3 lg:items-end">
          <StudioButton asChild size="lg">
            <a href={`mailto:${founder.contact.email}`}>{founder.contact.ctaLabel}</a>
          </StudioButton>
          <StudioButton
            variant="secondary"
            size="lg"
            onClick={() => onSelectIdentity("agency")}
          >
            <ArrowLeft className="size-4" />
            Back to BHM Studios
          </StudioButton>
        </div>
      </div>
    </LightBorderCard>
  )
}

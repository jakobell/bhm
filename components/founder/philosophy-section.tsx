import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import type { FounderExperienceProfile, FounderProfile } from "@/types/content"

interface PhilosophySectionProps {
  founder: FounderProfile
  experience: FounderExperienceProfile
}

export function PhilosophySection({
  founder,
  experience,
}: PhilosophySectionProps) {
  return (
    <section
      aria-labelledby={`founder-philosophy-heading-${founder.id}`}
      className="grid gap-5 xl:grid-cols-[1fr_1fr]"
    >
      <LightBorderCard className="rounded-[1.9rem]">
        <SectionHeader
          titleId={`founder-philosophy-heading-${founder.id}`}
          eyebrow={experience.philosophyEyebrow}
          title={experience.philosophyTitle}
          description={founder.philosophy}
        />
      </LightBorderCard>

      <LightBorderCard tone="default" className="rounded-[1.9rem]">
        <div className="space-y-4">
          <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
            {experience.workingStyleLabel}
          </p>
          <p className="text-sm leading-7 text-white/68">{founder.workingStyle}</p>
        </div>
      </LightBorderCard>
    </section>
  )
}

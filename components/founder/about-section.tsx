import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import type { FounderExperienceProfile, FounderProfile } from "@/types/content"

interface AboutSectionProps {
  founder: FounderProfile
  experience: FounderExperienceProfile
}

export function AboutSection({ founder, experience }: AboutSectionProps) {
  return (
    <section
      aria-labelledby={`founder-about-heading-${founder.id}`}
      className="space-y-5"
    >
      <SectionHeader
        titleId={`founder-about-heading-${founder.id}`}
        eyebrow="About"
        title="Background, strengths, and perspective."
        description={experience.strengthsDescription}
      />

      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <LightBorderCard className="rounded-[1.9rem]">
          <div className="space-y-6">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
                Background
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                {founder.background}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                  Education
                </p>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  {founder.education}
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                  Expertise
                </p>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  {founder.expertise}
                </p>
              </div>
            </div>
          </div>
        </LightBorderCard>

        <LightBorderCard tone="default" className="rounded-[1.9rem]">
          <div className="space-y-5">
            <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
              {experience.strengthsTitle}
            </p>
            <div className="grid gap-3">
              {founder.strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </LightBorderCard>
      </div>
    </section>
  )
}

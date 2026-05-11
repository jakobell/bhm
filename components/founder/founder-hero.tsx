import { ArrowUpRight, MapPin } from "lucide-react"

import { GlassPanel } from "@/components/shared/glass-panel"
import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import { StudioButton } from "@/components/shared/studio-button"
import { TechBadge } from "@/components/shared/tech-badge"
import { AuroraText } from "@/components/ui/aurora-text"
import { cn } from "@/lib/utils"
import type {
  FounderExperienceProfile,
  FounderProfile,
  IdentityId,
} from "@/types/content"

interface FounderHeroProps {
  founder: FounderProfile
  experience: FounderExperienceProfile
  onBackToAgency: (identityId: IdentityId) => void
}

export function FounderHero({
  founder,
  experience,
  onBackToAgency,
}: FounderHeroProps) {
  const portraitMonogram = founder.fullName.slice(0, 1)

  return (
    <LightBorderCard className="rounded-[2.2rem]">
      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <SectionHeader
            titleId={`founder-hero-heading-${founder.id}`}
            eyebrow={experience.heroEyebrow}
            title={experience.heroTitle}
            titleNode={
              <>
                <AuroraText
                  className="align-baseline"
                  colors={["#66E2FF", "#A5F3FC", "#38BDF8", "#22D3EE"]}
                  speed={0.6}
                >
                  {founder.fullName}
                </AuroraText>
                {" · "}
                {experience.heroTitle}
              </>
            }
            description={experience.heroDescription}
          />

          <div className="space-y-4">
            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {founder.intro}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
              {founder.overview}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <StudioButton
              variant="secondary"
              size="lg"
              onClick={() => onBackToAgency("agency")}
            >
              Back to agency
            </StudioButton>
            <StudioButton asChild size="lg">
              <a href={`mailto:${founder.contact.email}`}>
                {founder.contact.ctaLabel}
                <ArrowUpRight className="size-4" />
              </a>
            </StudioButton>
          </div>

          <div className="flex flex-wrap gap-2">
            {founder.skills[0]?.items.slice(0, 4).map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>
        </div>

        <GlassPanel tone="subtle" className="rounded-[1.9rem] p-5 sm:p-6 lg:p-7">
          <div className="flex h-full flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
                Portrait area
              </p>
              <div className="flex items-center gap-2 text-sm text-white/54">
                <MapPin className="size-4" />
                <span>{founder.location}</span>
              </div>
            </div>

            <div
              className={cn(
                "relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-8",
                experience.portraitShapeClassName
              )}
            >
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/34 to-transparent" />
              <div
                className={cn(
                  "absolute inset-0 opacity-80",
                  experience.portraitAccentClassName
                )}
              />
              <div
                className={cn(
                  "absolute bottom-[-18%] left-1/2 h-36 w-36 -translate-x-1/2 rounded-full blur-2xl",
                  experience.portraitGlowClassName
                )}
              />

              <div className="relative flex min-h-[22rem] flex-col justify-between">
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] tracking-[0.2em] text-white/48 uppercase">
                  {experience.portraitLabel}
                </div>
                <div className="flex justify-center py-8">
                  <div className={cn(experience.portraitShellClassName)}>
                    {portraitMonogram}
                  </div>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-black/10 p-4">
                  <p className="text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                    View direction
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {experience.heroNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </LightBorderCard>
  )
}

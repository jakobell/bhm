import Image from "next/image"
import { ArrowUpRight, MapPin } from "lucide-react"

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
  return (
    <LightBorderCard className="overflow-hidden rounded-[2.2rem] p-0">
      <div className="grid min-h-[42rem] xl:grid-cols-[0.92fr_1.08fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-20 flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-10 xl:py-12">
          <div className="max-w-2xl space-y-8">
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
              <p className="max-w-xl text-base leading-8 text-white/76 sm:text-lg">
                {founder.intro}
              </p>
              <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
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

            <div className="flex flex-wrap gap-2 pt-2">
              {founder.skills[0]?.items.slice(0, 4).map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PORTRAIT */}
        <div
          className={cn(
            "relative min-h-[34rem] overflow-hidden border-t border-white/10 xl:border-l xl:border-t-0",
            "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]",
            experience.portraitShapeClassName
          )}
        >
          {/* Image edge-to-edge */}
          <Image
            src={founder.portrait.src}
            alt={founder.portrait.alt}
            fill
            priority
            sizes="(min-width: 1280px) 54vw, 100vw"
            className={cn(
              "object-cover object-center",
              "scale-[1.03]",
              experience.portraitShellClassName
            )}
          />

          {/* Accent / mood overlays */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-75",
              experience.portraitAccentClassName
            )}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050b13]/75 via-[#050b13]/18 to-transparent xl:from-[#050b13]/35" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050b13]/92 via-[#050b13]/42 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/28 to-transparent" />

          <div
            className={cn(
              "pointer-events-none absolute bottom-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl",
              experience.portraitGlowClassName
            )}
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/34 to-transparent" />

          {/* Top meta row */}
          <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between gap-4 sm:left-7 sm:right-7 sm:top-7">
            <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/58 backdrop-blur-md">
              {experience.portraitLabel}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/68 backdrop-blur-md">
              <MapPin className="size-4" />
              <span>{founder.location}</span>
            </div>
          </div>

          {/* Bottom note */}
          <div className="absolute inset-x-5 bottom-5 z-20 sm:inset-x-7 sm:bottom-7">
            <div className="max-w-xl rounded-[1.5rem] border border-white/10 bg-black/22 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                View direction
              </p>
              <p className="mt-2 text-sm leading-7 text-white/72">
                {experience.heroNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LightBorderCard>
  )
}
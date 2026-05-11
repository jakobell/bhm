import { ArrowUpRight } from "lucide-react"

import { LightBorderCard } from "@/components/shared/light-border-card"
import { TechBadge } from "@/components/shared/tech-badge"
import type {
  FounderExperienceProfile,
  FounderProfile,
  Project,
} from "@/types/content"

interface FounderProjectCardProps {
  founder: FounderProfile
  experience: FounderExperienceProfile
  project: Project
}

export function FounderProjectCard({
  founder,
  experience,
  project,
}: FounderProjectCardProps) {
  return (
    <LightBorderCard className="h-full rounded-[1.9rem]">
      <div className="flex h-full flex-col gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
              {project.client}
            </p>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.68rem] text-white/60">
              {project.industry}
            </span>
          </div>

          <h3 className="text-2xl leading-tight font-medium tracking-[-0.04em] text-white">
            {project.title}
          </h3>
          <p className="text-sm leading-7 text-white/64">{project.summary}</p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-2 text-white/76">
            <ArrowUpRight className="size-4" />
            <p className="text-sm font-medium">{experience.contributionLabel}</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-white/64">
            {experience.contributionDescription}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </LightBorderCard>
  )
}

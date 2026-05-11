import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import { TechBadge } from "@/components/shared/tech-badge"
import type { FounderProfile, SkillGroup } from "@/types/content"

interface SkillsSectionProps {
  founder: FounderProfile
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <LightBorderCard tone="default" className="h-full rounded-[1.75rem]" beam={false}>
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
            {group.title}
          </p>
          <p className="text-sm leading-7 text-white/62">{group.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>
    </LightBorderCard>
  )
}

export function SkillsSection({ founder }: SkillsSectionProps) {
  return (
    <section
      aria-labelledby={`founder-skills-heading-${founder.id}`}
      className="space-y-5"
    >
      <SectionHeader
        titleId={`founder-skills-heading-${founder.id}`}
        eyebrow="Skills"
        title="Structured capability groups for real portfolio depth."
        description="The skill system is designed to scale from compact founder summaries to deeper role-specific capability maps."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {founder.skills.map((group) => (
          <SkillGroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  )
}

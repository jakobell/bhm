import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import type { FounderProfile, TimelineEntry } from "@/types/content"

interface TimelineProps {
  founder: FounderProfile
  entries: TimelineEntry[]
}

export function Timeline({ founder, entries }: TimelineProps) {
  return (
    <section
      aria-labelledby={`founder-timeline-heading-${founder.id}`}
      className="space-y-5"
    >
      <SectionHeader
        titleId={`founder-timeline-heading-${founder.id}`}
        eyebrow="Experience"
        title="A timeline structure ready for education, work, and milestones."
        description="This timeline component supports mixed entry types and scales well for richer CV-style detail later."
      />

      <div className="grid gap-4">
        {entries.map((entry, index) => (
          <LightBorderCard
            key={entry.id}
            tone={index % 2 === 0 ? "strong" : "default"}
            className="rounded-[1.8rem]"
            beam={false}
          >
            <div className="grid gap-5 lg:grid-cols-[0.28fr_0.72fr]">
              <div className="space-y-2">
                <p className="text-[0.68rem] tracking-[0.2em] text-white/42 uppercase">
                  {entry.type}
                </p>
                <p className="text-sm font-medium text-white/82">{entry.period}</p>
                <p className="text-sm text-white/56">{entry.location}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em] text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/58">{entry.organization}</p>
                </div>
                <p className="text-sm leading-7 text-white/66">{entry.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] text-white/72"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </LightBorderCard>
        ))}
      </div>
    </section>
  )
}

import { LightBorderCard } from "@/components/shared/light-border-card"
import { TechBadge } from "@/components/shared/tech-badge"
import type { Project } from "@/types/content"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <LightBorderCard className="h-full rounded-[1.9rem]">
      <div className="flex h-full flex-col gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
              {project.client}
            </p>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.68rem] text-white/64">
              {project.year}
            </span>
          </div>
          <h3 className="text-2xl leading-tight font-medium tracking-[-0.04em] text-white">
            {project.title}
          </h3>
          <p className="text-sm leading-7 text-white/64">{project.summary}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="text-[0.68rem] tracking-[0.16em] text-white/40 uppercase">
                {metric.label}
              </p>
              <p className="mt-2 text-base font-medium text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
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

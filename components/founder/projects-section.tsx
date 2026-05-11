import { SectionHeader } from "@/components/shared/section-header"
import type {
  FounderExperienceProfile,
  FounderProfile,
  Project,
} from "@/types/content"
import { FounderProjectCard } from "@/components/founder/founder-project-card"

interface ProjectsSectionProps {
  founder: FounderProfile
  experience: FounderExperienceProfile
  projects: Project[]
}

export function ProjectsSection({
  founder,
  experience,
  projects,
}: ProjectsSectionProps) {
  return (
    <section
      aria-labelledby={`founder-projects-heading-${founder.id}`}
      className="space-y-5"
    >
      <SectionHeader
        titleId={`founder-projects-heading-${founder.id}`}
        eyebrow="Selected Projects"
        title={experience.projectSectionTitle}
        description={experience.projectSectionDescription}
      />

      <div className="grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <FounderProjectCard
            key={project.id}
            founder={founder}
            experience={experience}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

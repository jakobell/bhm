import { founderExperiencesById, projectsById, timelineEntriesByFounder } from "@/data"
import { AboutSection } from "@/components/founder/about-section"
import { ContactSection } from "@/components/founder/contact-section"
import { FounderHero } from "@/components/founder/founder-hero"
import { PhilosophySection } from "@/components/founder/philosophy-section"
import { ProjectsSection } from "@/components/founder/projects-section"
import { SkillsSection } from "@/components/founder/skills-section"
import { Timeline } from "@/components/founder/timeline"
import type { FounderProfile, IdentityId } from "@/types/content"

interface FounderPageProps {
  founder: FounderProfile
  onSelectIdentity: (identityId: IdentityId) => void
}

export function FounderPage({
  founder,
  onSelectIdentity,
}: FounderPageProps) {
  const experience = founderExperiencesById[founder.id]
  const projects = founder.featuredProjectIds
    .map((id) => projectsById[id])
    .filter(Boolean)
  const timelineEntries = timelineEntriesByFounder[founder.id]

  return (
    <div
      id={`identity-panel-${founder.id}`}
      role="tabpanel"
      aria-labelledby={`identity-tab-${founder.id}`}
      className="space-y-6"
    >
      <FounderHero
        founder={founder}
        experience={experience}
        onBackToAgency={onSelectIdentity}
      />
      <AboutSection founder={founder} experience={experience} />
      <SkillsSection founder={founder} />
      <ProjectsSection
        founder={founder}
        experience={experience}
        projects={projects}
      />
      <Timeline founder={founder} entries={timelineEntries} />
      <PhilosophySection founder={founder} experience={experience} />
      <ContactSection founder={founder} onSelectIdentity={onSelectIdentity} />
    </div>
  )
}

import { agency } from "@/data/agency"
import { founders } from "@/data/founders"
import { founderExperiences } from "@/data/founder-experiences"
import { navigationIdentities } from "@/data/navigation"
import { projects } from "@/data/projects"
import { services } from "@/data/services"
import { techStack } from "@/data/tech-stack"
import { timelineEntriesByFounder } from "@/data/timeline"
import type { FounderId } from "@/types/content"

export {
  agency,
  founderExperiences,
  founders,
  navigationIdentities,
  projects,
  services,
  techStack,
  timelineEntriesByFounder,
}

export const foundersById = Object.fromEntries(
  founders.map((founder) => [founder.id, founder])
) as Record<FounderId, (typeof founders)[number]>

export const projectsById = Object.fromEntries(
  projects.map((project) => [project.id, project])
) as Record<string, (typeof projects)[number]>

export const founderExperiencesById = Object.fromEntries(
  founderExperiences.map((experience) => [experience.founderId, experience])
) as Record<string, (typeof founderExperiences)[number]>

export const servicesById = Object.fromEntries(
  services.map((service) => [service.id, service])
) as Record<string, (typeof services)[number]>

export const siteContent = {
  agency,
  founderExperiences,
  founders,
  navigationIdentities,
  projects,
  services,
  techStack,
  timelineEntriesByFounder,
}

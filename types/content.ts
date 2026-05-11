export type FounderId = "huetter" | "baar" | "munz"

export type IdentityId = "agency" | FounderId

export type TimelineEntryType = "work" | "education" | "milestone"

export type TechCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "cloud"
  | "design"
  | "automation"
  | "strategy"

export interface LinkItem {
  label: string
  href: string
  external?: boolean
}

export interface CallToActionGroup {
  primary: LinkItem
  secondary?: LinkItem
}

export interface NavigationIdentity {
  id: IdentityId
  label: string
  shortLabel: string
  kind: "agency" | "founder"
  description: string
}

export interface Service {
  id: string
  name: string
  summary: string
  emphasis: string
  deliverables: string[]
}

export interface ProcessStep {
  id: string
  title: string
  summary: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export interface TechStackItem {
  name: string
  category: TechCategory
  description: string
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  slug: string
  client: string
  industry: string
  year: string
  summary: string
  challenge: string
  outcome: string
  services: string[]
  stack: string[]
  featuredFounderIds: FounderId[]
  metrics: ProjectMetric[]
}

export interface TimelineEntry {
  id: string
  type: TimelineEntryType
  title: string
  organization: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  items: string[]
}

export interface FounderPortrait {
  src: string
  alt: string
}

export interface FounderContact {
  email: string
  availability: string
  ctaLabel: string
}

export interface FounderExperienceProfile {
  founderId: FounderId
  heroEyebrow: string
  heroTitle: string
  heroDescription: string
  heroNote: string
  portraitLabel: string
  portraitShapeClassName: string
  portraitShellClassName: string
  portraitGlowClassName: string
  portraitAccentClassName: string
  strengthsTitle: string
  strengthsDescription: string
  projectSectionTitle: string
  projectSectionDescription: string
  contributionLabel: string
  contributionDescription: string
  philosophyTitle: string
  philosophyEyebrow: string
  workingStyleLabel: string
}

export interface FounderProfile {
  id: FounderId
  name: string
  fullName: string
  role: string
  focus: string
  location: string
  intro: string
  overview: string
  background: string
  education: string
  expertise: string
  strengths: string[]
  philosophy: string
  workingStyle: string
  portrait: FounderPortrait
  skills: SkillGroup[]
  featuredProjectIds: string[]
  timelineEntryIds: string[]
  contact: FounderContact
}

export interface AgencyContact {
  email: string
  phone: string
  location: string
  availability: string
}

export interface AgencyProfile {
  id: "agency"
  name: string
  acronym: string[]
  headline: string
  positioning: string
  summary: string
  description: string
  cta: CallToActionGroup
  featuredProjectIds: string[]
  founderIds: FounderId[]
  serviceIds: string[]
  techStack: string[]
  process: ProcessStep[]
  testimonials: Testimonial[]
  trustPoints: string[]
  contact: AgencyContact
}

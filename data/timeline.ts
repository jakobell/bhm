import type { FounderId, TimelineEntry } from "@/types/content"

export const timelineEntriesByFounder: Record<FounderId, TimelineEntry[]> = {
  huetter: [
    {
      id: "huetter-systems-degree",
      type: "education",
      title: "B.Sc. in Software Engineering",
      organization: "University of Applied Sciences",
      period: "2016 - 2019",
      location: "Germany",
      summary:
        "Built a strong technical base in software architecture, systems design, and applied engineering practice.",
      highlights: [
        "Focus on distributed systems",
        "Applied architecture projects",
        "Strong foundation in engineering quality",
      ],
    },
    {
      id: "huetter-platform-lead",
      type: "work",
      title: "Lead Product Engineer",
      organization: "Independent Product Consultancy",
      period: "2019 - 2023",
      location: "Remote",
      summary:
        "Led product delivery for web platforms that required clean architecture, reliable execution, and technical clarity.",
      highlights: [
        "Owned engineering direction",
        "Set delivery standards",
        "Mentored implementation teams",
      ],
    },
    {
      id: "huetter-bhm",
      type: "milestone",
      title: "Co-founded BHM Studios",
      organization: "BHM Studios",
      period: "2024 - Present",
      location: "Germany",
      summary:
        "Co-shaped the agency around premium product delivery, technical depth, and close founder involvement.",
      highlights: [
        "Architecture leadership",
        "Client collaboration",
        "Delivery process design",
      ],
    },
  ],
  baar: [
    {
      id: "baar-interaction-design",
      type: "education",
      title: "B.A. in Interaction Design",
      organization: "Design University",
      period: "2015 - 2018",
      location: "Germany",
      summary:
        "Developed a product-focused design mindset centered on clarity, systems thinking, and digital craft.",
      highlights: [
        "Interface systems",
        "Human-centered product thinking",
        "Design research foundation",
      ],
    },
    {
      id: "baar-design-engineer",
      type: "work",
      title: "Senior Design Engineer",
      organization: "Digital Product Studio",
      period: "2018 - 2024",
      location: "Berlin",
      summary:
        "Worked across design and implementation, translating product strategy into refined interfaces and working systems.",
      highlights: [
        "Built shared design systems",
        "Bridged design and engineering",
        "Led product UX direction",
      ],
    },
    {
      id: "baar-bhm",
      type: "milestone",
      title: "Co-founded BHM Studios",
      organization: "BHM Studios",
      period: "2024 - Present",
      location: "Germany",
      summary:
        "Established the agency's visual and product quality standard across client work and internal systems.",
      highlights: [
        "Experience direction",
        "System-level UI quality",
        "Product communication",
      ],
    },
  ],
  munz: [
    {
      id: "munz-computer-science",
      type: "education",
      title: "M.Sc. in Computer Science",
      organization: "Technical University",
      period: "2014 - 2019",
      location: "Germany",
      summary:
        "Specialized in backend systems, data structures, and robust technical problem solving.",
      highlights: [
        "Systems engineering",
        "Backend design",
        "Analytical depth",
      ],
    },
    {
      id: "munz-automation-architect",
      type: "work",
      title: "Platform & Automation Architect",
      organization: "Operations Software Company",
      period: "2019 - 2024",
      location: "Munich",
      summary:
        "Designed service integrations and workflow platforms that improved reliability for operational teams.",
      highlights: [
        "Automation architecture",
        "Platform integration",
        "Operational process optimization",
      ],
    },
    {
      id: "munz-bhm",
      type: "milestone",
      title: "Co-founded BHM Studios",
      organization: "BHM Studios",
      period: "2024 - Present",
      location: "Germany",
      summary:
        "Brought a systems and operations perspective to the agency, with a focus on reliable delivery and technical leverage.",
      highlights: [
        "Integration strategy",
        "Delivery resilience",
        "Technical operations thinking",
      ],
    },
  ],
}

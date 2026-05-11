import type { FounderProfile } from "@/types/content"

export const founders: FounderProfile[] = [
  {
    id: "huetter",
    name: "H\u00FCtter",
    fullName: "H\u00FCtter",
    role: "Product Engineering & Systems Architecture",
    focus: "Architecture, platform thinking, and dependable execution.",
    location: "Germany",
    intro:
      "H\u00FCtter shapes the technical backbone of ambitious digital products, balancing architectural rigor with delivery pragmatism.",
    overview:
      "He focuses on translating complex requirements into clear product systems that teams can ship, maintain, and extend with confidence.",
    background:
      "His background is rooted in product engineering for multi-stakeholder systems where clarity, resilience, and maintainability matter just as much as speed.",
    education:
      "Software engineering foundation with a strong focus on systems design and practical architecture.",
    expertise:
      "Platform architecture, application structure, backend boundaries, technical strategy, and engineering process.",
    strengths: [
      "System decomposition",
      "Technical clarity",
      "Cross-functional communication",
      "Quality-focused delivery",
    ],
    philosophy:
      "Well-designed software should reduce ambiguity, support good decisions, and stay comprehensible as teams and products grow.",
    workingStyle:
      "Calm, structured, and detail-aware, with a preference for decisions that improve both present delivery and long-term maintainability.",
    portrait: {
      src: "/images/founders/huetter-portrait.jpg",
      alt: "Portrait placeholder for H\u00FCtter",
    },
    skills: [
      {
        id: "huetter-engineering",
        title: "Engineering Core",
        description: "Architecture and implementation areas H\u00FCtter leads most directly.",
        items: ["TypeScript", "Node.js", "API design", "System architecture"],
      },
      {
        id: "huetter-platform",
        title: "Platform Thinking",
        description: "Patterns used to keep products adaptable and stable.",
        items: ["Domain modeling", "Scalability planning", "Codebase structure", "Quality workflows"],
      },
      {
        id: "huetter-collaboration",
        title: "Working Strengths",
        description: "Ways of contributing beyond code.",
        items: ["Technical leadership", "Client workshops", "Mentoring", "Delivery planning"],
      },
    ],
    featuredProjectIds: ["atlas-ops", "helios-field"],
    timelineEntryIds: [
      "huetter-systems-degree",
      "huetter-platform-lead",
      "huetter-bhm",
    ],
    contact: {
      email: "huetter@bhmstudios.dev",
      availability: "Available for product architecture, platform strategy, and technical discovery.",
      ctaLabel: "Discuss architecture with H\u00FCtter",
    },
  },
  {
    id: "baar",
    name: "Baar",
    fullName: "Baar",
    role: "Design Engineering & Product Experience",
    focus: "Interface systems, product UX, and premium frontend craft.",
    location: "Berlin, Germany",
    intro:
      "Baar works at the intersection of design and engineering, building interfaces that feel composed, intuitive, and production-ready.",
    overview:
      "He turns product intent into elegant interaction systems, ensuring that visual quality, usability, and implementation stay aligned from concept to release.",
    background:
      "His background spans product design, design systems, and frontend implementation for products that need both clarity and strong visual presence.",
    education:
      "Interaction design training with a focus on systems thinking, interface craft, and digital product usability.",
    expertise:
      "Design systems, frontend implementation, interaction design, product framing, and polished user experiences.",
    strengths: [
      "Visual systems thinking",
      "Design-to-code translation",
      "Interaction quality",
      "Interface refinement",
    ],
    philosophy:
      "Interfaces should communicate trust instantly and make complex workflows feel calm, precise, and obvious.",
    workingStyle:
      "Thoughtful, highly detail-oriented, and collaborative, with strong sensitivity for pacing, hierarchy, and product feel.",
    portrait: {
      src: "/images/founders/baar-portrait.jpg",
      alt: "Portrait placeholder for Baar",
    },
    skills: [
      {
        id: "baar-design-systems",
        title: "Experience Design",
        description: "Core product disciplines that shape premium digital experiences.",
        items: ["UX architecture", "Interaction design", "Design systems", "Information hierarchy"],
      },
      {
        id: "baar-frontend",
        title: "Frontend Craft",
        description: "Implementation strengths that support refined UI delivery.",
        items: ["Next.js", "React", "Tailwind CSS", "Motion design"],
      },
      {
        id: "baar-collaboration",
        title: "Product Collaboration",
        description: "How Baar supports teams and product direction.",
        items: ["Workshops", "Prototype thinking", "Stakeholder alignment", "Product storytelling"],
      },
    ],
    featuredProjectIds: ["luma-health", "northstar-portal"],
    timelineEntryIds: [
      "baar-interaction-design",
      "baar-design-engineer",
      "baar-bhm",
    ],
    contact: {
      email: "baar@bhmstudios.dev",
      availability: "Available for experience design, frontend systems, and interface strategy.",
      ctaLabel: "Discuss product experience with Baar",
    },
  },
  {
    id: "munz",
    name: "Munz",
    fullName: "Munz",
    role: "Automation, Backend Systems & Delivery Operations",
    focus: "Integrations, workflow systems, and reliable technical operations.",
    location: "Munich, Germany",
    intro:
      "Munz builds the dependable systems behind ambitious digital products, with particular strength in automation, integrations, and operational clarity.",
    overview:
      "He focuses on the infrastructure and service logic that keep products moving smoothly, especially where reliability and business workflow matter.",
    background:
      "His experience centers on backend architecture and technical operations for products that need strong process support and stable execution.",
    education:
      "Advanced computer science training with strong emphasis on backend systems, analysis, and technical problem solving.",
    expertise:
      "Backend services, platform integrations, delivery operations, process automation, and systems reliability.",
    strengths: [
      "Backend reliability",
      "Automation strategy",
      "Operational thinking",
      "Integration design",
    ],
    philosophy:
      "Good systems work quietly in the background, reduce fragility, and give teams confidence in how a product behaves under pressure.",
    workingStyle:
      "Methodical, solution-oriented, and pragmatic, with strong attention to edge cases, resilience, and operational usefulness.",
    portrait: {
      src: "/images/founders/munz-portrait.jpg",
      alt: "Portrait placeholder for Munz",
    },
    skills: [
      {
        id: "munz-backend",
        title: "Backend & Infrastructure",
        description: "Core technical domains Munz leads across projects.",
        items: ["Node.js", "PostgreSQL", "Prisma", "Cloud infrastructure"],
      },
      {
        id: "munz-automation",
        title: "Automation Systems",
        description: "Areas that create operational leverage for clients.",
        items: ["Integrations", "Workflow automation", "Internal tools", "Service orchestration"],
      },
      {
        id: "munz-delivery",
        title: "Delivery Strengths",
        description: "How Munz strengthens production delivery.",
        items: ["Technical planning", "Risk reduction", "Monitoring mindset", "Reliability reviews"],
      },
    ],
    featuredProjectIds: ["atlas-ops", "northstar-portal", "helios-field"],
    timelineEntryIds: [
      "munz-computer-science",
      "munz-automation-architect",
      "munz-bhm",
    ],
    contact: {
      email: "munz@bhmstudios.dev",
      availability: "Available for automation strategy, backend systems, and delivery operations.",
      ctaLabel: "Discuss systems with Munz",
    },
  },
]

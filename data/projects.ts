import type { Project } from "@/types/content"

export const projects: Project[] = [
  {
    id: "atlas-ops",
    title: "Atlas Ops Platform",
    slug: "atlas-ops-platform",
    client: "Atlas Logistics Group",
    industry: "Operations Technology",
    year: "2025",
    summary:
      "A multi-role operational platform for dispatching, route oversight, and service visibility across distributed teams.",
    challenge:
      "Legacy workflows were fragmented across spreadsheets, email, and disconnected internal tools, slowing decisions and increasing coordination overhead.",
    outcome:
      "BHM Studios delivered a consolidated control surface that reduced daily coordination friction and created a clearer operational picture for leadership and on-the-ground teams.",
    services: ["custom-software", "web-applications", "product-strategy"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    featuredFounderIds: ["huetter", "munz"],
    metrics: [
      { label: "Workflow Consolidation", value: "6 systems into 1" },
      { label: "Dispatch Response", value: "-34%" },
      { label: "Leadership Visibility", value: "real-time" },
    ],
  },
  {
    id: "luma-health",
    title: "Luma Care Companion",
    slug: "luma-care-companion",
    client: "Luma Health Collective",
    industry: "Digital Health",
    year: "2024",
    summary:
      "A patient-facing digital product designed to unify appointments, care communication, and guided recovery journeys.",
    challenge:
      "The client needed a calmer and more trustworthy digital experience that would support adoption across users with varying levels of technical confidence.",
    outcome:
      "The resulting product paired an intuitive experience with a maintainable design system, helping the team move from pilot concept to a credible product baseline.",
    services: ["ui-ux-design", "web-applications", "mobile-products"],
    stack: ["Next.js", "React Native", "TypeScript", "Figma"],
    featuredFounderIds: ["baar"],
    metrics: [
      { label: "Patient Flow Coverage", value: "end-to-end" },
      { label: "Design System Readiness", value: "production-ready" },
      { label: "Pilot Rollout", value: "3 clinics" },
    ],
  },
  {
    id: "northstar-portal",
    title: "Northstar Partner Portal",
    slug: "northstar-partner-portal",
    client: "Northstar Industrial",
    industry: "B2B Services",
    year: "2026",
    summary:
      "A premium partner portal for quotes, approvals, project updates, and documentation exchange.",
    challenge:
      "The client wanted a modern digital touchpoint that felt higher trust than a generic dashboard while still integrating with existing internal systems.",
    outcome:
      "BHM Studios designed and built a portal architecture that balanced polished presentation with pragmatic systems integration and internal maintainability.",
    services: ["custom-software", "ui-ux-design", "automation-integrations"],
    stack: ["Next.js", "Tailwind CSS", "tRPC", "Prisma", "PostgreSQL"],
    featuredFounderIds: ["baar", "munz"],
    metrics: [
      { label: "Manual Quote Handling", value: "-41%" },
      { label: "Partner Satisfaction", value: "+22 pts" },
      { label: "Document Traceability", value: "centralized" },
    ],
  },
  {
    id: "helios-field",
    title: "Helios Field Toolkit",
    slug: "helios-field-toolkit",
    client: "Helios Energy Systems",
    industry: "Field Service",
    year: "2025",
    summary:
      "A hybrid field-service toolkit for technicians managing visits, inspections, and service reporting in constrained environments.",
    challenge:
      "The product had to support unreliable connectivity, high operational clarity, and faster handoff between office teams and technicians in the field.",
    outcome:
      "The platform delivered stronger on-site consistency and more dependable reporting while giving operations teams better insight into work completion.",
    services: ["mobile-products", "custom-software", "automation-integrations"],
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    featuredFounderIds: ["huetter", "munz"],
    metrics: [
      { label: "Report Turnaround", value: "-52%" },
      { label: "Offline Capability", value: "core workflows" },
      { label: "Field Adoption", value: "high" },
    ],
  },
]

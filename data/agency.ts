import type { AgencyProfile } from "@/types/content"

export const agency: AgencyProfile = {
  id: "agency",
  name: "BHM Studios",
  acronym: ["H\u00FCtter", "Baar", "Munz"],
  headline: "Software, digital products, and premium experiences shaped by founders who build.",
  positioning:
    "BHM Studios is a software and digital product agency for teams that need strategic thinking, refined execution, and direct collaboration with senior builders.",
  summary:
    "We design and develop custom software, web applications, mobile products, and internal systems with a strong focus on clarity, quality, and long-term usefulness.",
  description:
    "The studio combines product strategy, engineering depth, interface craft, and operational thinking into one founder-led delivery model. Every engagement is designed to feel calm, capable, and intentional from the first workshop to production release.",
  cta: {
    primary: {
      label: "Start a Project",
      href: "mailto:hello@bhmstudios.dev",
    },
    secondary: {
      label: "Explore the Founders",
      href: "#founders",
    },
  },
  featuredProjectIds: ["atlas-ops", "luma-health", "northstar-portal"],
  founderIds: ["huetter", "baar", "munz"],
  serviceIds: [
    "custom-software",
    "web-applications",
    "mobile-products",
    "ui-ux-design",
    "automation-integrations",
    "product-strategy",
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Framer Motion",
    "AWS",
    "n8n",
  ],
  process: [
    {
      id: "discovery",
      title: "Discover",
      summary:
        "We align on goals, constraints, and success signals before rushing into solution mode.",
    },
    {
      id: "shape",
      title: "Shape",
      summary:
        "We define the right architecture, product structure, and execution path with founder-level visibility.",
    },
    {
      id: "build",
      title: "Build",
      summary:
        "We deliver with a strong balance of technical quality, interface polish, and pragmatic momentum.",
    },
    {
      id: "evolve",
      title: "Evolve",
      summary:
        "We refine, scale, and strengthen the product once the real-world usage picture becomes clearer.",
    },
  ],
  testimonials: [
    {
      id: "testimonial-atlas",
      quote:
        "BHM Studios brought an unusual level of calm to a complicated platform initiative. The team cut through noise quickly and gave us a system we could actually operate with confidence.",
      author: "Elena Fischer",
      role: "Director of Operations",
      company: "Atlas Logistics Group",
    },
    {
      id: "testimonial-luma",
      quote:
        "What stood out was the combination of product sensitivity and technical sharpness. The experience felt premium, but the execution was equally grounded and production-minded.",
      author: "Mara Klein",
      role: "Product Lead",
      company: "Luma Health Collective",
    },
    {
      id: "testimonial-northstar",
      quote:
        "They worked like senior partners rather than an outsourced team. Decisions were well framed, tradeoffs were clear, and the final product felt far more credible than a standard portal rebuild.",
      author: "Jonas Richter",
      role: "Managing Partner",
      company: "Northstar Industrial",
    },
    {
      id: "testimonial-helios",
      quote:
        "BHM Studios improved both the interface and the underlying operational flow. We ended up with a product that technicians trusted and leadership could finally rely on.",
      author: "Sophie Neumann",
      role: "Field Systems Manager",
      company: "Helios Energy Systems",
    },
  ],
  trustPoints: [
    "Founder-led collaboration from concept to delivery",
    "Balanced expertise across product, design, and engineering",
    "Production-minded systems instead of presentation-heavy prototypes",
    "Deliberate emphasis on maintainability, clarity, and product quality",
  ],
  contact: {
    email: "hello@bhmstudios.dev",
    phone: "+49 30 0000 0000",
    location: "Germany, working across Europe",
    availability: "Open to selected product, platform, and transformation engagements.",
  },
}

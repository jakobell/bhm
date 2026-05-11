import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { HeroTerminal } from "@/components/agency/hero-terminal"
import { FounderPreviewCard } from "@/components/agency/founder-preview-card"
import { ProjectCard } from "@/components/agency/project-card"
import { ServiceCard } from "@/components/agency/service-card"
import { CTASection } from "@/components/shared/cta-section"
import { GlassPanel } from "@/components/shared/glass-panel"
import { LightBorderCard } from "@/components/shared/light-border-card"
import { SectionHeader } from "@/components/shared/section-header"
import { StudioButton } from "@/components/shared/studio-button"
import { TechBadge } from "@/components/shared/tech-badge"
import { AuroraText } from "@/components/ui/aurora-text"
import { Marquee } from "@/components/ui/marquee"
import {
  agency,
  foundersById,
  projectsById,
  servicesById,
  techStack,
} from "@/data"
import type { IdentityId } from "@/types/content"

interface AgencyPageProps {
  onSelectIdentity: (identityId: IdentityId) => void
}

function TestimonialMarqueeCard({
  quote,
  author,
  role,
  company,
}: (typeof agency.testimonials)[number]) {
  return (
    <div className="w-[20rem] shrink-0 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:w-[24rem]">
      <p className="text-sm leading-7 text-white/72">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 border-t border-white/8 pt-4">
        <p className="text-sm font-medium text-white">{author}</p>
        <p className="mt-1 text-xs tracking-[0.14em] text-white/46 uppercase">
          {role} {"\u00B7"} {company}
        </p>
      </div>
    </div>
  )
}

export function AgencyPage({ onSelectIdentity }: AgencyPageProps) {
  const featuredServices = agency.serviceIds.map((id) => servicesById[id])
  const featuredProjects = agency.featuredProjectIds.map((id) => projectsById[id])
  const founders = agency.founderIds.map((id) => foundersById[id])
  const featuredTech = techStack.filter((item) => agency.techStack.includes(item.name))

  return (
    <div
      id="identity-panel-agency"
      role="tabpanel"
      aria-labelledby="identity-tab-agency"
      className="space-y-6"
    >
      <LightBorderCard className="relative overflow-hidden rounded-[2.2rem]">
        <div className="pointer-events-none absolute inset-x-[28%] top-[8%] hidden h-[26rem] rounded-full bg-[radial-gradient(circle,rgba(64,220,255,0.14),transparent_68%)] blur-3xl xl:block" />

        <div className="relative z-10 grid gap-8 xl:min-h-[50rem] xl:grid-cols-[0.86fr_1.14fr] xl:gap-10">
          <div className="space-y-8 xl:max-w-[38rem] xl:py-6">
            <SectionHeader
              titleId="agency-hero-heading"
              eyebrow="BHM Studios"
              title={agency.headline}
              titleNode={
                <>
                  Software, digital products, and{" "}
                  <AuroraText
                    colors={["#66E2FF", "#7DD3FC", "#22D3EE", "#A5F3FC"]}
                    speed={0.7}
                  >
                    premium experiences
                  </AuroraText>{" "}
                  shaped by founders who build.
                </>
              }
              description={agency.positioning}
            />

            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {agency.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <StudioButton asChild size="lg">
                <Link href={agency.cta.primary.href}>{agency.cta.primary.label}</Link>
              </StudioButton>
              <StudioButton
                variant="secondary"
                size="lg"
                onClick={() => onSelectIdentity("huetter")}
              >
                Explore founders
                <ArrowRight className="size-4" />
              </StudioButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Engagement model", value: "Founder-led delivery" },
                { label: "Core focus", value: "Software + digital products" },
                { label: "Working style", value: "Calm, precise, strategic" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-[0.68rem] tracking-[0.18em] text-white/42 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <GlassPanel tone="subtle" className="rounded-[1.9rem] p-5 sm:p-6 lg:p-7 xl:hidden">
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
                  Command surface
                </p>
                <Sparkles className="size-4 text-white/62" />
              </div>

              <div className="space-y-3">
                <h2 className="text-gradient-silver text-4xl leading-[0.94] font-semibold tracking-[-0.06em] text-balance">
                  Strategy, acquisition, and{" "}
                  <AuroraText
                    className="align-baseline"
                    colors={["#66E2FF", "#A5F3FC", "#38BDF8", "#22D3EE"]}
                    speed={0.65}
                  >
                    brand growth
                  </AuroraText>{" "}
                  shown like a premium ops stack.
                </h2>
                <p className="text-sm leading-7 text-white/66">
                  The hero now communicates BHM Studios as a team that does not
                  just build software, but can also shape analysis, campaigns,
                  conversion systems, premium content, and scalable brand
                  operations with the same product mindset.
                </p>
              </div>

              <HeroTerminal className="min-h-[24rem] opacity-[0.92]" />

              <div className="mt-auto rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
                  Stack and contact
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredTech.slice(0, 6).map((item) => (
                    <TechBadge
                      key={item.name}
                      label={item.name}
                      category={item.category}
                    />
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm text-white/70">
                  <p>{agency.contact.email}</p>
                  <p>{agency.contact.location}</p>
                  <p>{agency.contact.availability}</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          <div className="relative hidden xl:flex xl:flex-col xl:justify-between xl:gap-6 xl:py-4">
            <HeroTerminal className="min-h-[34rem] flex-1 self-stretch" />

            <GlassPanel
              tone="subtle"
              className="w-[58%] rounded-[1.9rem] p-5 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
                  Stack and contact
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredTech.slice(0, 6).map((item) => (
                    <TechBadge
                      key={item.name}
                      label={item.name}
                      category={item.category}
                    />
                  ))}
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <p>{agency.contact.email}</p>
                  <p>{agency.contact.location}</p>
                  <p>{agency.contact.availability}</p>
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </LightBorderCard>

      <section aria-labelledby="agency-services-heading" className="space-y-5">
        <SectionHeader
          titleId="agency-services-heading"
          eyebrow="Services"
          title="Product strategy, software engineering, and interface quality in one delivery system."
          description="BHM Studios works across the full product arc, from shaping the right technical path to delivering polished, maintainable systems."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section aria-labelledby="agency-projects-heading" className="space-y-5">
        <SectionHeader
          titleId="agency-projects-heading"
          eyebrow="Selected Work"
          title="Case-study style project snapshots with real product posture."
          description="Each engagement is framed around product clarity, operational usefulness, and quality that holds up after launch."
        />
        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="agency-testimonials-heading" className="space-y-5">
        <SectionHeader
          titleId="agency-testimonials-heading"
          eyebrow="Client Signals"
          title="Generated testimonial statements placed where social proof actually helps."
          titleNode={
            <>
              Generated{" "}
              <AuroraText
                className="align-baseline"
                colors={["#66E2FF", "#7DD3FC", "#22D3EE", "#A5F3FC"]}
                speed={0.55}
              >
                testimonial statements
              </AuroraText>{" "}
              placed where social proof actually helps.
            </>
          }
          description="This marquee sits between work and team to reinforce credibility at the moment users are deciding whether the studio feels trustworthy and senior."
        />
        <GlassPanel tone="subtle" className="overflow-hidden rounded-[2rem] p-0">
          <Marquee
            pauseOnHover
            repeat={5}
            className="[--duration:40s] [--gap:1.25rem] py-3"
            aria-label="Scrolling client testimonial statements"
          >
            {agency.testimonials.map((testimonial) => (
              <TestimonialMarqueeCard key={testimonial.id} {...testimonial} />
            ))}
          </Marquee>
        </GlassPanel>
      </section>

      <section aria-labelledby="agency-team-heading" className="space-y-5">
        <SectionHeader
          titleId="agency-team-heading"
          eyebrow="Founders"
          title="Three complementary builders shaping one coherent studio."
          description="Clients work directly with founders whose strengths span architecture, product experience, and backend systems."
        />
        <div id="founders" className="grid gap-5 xl:grid-cols-3">
          {founders.map((founder) => (
            <FounderPreviewCard
              key={founder.id}
              founder={founder}
              onSelectFounder={onSelectIdentity}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <LightBorderCard className="rounded-[2rem]">
          <SectionHeader
            eyebrow="Process"
            title="A deliberate collaboration model built for high-trust execution."
            description="We keep the process clear, founder-visible, and calm so the product can move with momentum without losing precision."
          />
          <div className="mt-8 grid gap-4">
            {agency.process.map((step, index) => (
              <div
                key={step.id}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-medium text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/64">
                      {step.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LightBorderCard>

        <LightBorderCard tone="default" className="rounded-[2rem]">
          <SectionHeader
            eyebrow="Trust & Quality"
            title="Built to feel premium in both experience and execution."
            description="The studio is positioned for teams that care about decision quality, implementation polish, and systems that remain understandable over time."
          />
          <div className="mt-8 grid gap-4">
            {agency.trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-sm leading-7 text-white/68">{point}</p>
              </div>
            ))}
          </div>
        </LightBorderCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <CTASection
          eyebrow="Start a Project"
          title="Bring a product, platform, or transformation initiative into a sharper execution environment."
          description="BHM Studios is built for organizations that want senior involvement, refined digital quality, and systems that support long-term progress."
          actions={agency.cta}
        />

        <LightBorderCard className="rounded-[2rem]" beam={false}>
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Contact"
              title="Reach the studio directly."
              description="Keep the first conversation simple. We can align on context, goals, and where the product needs more clarity or momentum."
            />
            <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                  Email
                </p>
                <p className="mt-2">{agency.contact.email}</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                  Phone
                </p>
                <p className="mt-2">{agency.contact.phone}</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 sm:col-span-2">
                <p className="text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                  Location
                </p>
                <p className="mt-2">{agency.contact.location}</p>
                <p className="mt-2 text-white/58">{agency.contact.availability}</p>
              </div>
            </div>
          </div>
        </LightBorderCard>
      </section>

      <footer className="rounded-[2rem] border border-white/8 bg-white/[0.03] px-5 py-5 text-sm text-white/48 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{agency.name}</p>
          <p>
            Software, digital products, and premium experiences by H{"\u00FC"}tter,
            Baar, and Munz.
          </p>
        </div>
      </footer>
    </div>
  )
}

import { LightBorderCard } from "@/components/shared/light-border-card"
import type { Service } from "@/types/content"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <LightBorderCard className="h-full rounded-[1.75rem]">
      <div className="flex h-full flex-col gap-5">
        <div className="space-y-3">
          <p className="text-[0.68rem] tracking-[0.22em] text-white/42 uppercase">
            {service.name}
          </p>
          <h3 className="text-xl leading-tight font-medium tracking-[-0.03em] text-white">
            {service.emphasis}
          </h3>
          <p className="text-sm leading-7 text-white/64">{service.summary}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {service.deliverables.map((deliverable) => (
            <span
              key={deliverable}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.72rem] text-white/72"
            >
              {deliverable}
            </span>
          ))}
        </div>
      </div>
    </LightBorderCard>
  )
}

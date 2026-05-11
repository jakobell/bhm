"use client"

import { useRef } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import type { IdentityId, NavigationIdentity } from "@/types/content"

interface IdentitySwitcherProps {
  identities: NavigationIdentity[]
  activeIdentityId: IdentityId
  onSelect: (identityId: IdentityId) => void
}

export function IdentitySwitcher({
  identities,
  activeIdentityId,
  onSelect,
}: IdentitySwitcherProps) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])

  function focusIndex(index: number) {
    const normalized = (index + identities.length) % identities.length
    buttonRefs.current[normalized]?.focus()
  }

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="tablist"
      aria-label="Switch between BHM Studios and founder views"
    >
      {identities.map((identity, index) => {
        const isActive = identity.id === activeIdentityId

        return (
          <button
            key={identity.id}
            ref={(node) => {
              buttonRefs.current[index] = node
            }}
            id={`identity-tab-${identity.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`identity-panel-${identity.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(identity.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault()
                const nextIndex = (index + 1) % identities.length
                onSelect(identities[nextIndex].id)
                focusIndex(nextIndex)
              }

              if (event.key === "ArrowLeft") {
                event.preventDefault()
                const nextIndex = (index - 1 + identities.length) % identities.length
                onSelect(identities[nextIndex].id)
                focusIndex(nextIndex)
              }

              if (event.key === "Home") {
                event.preventDefault()
                onSelect(identities[0].id)
                focusIndex(0)
              }

              if (event.key === "End") {
                event.preventDefault()
                const lastIndex = identities.length - 1
                onSelect(identities[lastIndex].id)
                focusIndex(lastIndex)
              }
            }}
            className={cn(
              "focus-ring relative overflow-hidden rounded-full px-3.5 py-2 text-left text-xs tracking-[0.18em] uppercase transition-colors duration-300 sm:text-[0.7rem]",
              isActive
                ? "text-white"
                : "border border-transparent text-white/48 hover:bg-[color:var(--brand-accent-soft)] hover:text-white/78"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="identity-switcher-pill"
                className="absolute inset-0 rounded-full border border-[color:var(--brand-accent-border)] bg-[color:var(--brand-accent-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_20px_rgba(104,226,255,0.12)]"
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              />
            ) : null}
            <span className="relative z-10">{identity.label}</span>
          </button>
        )
      })}
    </div>
  )
}

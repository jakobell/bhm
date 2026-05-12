"use client"

import { GlassPanel } from "@/components/shared/glass-panel"
import { BrandLogo } from "@/components/shared/brand-logo"
import { IdentitySwitcher } from "@/components/navigation/identity-switcher"
import type { IdentityId, NavigationIdentity } from "@/types/content"

interface FloatingNavbarProps {
  identities: NavigationIdentity[]
  activeIdentityId: IdentityId
  activeIdentity: NavigationIdentity
  onSelect: (identityId: IdentityId) => void
}

export function FloatingNavbar({
  identities,
  activeIdentityId,
  activeIdentity,
  onSelect,
}: FloatingNavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full py-4 sm:py-6">      
    <div className="studio-container">
        <GlassPanel
          tone="strong"
          padding="sm"
          className="
            rounded-[1.75rem]
            px-4 py-3
            shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_26px_70px_rgba(4,10,24,0.42)]
            backdrop-blur-2xl
            sm:px-5 sm:py-4
          "
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <BrandLogo className="h-9 w-[7rem] shrink-0" />

                <div className="min-w-0">
                  <p className="text-[0.65rem] tracking-[0.22em] text-white/44 uppercase">
                    Identity Carousel
                  </p>

                  <div className="mt-1 flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-end sm:gap-3">
                    <p className="truncate text-base font-medium text-white sm:text-lg">
                      {activeIdentity.label}
                    </p>

                    <p className="line-clamp-1 text-sm text-white/54">
                      {activeIdentity.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 overflow-x-auto pb-1 xl:pb-0">
              <IdentitySwitcher
                identities={identities}
                activeIdentityId={activeIdentityId}
                onSelect={onSelect}
              />
            </div>
          </div>
        </GlassPanel>
      </div>
    </header>
  )
}
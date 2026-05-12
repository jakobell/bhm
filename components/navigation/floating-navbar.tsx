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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 pt-4 sm:pt-6">
      <div className="studio-container">
        <GlassPanel
          tone="strong"
          padding="sm"
          className="pointer-events-auto rounded-[1.75rem] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_26px_70px_rgba(4,10,24,0.42)] sm:px-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-4">
                  <BrandLogo className="h-9 w-[7.0rem]" />

                <div className="min-w-0">
                  <p className="text-[0.68rem] tracking-[0.24em] text-white/44 uppercase">
                    Identity Carousel
                  </p>
                  <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <p className="text-base font-medium text-white sm:text-lg">
                      {activeIdentity.label}
                    </p>
                    <p className="text-sm text-white/54">
                      {activeIdentity.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <IdentitySwitcher
              identities={identities}
              activeIdentityId={activeIdentityId}
              onSelect={onSelect}
            />
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}

import { foundersById } from "@/data"
import { AgencyPage } from "@/components/agency/agency-page"
import { FounderPage } from "@/components/founder/founder-page"
import type { IdentityId, NavigationIdentity } from "@/types/content"

interface IdentityStageProps {
  activeIdentity: NavigationIdentity
  onSelectIdentity: (identityId: IdentityId) => void
}

export function IdentityStage({
  activeIdentity,
  onSelectIdentity,
}: IdentityStageProps) {
  if (activeIdentity.id === "agency") {
    return <AgencyPage onSelectIdentity={onSelectIdentity} />
  }

  const founder = foundersById[activeIdentity.id]

  return <FounderPage founder={founder} onSelectIdentity={onSelectIdentity} />
}

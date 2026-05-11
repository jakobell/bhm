import type { IdentityId, NavigationIdentity } from "@/types/content"

export function getIdentityIndex(
  identities: NavigationIdentity[],
  identityId: IdentityId
) {
  return identities.findIndex((identity) => identity.id === identityId)
}

export function getLoopedIndex(index: number, length: number) {
  return (index + length) % length
}

export function getLoopedIdentity(
  identities: NavigationIdentity[],
  index: number
) {
  return identities[getLoopedIndex(index, identities.length)]
}

export function getAdjacentIdentityId(
  identities: NavigationIdentity[],
  currentIdentityId: IdentityId,
  offset: number
) {
  const currentIndex = getIdentityIndex(identities, currentIdentityId)
  const nextIndex = getLoopedIndex(currentIndex + offset, identities.length)

  return identities[nextIndex]?.id ?? identities[0].id
}

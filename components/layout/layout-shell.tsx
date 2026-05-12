"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import { navigationIdentities } from "@/data"
import { getAdjacentIdentityId, getIdentityIndex } from "@/lib/identity-carousel"
import { IdentityStage } from "@/components/layout/identity-stage"
import { ArrowNavigation } from "@/components/navigation/arrow-navigation"
import { FloatingNavbar } from "@/components/navigation/floating-navbar"
import type { IdentityId } from "@/types/content"

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

export function LayoutShell() {
  const [activeIdentityId, setActiveIdentityId] = useState<IdentityId>("agency")
  const [direction, setDirection] = useState(1)
  const prefersReducedMotion = useReducedMotion()
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  const activeIndex = getIdentityIndex(navigationIdentities, activeIdentityId)
  const activeIdentity = navigationIdentities[activeIndex]
  const previousIdentity = navigationIdentities[
    (activeIndex - 1 + navigationIdentities.length) % navigationIdentities.length
  ]
  const nextIdentity =
    navigationIdentities[(activeIndex + 1) % navigationIdentities.length]

  const currentIndicator = useMemo(
    () =>
      navigationIdentities.map((identity, index) => ({
        ...identity,
        position: index + 1,
        isActive: identity.id === activeIdentityId,
      })),
    [activeIdentityId]
  )

  function updateIdentity(nextIdentityId: IdentityId) {
    if (nextIdentityId === activeIdentityId) {
      return
    }

    const nextIndex = getIdentityIndex(navigationIdentities, nextIdentityId)
    const rawDelta = nextIndex - activeIndex
    const wrappedDelta =
      Math.abs(rawDelta) > navigationIdentities.length / 2
        ? -Math.sign(rawDelta || 1)
        : rawDelta

    setDirection(wrappedDelta >= 0 ? 1 : -1)
    setActiveIdentityId(nextIdentityId)
  }

  function goToOffset(offset: number) {
    const nextIdentityId = getAdjacentIdentityId(
      navigationIdentities,
      activeIdentityId,
      offset
    )

    setDirection(offset >= 0 ? 1 : -1)
    setActiveIdentityId(nextIdentityId)
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0]
    touchStartXRef.current = touch.clientX
    touchStartYRef.current = touch.clientY
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const startX = touchStartXRef.current
    const startY = touchStartYRef.current

    if (startX == null || startY == null) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    touchStartXRef.current = null
    touchStartYRef.current = null

    if (Math.abs(deltaX) < 56 || Math.abs(deltaY) > Math.abs(deltaX) * 0.65) {
      return
    }

    goToOffset(deltaX < 0 ? 1 : -1)
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        goToOffset(1)
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        goToOffset(-1)
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeIdentityId])

  return (
    <main id="top" className="relative min-h-svh">

      <FloatingNavbar
        identities={navigationIdentities}
        activeIdentity={activeIdentity}
        activeIdentityId={activeIdentityId}
        onSelect={updateIdentity}
      />

        <section
          aria-label="BHM Studios identity carousel"
          className="studio-container flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-18 pt-6 sm:pb-20 sm:pt-8"
        >
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div aria-live="polite" className="space-y-2">


          </div>


        </div>

        <div
          className="relative min-h-[36rem] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIdentity.id}
              custom={direction}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction > 0 ? 72 : -72, scale: 0.985, filter: "blur(8px)" }
              }
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction > 0 ? -72 : 72, scale: 0.985, filter: "blur(8px)" }
              }
              transition={transition}
              className="will-change-transform"
            >
              <IdentityStage
                activeIdentity={activeIdentity}
                onSelectIdentity={updateIdentity}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}

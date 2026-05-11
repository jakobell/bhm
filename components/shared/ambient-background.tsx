"use client"

import { motion, useReducedMotion } from "motion/react"

export function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion()

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 18,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
      }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 isolate overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(150,180,255,0.08),transparent_34%),linear-gradient(180deg,rgba(7,10,17,0),rgba(7,10,17,0.64))]" />

      <motion.div
        className="absolute left-[-8%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(155,183,255,0.2),rgba(155,183,255,0)_72%)] blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 42, -12], y: [0, 18, 34], scale: [1, 1.08, 0.98] }
        }
        transition={transition}
      />

      <motion.div
        className="absolute right-[-10%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),rgba(255,255,255,0)_72%)] blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -36, 16], y: [0, 28, -10], scale: [0.96, 1.03, 1] }
        }
        transition={{ ...transition, duration: 20 }}
      />

      <motion.div
        className="absolute bottom-[-16%] left-[28%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(111,143,227,0.16),rgba(111,143,227,0)_72%)] blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -26, 18], y: [0, -18, 12], scale: [1, 0.94, 1.05] }
        }
        transition={{ ...transition, duration: 22 }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}

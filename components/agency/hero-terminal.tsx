"use client"

import { motion, useReducedMotion } from "motion/react"

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
import { cn } from "@/lib/utils"

const terminalSequence = [
  {
    prompt: "bhm@studio",
    path: "~/growth",
    command: "analyze-business --website --seo --competitors",
    outputs: [
      "[info] scanning digital footprint",
      "[ok] website architecture mapped",
      "[ok] performance baseline collected",
      "[ok] SEO crawlability checked",
      "[ok] content gaps detected",
      "[ok] 7 competitors benchmarked",
    ],
  },
  {
    prompt: "bhm@studio",
    path: "~/growth",
    command: "generate-campaign --platforms google,instagram,tiktok --goal leads",
    outputs: [
      "[info] assembling acquisition mix",
      "[ok] Google keyword groups prepared",
      "[ok] Instagram creative hooks drafted",
      "[ok] TikTok testing angles queued",
      "[ok] retargeting flows defined",
    ],
  },
  {
    prompt: "bhm@studio",
    path: "~/growth",
    command: "optimize-conversion --landingpage --cta --performance",
    outputs: [
      "[info] running conversion audit",
      "[ok] landing page hierarchy tightened",
      "[ok] CTA intent clarified",
      "[ok] render path optimization identified",
      "[ok] media payload reduced",
    ],
  },
  {
    prompt: "bhm@studio",
    path: "~/growth",
    command: "create-content --type ads,social,email --tone premium",
    outputs: [
      "[info] building content system",
      "[ok] ad variants generated",
      "[ok] social cadence prepared",
      "[ok] lifecycle emails aligned",
    ],
  },
  {
    prompt: "bhm@studio",
    path: "~/growth",
    command: "scale-brand --automation --ai --analytics",
    outputs: [
      "[info] orchestrating growth layer",
      "[ok] lead routing connected",
      "[ok] AI production modules attached",
      "[ok] funnel tracking ready",
      "[done] growth operating system initialized",
    ],
  },
]

function TerminalOutput({ children }: { children: string }) {
  const isOk = children.startsWith("[ok]")
  const isInfo = children.startsWith("[info]")
  const isDone = children.startsWith("[done]")

  return (
    <AnimatedSpan
      className={cn(
        "block whitespace-pre-wrap font-mono text-[0.76rem] leading-6 sm:text-[0.84rem] lg:text-[0.9rem]",
        "text-white/58",
        isOk && "text-emerald-300/78",
        isInfo && "text-sky-300/70",
        isDone && "text-cyan-200"
      )}
    >
      {children}
    </AnimatedSpan>
  )
}

function CommandLine({
  prompt,
  path,
  command,
}: {
  prompt: string
  path: string
  command: string
}) {
  return (
    <div className="flex flex-wrap items-start gap-x-2 font-mono text-[0.78rem] leading-6 sm:text-[0.86rem] lg:text-[0.94rem]">
      <span className="text-emerald-300/85">{prompt}</span>
      <span className="text-white/28">:</span>
      <span className="text-sky-300/78">{path}</span>
      <span className="text-white/38">$</span>

      <TypingAnimation
        duration={18}
        className="min-w-0 flex-1 break-words text-white/88"
      >
        {command}
      </TypingAnimation>
    </div>
  )
}

function CommandBlock({
  entry,
  isLast,
}: {
  entry: (typeof terminalSequence)[number]
  isLast?: boolean
}) {
  return (
    <div className="space-y-1.5">
      <CommandLine
        prompt={entry.prompt}
        path={entry.path}
        command={entry.command}
      />

      <div className="pl-0">
        {entry.outputs.map((output) => (
          <TerminalOutput key={output}>{output}</TerminalOutput>
        ))}
      </div>

      {!isLast && (
        <AnimatedSpan className="block h-3">
          {" "}
        </AnimatedSpan>
      )}    </div>
  )
}

export function HeroTerminal({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={cn("relative h-full w-full", className)}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -5, 0],
              opacity: [0.9, 1, 0.92],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }
      }
    >
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(64,220,255,0.13),transparent_58%)] blur-3xl" />
      <div className="absolute -right-[6%] bottom-[8%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(52,211,235,0.12),transparent_68%)] blur-3xl" />

      <Terminal
        startOnView
        sequence
        className={cn(
          "h-full min-h-[28rem] max-w-none overflow-hidden",
          "rounded-2xl border border-white/10",
          "bg-[#050b13]/95",
          "font-mono text-white",
          "shadow-[0_36px_110px_rgba(0,0,0,0.48)]",
          "backdrop-blur-2xl"
        )}
      >
        <AnimatedSpan className="mb-4 flex items-center border-b border-white/10 pb-3">
          <span className="hidden font-mono text-[0.68rem] text-white/34 sm:inline">
            bhm — strategic-runtime
          </span>
        </AnimatedSpan>

        <AnimatedSpan className="mb-4 block font-mono text-[0.72rem] leading-6 text-white/36 sm:text-[0.8rem]">
          Last login: Sun May 10 16:42:09 on ttys001
        </AnimatedSpan>

        <div className="space-y-1">
          {terminalSequence.map((entry, index) => (
            <CommandBlock
              key={entry.command}
              entry={entry}
              isLast={index === terminalSequence.length - 1}
            />
          ))}

          <AnimatedSpan className="mt-2 flex items-center gap-2 font-mono text-[0.78rem] text-white/72 sm:text-[0.86rem]">
            <span className="text-emerald-300/85">bhm@studio</span>
            <span className="text-white/28">:</span>
            <span className="text-sky-300/78">~/growth</span>
            <span className="text-white/38">$</span>
            <span className="h-4 w-2 animate-pulse bg-white/70" />
          </AnimatedSpan>
        </div>
      </Terminal>
    </motion.div>
  )
}

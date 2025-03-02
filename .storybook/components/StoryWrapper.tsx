import React from "react"
import { cn } from "../../src/utils/cn"

export function StoryWrapper({
  topic,
  headline,
  padded = false,
  children,
}: {
  topic: string
  headline: string
  padded?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn("bg-transparent ignore-check", {
        "p-4": padded,
      })}
    >
      <span className="text-slate-300 dark:text-slate-600 block text-2xl uppercase font-normal tracking-widest ignore-check">
        {topic}
      </span>
      <p className="my-3 text-4xl font-bold ignore-check">{headline}</p>
      {children}
    </div>
  )
}

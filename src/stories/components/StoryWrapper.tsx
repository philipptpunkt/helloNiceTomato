import { cn } from "@/utils/cn"

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
      className={cn("bg-background ignore-check", {
        "p-4": padded,
      })}
    >
      <h1 className="mb-2 ignore-check">
        <span className="text-slate-200 dark:text-slate-600 block text-2xl uppercase font-normal tracking-widest ignore-check">
          {topic}
        </span>
        <span className="text-4xl font-bold ignore-check">{headline}</span>
      </h1>
      {children}
    </div>
  )
}

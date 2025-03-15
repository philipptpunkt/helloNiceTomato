import { cn } from "@/utils/cn"

export function SectionHeader({
  headline,
  className,
}: {
  headline: string
  className?: string
}) {
  return <h2 className={cn("text-white text-6xl", className)}>{headline}</h2>
}

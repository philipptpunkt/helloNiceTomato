import { cn } from "@/utils/cn"

interface ContentGridProps {
  children: React.ReactNode
  className?: string
}

export function ContentGrid({ children, className }: ContentGridProps) {
  return (
    <div
      className={cn(
        "w-full",
        "grid grid-cols-6",
        "md:grid-cols-8",
        "lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  )
}

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

export function GridItem({
  children,
  className,
  colSpan = { default: 4, md: 4, lg: 4 },
  rowSpan = 1,
  colStart,
  rowStart,
}: {
  children: React.ReactNode
  className?: string
  colSpan?: { default: number; md?: number; lg?: number }
  rowSpan?: number
  colStart?: { default?: number; md?: number; lg?: number }
  rowStart?: number
}) {
  return (
    <div
      className={cn(
        // Column spans for different breakpoints
        `col-span-${colSpan.default}`,
        colSpan.md && `md:col-span-${colSpan.md}`,
        colSpan.lg && `lg:col-span-${colSpan.lg}`,

        // Row span (same across breakpoints)
        rowSpan > 1 && `row-span-${rowSpan}`,

        // Column start positions (if specified)
        colStart?.default && `col-start-${colStart.default}`,
        colStart?.md && `md:col-start-${colStart.md}`,
        colStart?.lg && `lg:col-start-${colStart.lg}`,

        // Row start position (if specified)
        rowStart && `row-start-${rowStart}`,

        className
      )}
    >
      {children}
    </div>
  )
}

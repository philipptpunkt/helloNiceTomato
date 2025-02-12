import { cn } from "@/utils/cn"

interface SectionProps {
  children: React.ReactNode
  width?: "full" | "content" | "narrow" | "document"
  horizontalPadding?: boolean
  className?: string
}

export function Section({
  children,
  width = "content",
  horizontalPadding = false,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full",
        {
          "max-w-[1920px]": width === "content",
          "max-w-[1280px]": width === "narrow",
          "max-w-[1024px]": width === "document",
          "px-4 md:px-8": horizontalPadding,
        },
        className
      )}
    >
      {children}
    </section>
  )
}

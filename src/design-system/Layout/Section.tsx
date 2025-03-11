import { cn } from "@/utils/cn"

interface SectionProps {
  children: React.ReactNode
  width?: "full" | "content" | "narrow" | "document"
  verticalPadding?: boolean
  horizontalPadding?: boolean
  className?: string
  containerClassName?: string
  pageStart?: boolean
  pageEnd?: boolean
}

export function Section({
  children,
  width = "content",
  verticalPadding = false,
  horizontalPadding = false,
  className,
  containerClassName,
  pageStart = false,
  pageEnd = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        ["w-full"],
        {
          "pt-20": pageStart,
          "pb-20": pageEnd,
        },
        containerClassName
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          {
            "max-w-[1920px]": width === "content",
            "max-w-[1280px]": width === "narrow",
            "max-w-[1024px]": width === "document",
            "py-2 md:py-4": verticalPadding,
            "px-4 md:px-8": horizontalPadding,
          },
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}

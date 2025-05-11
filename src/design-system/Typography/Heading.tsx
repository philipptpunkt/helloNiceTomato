import { cn } from "@/utils/cn"
import { ElementType } from "react"

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface Shared {
  size?: "normal" | "reduced"
  className?: string
  as?: HeadingType
}

interface DefaultHeadline extends Shared {
  type: "default"
  text: string
}

interface HighlightHeadline extends Shared {
  type: "highlight"
  defaultText: string
  highlightText: string
}

export type HeadingProps = DefaultHeadline | HighlightHeadline

export function Heading({
  size = "normal",
  className,
  as = "h1",
  ...props
}: HeadingProps) {
  const defaultClasses = "text-5xl md:text-6xl lg:text-7xl font-extrabold"
  const reducedSizeClasses = "text-2xl sm:text-3xl md:text-4xl font-semibold"
  const HeadingTag = as as ElementType

  if (props.type === "default") {
    return (
      <HeadingTag
        className={cn(
          {
            [reducedSizeClasses]: size === "reduced",
          },
          className
        )}
      >
        {props.text}
      </HeadingTag>
    )
  }
  return (
    <HeadingTag
      className={cn(
        {
          [defaultClasses]: size === "normal",
          [reducedSizeClasses]: size === "reduced",
        },
        className
      )}
    >
      <span className="inherit">{props.defaultText}&#8197;</span>
      <span className="text-primary">{props.highlightText}</span>
    </HeadingTag>
  )
}

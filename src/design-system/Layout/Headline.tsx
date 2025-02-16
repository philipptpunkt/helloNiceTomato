import { cn } from "@/utils/cn"

interface Shared {
  size?: "normal" | "reduced"
  className?: string
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

export type HeadlineProps = DefaultHeadline | HighlightHeadline

export function Headline({
  size = "normal",
  className,
  ...props
}: HeadlineProps) {
  const reducedSizeClasses = "text-2xl sm:text-3xl md:text-4xl font-semibold"

  if (props.type === "default") {
    return (
      <h1
        className={cn(
          {
            [reducedSizeClasses]: size === "reduced",
          },
          className
        )}
      >
        {props.text}
      </h1>
    )
  }
  return (
    <h1
      className={cn(
        {
          [reducedSizeClasses]: size === "reduced",
        },
        className
      )}
    >
      <span>{props.defaultText}&#8197;</span>
      <span className="text-primary">{props.highlightText}</span>
    </h1>
  )
}

import { cn } from "@/utils/cn"

interface DefaultCardProps {
  children: React.ReactNode
}

function CardWrapper({ children }: DefaultCardProps) {
  return (
    <div
      className={cn([
        "border-2",
        "border-border-card",
        "rounded-2xl md:rounded-3xl",
        "p-4 md:p-6",
        "bg-background-card",
        "shadow-md",
        "shadow-shadow",
      ])}
    >
      {children}
    </div>
  )
}

export { CardWrapper as Card }

interface CardWithHeadingProps extends DefaultCardProps {
  heading: React.ReactNode
}

export function CardWithHeading({ heading, children }: CardWithHeadingProps) {
  return (
    <CardWrapper>
      <div className="mb-2 md:mb-4">{heading}</div>
      {children}
    </CardWrapper>
  )
}

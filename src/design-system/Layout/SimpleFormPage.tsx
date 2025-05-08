import { cn } from "@/utils/cn"
import { Section } from "./Section"
import { Heading } from "../Typography/Heading"

interface SimpleFormPageProps {
  title?: { default: string; hightlight: string; reducedPadding?: boolean }
  description?: string
  children?: React.ReactNode
}

export function SimpleFormPage({
  title,
  description,
  children,
}: SimpleFormPageProps) {
  return (
    <Section
      horizontalPadding
      className={cn(
        "min-h-[800px]",
        "h-screen",
        "flex flex-col justify-center items-center",
        "text-center"
      )}
    >
      {title ? (
        <Heading
          type="highlight"
          defaultText={title.default}
          highlightText={title.hightlight}
          size="reduced"
          className={cn("mb-6", {
            "mb-8": !description,
            "mb-2": title.reducedPadding,
          })}
        />
      ) : null}
      {description ? (
        <p className="mb-6 w-full max-w-[400px]">{description}</p>
      ) : null}
      {children}
    </Section>
  )
}

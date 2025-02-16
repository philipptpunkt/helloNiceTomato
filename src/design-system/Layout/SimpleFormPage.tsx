import { cn } from "@/utils/cn"
import { Section } from "./Section"
import { Headline } from "./Headline"

interface SimpleFormPageProps {
  title: { default: string; hightlight: string; reducedPadding?: boolean }
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
        "flex flex-col justify-center items-center h-screen -mt-16",
        "text-center"
      )}
    >
      <Headline
        type="highlight"
        defaultText={title.default}
        highlightText={title.hightlight}
        size="reduced"
        className={cn("mb-6", {
          "mb-8": !description,
          "mb-2": title.reducedPadding,
        })}
      />
      {description ? (
        <p className="mb-6 w-full max-w-[400px]">{description}</p>
      ) : null}
      {children}
    </Section>
  )
}

import { cn } from "@/utils/cn"

export function Label({
  text,
  size = "lg",
}: {
  text: string
  size?: "lg" | "md" | "sm"
}) {
  return (
    <h2
      className={cn(
        "text-slate-400 dark:text-slate-300 text-md font-normal uppercase py-4 tracking-wider ignore-check",
        {
          "text-lg": size === "lg",
          "text-md": size === "md",
          "text-sm": size === "sm",
        }
      )}
    >
      {text}
    </h2>
  )
}

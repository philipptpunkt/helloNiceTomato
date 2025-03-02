import { cn } from "@/utils/cn"

interface LabelProps {
  label: string
  uppercase?: boolean
}

export function Label({ label, uppercase = false }: LabelProps) {
  return (
    <label
      className={cn("text-sm text-gray-500 dark:text-gray-600", {
        "uppercase text-xs": uppercase,
      })}
    >
      {label}
    </label>
  )
}

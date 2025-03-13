import { cn } from "@/utils/cn"
import Link from "next/link"

interface LinkItemProps {
  href: string
  label: string
  active?: boolean
}

export function LinkItem({ href, label, active = false }: LinkItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        [
          "font-semibold",
          "hover:text-primary hover:border-t-2",
          "border-primary",
          "pt-3",
        ],
        {
          "text-primary": active,
        }
      )}
    >
      {label}
    </Link>
  )
}

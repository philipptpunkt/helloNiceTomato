import { cn } from "@/utils/cn"

interface CornerProps {
  position: "tl" | "tr" | "bl" | "br"
  colStart: number
  rowStart: number
}

export function Corner({ position, colStart, rowStart }: CornerProps) {
  return (
    <div
      className={cn([
        "relative",
        "w-full h-24",
        "col-span-1",
        "bg-primary-200 dark:bg-primary-600",
      ])}
      style={{ gridRowStart: rowStart, gridColumnStart: colStart }}
    >
      <div
        className={cn([
          "absolute",
          "inset-0",
          "bg-primary-400 dark:bg-primary-950",
          {
            "rounded-tl-[3rem]": position === "tl",
            "rounded-tr-[3rem]": position === "tr",
            "rounded-bl-[3rem]": position === "bl",
            "rounded-br-[3rem]": position === "br",
          },
        ])}
      />
    </div>
  )
}

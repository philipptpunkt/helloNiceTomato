import { cn } from "@/utils/cn"
import { Corner } from "../../_components/Grid/Corner"

export function FriendshipBlob() {
  return (
    <>
      <div
        className={cn(["w-full h-24", "col-start-1 col-span-6", "row-start-8"])}
      />

      <div
        className={cn([
          "w-full h-24",
          "col-start-1 col-span-6",
          "row-start-9",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-t-[3rem]",
        ])}
      />
      <Corner position="bl" colStart={7} rowStart={9} />
      <div
        className={cn([
          "w-full h-72",
          "col-start-1 col-span-12",
          "row-start-10",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-tr-[3rem] rounded-bl-[3rem]",
        ])}
      />
      <div
        className={cn([
          "w-full h-48",
          "col-start-9 col-span-4",
          "row-start-11",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-b-[3rem]",
        ])}
      />
      <Corner position="tr" colStart={8} rowStart={11} />
    </>
  )
}

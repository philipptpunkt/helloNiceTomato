import { cn } from "@/utils/cn"
import { Corner } from "../../_components/Grid/Corner"

export function FindAPartnerBlob() {
  return (
    <>
      <div
        className={cn([
          "w-full h-24",
          "col-start-1 col-span-6",
          "row-start-1",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-t-[3rem]",
        ])}
      />
      <Corner position="bl" colStart={7} rowStart={1} />
      <div className="w-full h-24 bg-primary-200 dark:bg-primary-600 col-span-6 col-start-1 row-start-2">
        <h3 className="font-black text-6xl text-primary-900 dark:text-primary-50">
          Find a partner
        </h3>
      </div>
      <div
        className={cn([
          "w-full h-24",
          "col-start-7 col-span-6",
          "row-start-2",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-tr-[3rem]",
        ])}
      />
      <div
        className={cn([
          "w-full h-24",
          "col-start-1 col-span-12",
          "row-start-3",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-br-[3rem]",
        ])}
      />
      <div
        className={cn([
          "w-full h-24",
          "col-start-7 col-span-3",
          "row-start-4",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-br-[3rem]",
        ])}
      />
      <Corner position="tl" colStart={10} rowStart={4} />
      <div
        className={cn([
          "w-full h-96",
          "col-start-1 col-span-6",
          "row-start-4 row-end-7",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-b-[3rem]",
        ])}
      />
      <Corner position="tl" colStart={7} rowStart={5} />
    </>
  )
}

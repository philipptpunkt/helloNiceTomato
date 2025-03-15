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
      <div
        className={cn(
          "w-full h-48",
          "col-start-1 col-span-12",
          "row-start-2 row-end-3",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-r-[3rem]",
          "py-4 px-8",
          "flex flex-col justify-evenly"
        )}
      >
        <h3 className="font-black text-6xl text-white">Find a partner?</h3>
        <p className="text-5xl font-black">
          <span className="text-primary-100">Print the QR code </span>
          <span className="text-primary-200 text-6xl">on a T-shirt</span>
        </p>
      </div>
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
          "py-4 px-8",
        ])}
      >
        <div className="flex flex-col h-full">
          <p className="text-6xl font-black text-primary-100 mb-8">
            and let the world know
          </p>
          <p className="text-5xl font-black text-primary-50">
            what you are looking for
          </p>
        </div>
      </div>
      <Corner position="tl" colStart={7} rowStart={5} />
    </>
  )
}

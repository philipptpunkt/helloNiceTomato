import { Corner } from "@/app/_components/Grid/Corner"
import { cn } from "@/utils/cn"

export function BusinessBlob() {
  return (
    <>
      <div
        className={cn([
          "w-full h-24",
          "col-start-8 col-span-6",
          "row-start-24",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-t-[3rem]",
        ])}
      />
      <Corner position="br" colStart={7} rowStart={24} />
      <div
        className={cn([
          "w-full h-24",
          "col-start-1 col-span-12",
          "row-start-25",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-tl-[3rem] rounded-br-[3rem]",
          "px-8",
          "flex items-center",
        ])}
      >
        <h3 className="font-black text-6xl text-black dark:text-white">
          Got a business?
        </h3>
      </div>
      <div
        className={cn([
          "w-full h-72",
          "col-start-1 col-span-6",
          "row-start-26",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-b-[3rem]",
          "py-4 px-8",
        ])}
      >
        <p className="text-4xl font-black text-primary-600 dark:text-primary-100 mb-8">
          Add your public profile.
        </p>
        <p className="text-5xl font-black text-primary-500 dark:text-primary-200">
          Or add your own website to directly forward visitors.
        </p>
      </div>
      <Corner position="tl" colStart={7} rowStart={26} />
    </>
  )
}

import { Corner } from "@/app/_components/Grid/Corner"
import { cn } from "@/utils/cn"

export function RestaurantBlob() {
  return (
    <>
      <div
        className={cn([
          "w-full h-48",
          "col-start-9 col-span-4",
          "row-start-13 row-end-15",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-t-[3rem]",
        ])}
      />
      <Corner position="br" colStart={8} rowStart={14} />
      <div
        className={cn([
          "w-full h-48",
          "col-start-1 col-span-12",
          "row-start-16",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-tl-[3rem] rounded-bl-[3rem]",
          "py-4 px-8",
          "flex items-center",
        ])}
      >
        <h3 className="font-black text-6xl text-black dark:text-white">
          Or how about promoting your restaurant?
        </h3>
      </div>
      <div
        className={cn([
          "w-full h-72",
          "col-start-8 col-span-6",
          "row-start-18 row-end-22",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-b-[3rem]",
          "py-4 px-8",
        ])}
      >
        <p className="text-4xl font-black text-primary-500 dark:text-primary-100">
          Link to your menu or your Instagram.
        </p>
        <p className="text-5xl font-black text-primary-800 dark:text-primary-50">
          Or directly forward visitors to your website.
        </p>
      </div>
      <Corner position="tr" colStart={7} rowStart={18} />
    </>
  )
}

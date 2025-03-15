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
      ></div>
      <Corner position="bl" colStart={7} rowStart={9} />
      <div
        className={cn([
          "w-full h-72",
          "col-start-1 col-span-12",
          "row-start-10",
          "bg-primary-200 dark:bg-primary-600",
          "rounded-tr-[3rem] rounded-bl-[3rem]",
          "py-4 px-8",
          "flex flex-col justify-evenly",
        ])}
      >
        <h3 className="font-black text-6xl text-black dark:text-white">
          Make new friends?
        </h3>
        <p className="text-5xl font-black text-primary-800 dark:text-primary-50">
          Share all your socials.
        </p>
        <p className="text-6xl font-black text-primary-600 dark:text-primary-100">
          With just one link or the provided QR code.
        </p>
      </div>
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

import { cn } from "@/utils/cn"
import Image from "next/image"
import MakeFriends from "../assets/make_new_friends.jpg"

export function FriendsImage() {
  return (
    <div
      className={cn([
        "relative",
        "w-full",
        "col-start-2 col-span-7",
        "row-start-11 row-end-15",
      ])}
    >
      <div
        className={cn([
          "absolute",
          "inset-0",
          "mr-4 my-4",
          "bg-primary-800",
          "rounded-[2rem]",
          "overflow-hidden",
          // "hover:scale-110 transition-transform duration-300 ease-in-out",
        ])}
      >
        <Image
          src={MakeFriends}
          // width={500}
          // height={700}
          fill
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="A couple outside in front of a small lake in the sunshine laughing"
          className="z-10 hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  )
}

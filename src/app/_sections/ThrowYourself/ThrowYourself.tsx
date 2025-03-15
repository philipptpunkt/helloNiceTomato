import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"
import { ContentGrid } from "../Grid/ContentGrid"
import { FindAPartnerBlob } from "./FindAPartnerBlob"
import { PartnerImage } from "./PartnerImage"
import { Corner } from "../Grid/Corner"
import { FriendsImage } from "./FriendsImage"
import { FriendshipBlob } from "./FriendshipBlob"
import { RestaurantImage } from "./RestaurantImage"
import { HandcraftImage } from "./HandcraftImage"
import { Button } from "@/design-system/Button"

export function ThrowYourself() {
  return (
    <Section
      width="narrow"
      containerClassName={cn(["bg-primary-400", "dark:bg-primary-950"])}
    >
      <div className="flex justify-center mt-16 mb-32">
        <h2 className="text-white text-6xl">Throw yourself out there</h2>
      </div>
      <ContentGrid>
        <FindAPartnerBlob />

        <PartnerImage />

        <FriendshipBlob />
        <FriendsImage />

        <div
          className={cn([
            "w-full h-48",
            "col-start-9 col-span-4",
            "row-start-12 end-row-14",
          ])}
        />

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
            ])}
          />
          <div
            className={cn([
              "w-full h-72",
              "col-start-8 col-span-6",
              "row-start-18 row-end-22",
              "bg-primary-200 dark:bg-primary-600",
              "rounded-b-[3rem]",
            ])}
          />
          <Corner position="tr" colStart={7} rowStart={18} />
        </>

        <RestaurantImage />

        <div
          className={cn([
            "w-full h-48",
            "col-start-9 col-span-5",
            "row-start-23 end-row-24",
          ])}
        />

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
            ])}
          />
          <div
            className={cn([
              "w-full h-72",
              "col-start-1 col-span-6",
              "row-start-26",
              "bg-primary-200 dark:bg-primary-600",
              "rounded-b-[3rem]",
            ])}
          />
          <Corner position="tl" colStart={7} rowStart={26} />
        </>
        <HandcraftImage />

        <div
          className={cn([
            "w-full h-48",
            "col-start-1 col-span-5",
            "row-start-27 end-row-29",
          ])}
        />

        <div
          className={cn([
            "w-full h-48",
            "col-start-1 col-span-12",
            "row-start-30",
          ])}
        >
          <div className="flex h-full justify-center items-center">
            <Button type="link" href="/auth/signup" secondary>
              Sign up for free
            </Button>
          </div>
        </div>
      </ContentGrid>
    </Section>
  )
}

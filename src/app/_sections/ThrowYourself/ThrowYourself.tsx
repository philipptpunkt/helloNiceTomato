import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"
import { ContentGrid } from "../../_components/Grid/ContentGrid"
import { FindAPartnerBlob } from "./FindAPartnerBlob"
import { PartnerImage } from "./PartnerImage"
import { Corner } from "../../_components/Grid/Corner"
import { FriendsImage } from "./FriendsImage"
import { FriendshipBlob } from "./FriendshipBlob"
import { RestaurantImage } from "./RestaurantImage"
import { HandcraftImage } from "./HandcraftImage"
import { Button } from "@/design-system/Button"
import { SectionHeader } from "@/app/_components/SectionHeader"

export function ThrowYourself() {
  return (
    <Section
      width="narrow"
      horizontalPadding
      containerClassName={cn(["bg-primary-400", "dark:bg-primary-950"])}
    >
      <div className="flex justify-center mt-16 mb-32">
        <SectionHeader headline="Throw yourself out there" />
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
              Or add your own website to direktly forward visitors.
            </p>
          </div>
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

import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"
import { ContentGrid } from "../Grid/ContentGrid"
import { FindAPartnerBlob } from "./FindAPartnerBlob"
import { PartnerImage } from "./PartnerImage"
import { Corner } from "../Grid/Corner"
import { FriendsImage } from "./FriendsImage"

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

        <>
          <div
            className={cn([
              "w-full h-24",
              "col-start-1 col-span-6",
              "row-start-8",
            ])}
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
        <FriendsImage />

        <div
          className={cn([
            "w-full h-48",
            "col-start-9 col-span-4",
            "row-start-12 end-row-14",
            // "bg-primary-200 dark:bg-primary-600",
            // "rounded-b-[3rem]",
          ])}
        />
      </ContentGrid>
    </Section>
  )
}

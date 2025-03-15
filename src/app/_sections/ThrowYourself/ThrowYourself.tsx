import { cn } from "@/utils/cn"
import { Section } from "@/design-system/Layout"
import { ContentGrid } from "../../_components/Grid/ContentGrid"
import { FindAPartnerBlob } from "./FindAPartnerBlob"
import { PartnerImage } from "./PartnerImage"
import { FriendsImage } from "./FriendsImage"
import { FriendshipBlob } from "./FriendshipBlob"
import { RestaurantImage } from "./RestaurantImage"
import { HandcraftImage } from "./HandcraftImage"
import { Button } from "@/design-system/Button"
import { SectionHeader } from "@/app/_components/SectionHeader"
import { BusinessBlob } from "./BusinessBlob"
import { RestaurantBlob } from "./RestaurantBlob"

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

        <RestaurantBlob />
        <RestaurantImage />

        <div
          className={cn([
            "w-full h-48",
            "col-start-9 col-span-5",
            "row-start-23 end-row-24",
          ])}
        />

        <BusinessBlob />
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

import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"
import FindPartner from "../assets/find_a_partner.jpg"
import MakeFriends from "../assets/make_new_friends.jpg"
import { ImageCard } from "./ImageCard"

export function ThrowYourself() {
  return (
    <Section
      width="narrow"
      containerClassName={cn([
        "bg-gradient-to-t from-neutral-50 from-10% to-primary-400 to-90%",
        "dark:from-primary-950 dark:from-30% dark:to-primary-600",
      ])}
      // className={cn(["h-screen"])}
    >
      <div className="flex justify-center my-16">
        <h2 className="text-white text-6xl">Throw yourself out there</h2>
      </div>
      <div className="space-y-16">
        <ImageCard
          imageUrl={FindPartner}
          imageAlt="A couple sitting outside laughing"
        >
          <h3 className="font-black text-6xl mb-8 text-primary-900">
            Find a partner
          </h3>
          <p className="text-4xl font-black text-primary-600">
            <span className="text-6xl text-primary-700">Print the QR code</span>
            <span className="text-5xl"> on a T&#8209;shirt and </span>
            <span className="text-6xl text-primary-800">
              let the world know
            </span>
            {` what you're `}
            <span className="text-5xl text-primary-700">looking for</span>
          </p>
        </ImageCard>

        <ImageCard
          imageUrl={MakeFriends}
          imageAlt="A couple sitting outside laughing"
          imagePosition="right"
        >
          <h3 className="font-black text-6xl mb-8 text-primary-900">
            Make new friends
          </h3>
        </ImageCard>
      </div>
    </Section>
  )
}

import Link from "next/link"
import { ContentGrid, Section } from "@/design-system/Layout"
import { LegalLinks, PageLinks, SocialMediaLinks } from "./LinkSections"
import { cn } from "@/utils/cn"
import Image from "next/image"
import TomatoCorner from "./assets/tomato_corner.png"
import { Input } from "@/design-system/Input"
import { Button } from "@/design-system/Button"
import { Heading } from "@/design-system/Typography"

function FooterTitle({ title }: { title: string }) {
  return <strong className="block font-bold text-lg mb-3">{title}</strong>
}

export function Footer() {
  return (
    <footer className="relative w-full bg-secondary-200 dark:bg-secondary-600">
      <Section width="narrow" horizontalPadding className="relative py-8">
        <Link href="/" className="inline-block">
          <Heading
            as="h3"
            size="reduced"
            type="highlight"
            defaultText="Hello Nice"
            highlightText="Tomato"
          />
        </Link>

        <ContentGrid className="pt-8 pb-24 lg:pb-32">
          <div
            className={cn([
              "col-start-1 col-span-4 sm:col-start-1 sm:col-span-2",
              "row-start-9 row-span-4 sm:row-start-1 sm:row-span-4",
              "z-10",
            ])}
          >
            <FooterTitle title="Pages" />
            <PageLinks />
          </div>
          <div
            className={cn([
              "col-start-1 col-span-4 sm:col-start-1 sm:col-span-2 lg:col-start-3 lg:col-span-2",
              "row-start-14 row-span-3 sm:row-start-5 sm:row-span-4 lg:row-start-1 lg:row-span-4",
              "z-10",
            ])}
          >
            <FooterTitle title="Legal" />
            <LegalLinks />
          </div>

          <div
            className={cn([
              "col-start-1 col-span-4 sm:col-start-4 sm:col-span-4 lg:col-start-6 lg:col-span-4",
              "row-start-1 row-span-2 sm:row-start-1 sm:row-span-2",
            ])}
          >
            <FooterTitle title="Connect" />
            <SocialMediaLinks />
          </div>

          <div
            className={cn([
              "col-start-1 col-span-4 sm:col-start-4 sm:col-span-4 lg:col-start-6 lg:col-span-4",
              "row-start-4 row-span-4 sm:row-start-3 sm:row-span-3",
              "z-10",
            ])}
          >
            <div className="flex flex-col space-y-2 w-full sm:w-[350px] py-4">
              <h4 className="text-2xl font-semibold py-2">
                Sign up for our newsletter
              </h4>
              <Input placeholder="your@email.address" />
              <Button type="button" secondary contentStyle="full">
                Subscribe
              </Button>
            </div>
          </div>
        </ContentGrid>

        <div
          className={cn([
            "absolute",
            "bottom-0 right-0",
            "z-0",
            "w-full sm:w-1/2 lg:w-1/3",
            "h-[300px] sm:h-[400px] lg:h-[500px]",
          ])}
        >
          <Image
            src={TomatoCorner}
            fill
            objectFit="contain"
            objectPosition="bottom right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Tomato corner decoration"
            priority={false}
            className="pointer-events-none"
          />
        </div>
      </Section>
    </footer>
  )
}

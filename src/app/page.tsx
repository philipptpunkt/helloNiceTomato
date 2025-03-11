import { SignInForm } from "@/components/forms/SignInForm"
import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Section
        width="narrow"
        containerClassName={cn([
          "bg-gradient-to-b from-neutral-50 from-10% to-primary-400 to-100%",
          "dark:from-primary-950 dark:from-30% dark:to-primary-600",
        ])}
        className={cn([
          "min-h-[600px]",
          "h-screen",
          "flex flex-col md:flex-row",
          "justify-center",
        ])}
      >
        <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center">
          <div>
            <h1 className="text-center md:text-left">
              <span>Hello&nbsp;nice </span>
              <span className="text-text-highlight">to&nbsp;meet&nbsp;you</span>
            </h1>
            <p className="text-md md:text-xl lg:text-2xl text-center md:text-left mt-4 md:mt-8">
              With HelloNiceTomato you can connect with people, promote your
              business and much more. Simply create your profile and share the
              QR code or link we provide.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:pt-8 flex items-center justify-center">
          <SignInForm />
        </div>
      </Section>

      {/* Features Section */}
      <section className="py-16 px-8 md:px-16 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Join Our Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Connect"
              description="Meet fellow tomato enthusiasts from around the globe"
            />
            <FeatureCard
              title="Share"
              description="Exchange your favorite recipes and growing tips"
            />
            <FeatureCard
              title="Grow"
              description="Learn from experts and improve your tomato garden"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 px-8 md:px-16 border-t border-primary-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guidelines" className="hover:text-primary">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                Twitter
              </Link>
              <Link href="#" className="hover:text-primary">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl bg-background shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

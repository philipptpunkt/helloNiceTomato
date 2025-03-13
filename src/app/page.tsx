import { Section } from "@/design-system/Layout"
import { Hero } from "./_sections/Hero/Hero"
import { ThrowYourself } from "./_sections/ThrowYourself/ThrowYourself"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <ThrowYourself />

      {/* Features Section */}
      <Section>
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
      </Section>
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

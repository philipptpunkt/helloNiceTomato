import { Hero } from "./_sections/Hero/Hero"
import { ThrowYourself } from "./_sections/ThrowYourself/ThrowYourself"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <ThrowYourself />
    </main>
  )
}

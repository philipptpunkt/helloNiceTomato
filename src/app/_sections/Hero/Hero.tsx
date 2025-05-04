import { SignInForm } from "@/components/forms/SignInForm"
import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"

export function Hero() {
  return (
    <Section
      width="narrow"
      containerClassName={cn([
        "bg-gradient-to-b from-neutral-50 from-10% to-primary-400 to-90%",
        "dark:from-primary-950 dark:from-0% dark:via-primary-600 dark:via-50% dark:to-primary-950",
      ])}
      className={cn([
        "min-h-[800px]",
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
            With <span className="font-black">Hello Nice Tomato</span> you can
            connect with people, promote your business and much more. Simply
            create your profile and share the QR code or link we provide.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:pt-8 flex items-center justify-center">
        <SignInForm />
      </div>
    </Section>
  )
}

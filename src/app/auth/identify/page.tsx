import { ForgotPasswordForm } from "@/components/forms/ForgotPasswordForm"
import { Section } from "@/design-system/Layout"

export default function IdentificationPage() {
  return (
    <Section
      horizontalPadding
      className="flex flex-col justify-center items-center h-screen -mt-16"
    >
      <h1 className="text-center md:text-left">Your email address</h1>
      <p className="text-center md:text-left my-8 font-semibold">
        Please enter your email address so we can reset your password.
      </p>
      <ForgotPasswordForm />
    </Section>
  )
}

import { UpdatePasswordForm } from "@/components/forms/UpdatePasswordForm"
import { Section } from "@/design-system/Layout"

export default function UpdatePasswordPage() {
  return (
    <Section
      horizontalPadding
      className="flex flex-col justify-center items-center h-screen -mt-16"
    >
      <h1>Update Password</h1>
      <UpdatePasswordForm />
    </Section>
  )
}

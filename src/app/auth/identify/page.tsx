import { ForgotPasswordForm } from "@/components/forms/ForgotPasswordForm"
import { SimpleFormPage } from "@/design-system/Layout"

export default function IdentificationPage() {
  return (
    <SimpleFormPage
      title={{ default: "Your email", hightlight: "address" }}
      description="Please enter your email address so we can reset your password."
    >
      <ForgotPasswordForm />
    </SimpleFormPage>
  )
}

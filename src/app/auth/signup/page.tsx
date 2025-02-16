import { SignUpForm } from "@/components/forms/SignUpForm"
import { SimpleFormPage } from "@/design-system/Layout"

export default function SignUpPage() {
  return (
    <SimpleFormPage
      title={{
        default: "You're the new",
        hightlight: "tomato?",
      }}
    >
      <SignUpForm />
    </SimpleFormPage>
  )
}

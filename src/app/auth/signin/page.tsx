import { SignInForm } from "@/components/forms/SignInForm"
import { SimpleFormPage } from "@/design-system/Layout"

export default function SignInPage() {
  return (
    <SimpleFormPage
      title={{ default: "Welcome", hightlight: "back", reducedPadding: true }}
    >
      <SignInForm />
    </SimpleFormPage>
  )
}

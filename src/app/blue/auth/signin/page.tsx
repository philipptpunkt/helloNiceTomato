import { SignInWithBluesky } from "@/components/bluesky/SignInWithBluesky"
import { SimpleFormPage } from "@/design-system/Layout"

export default function SignInPage() {
  return (
    <SimpleFormPage>
      <SignInWithBluesky />
    </SimpleFormPage>
  )
}

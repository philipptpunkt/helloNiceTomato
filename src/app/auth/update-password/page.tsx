import { UpdatePasswordForm } from "@/components/forms/UpdatePasswordForm"
import { SimpleFormPage } from "@/design-system/Layout"

export default function UpdatePasswordPage() {
  return (
    <SimpleFormPage title={{ default: "Update", hightlight: "password" }}>
      <UpdatePasswordForm />
    </SimpleFormPage>
  )
}

import { UpdatePasswordForm } from "@/components/forms/UpdatePasswordForm"
import { SimpleFormPage } from "@/design-system/Layout"

export default async function UpdatePasswordPage({
  searchParams,
}: {
  searchParams: Promise<{
    error: string
    error_code: string
    error_description: string
  }>
}) {
  const { error, error_code, error_description } = await searchParams

  console.log(">>> ERROR", error, error_code, error_description)

  return (
    <SimpleFormPage title={{ default: "Update", hightlight: "password" }}>
      <UpdatePasswordForm />
    </SimpleFormPage>
  )
}

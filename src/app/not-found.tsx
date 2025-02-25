import { SimpleFormPage } from "@/design-system/Layout"
import { Button } from "@/design-system/Button"

export default function NotFound() {
  return (
    <SimpleFormPage
      title={{ default: "Page", hightlight: "not found" }}
      description={`Sorry, we couldn't find the page you're looking for.`}
    >
      <Button type="link" href="/">
        Return Home
      </Button>
    </SimpleFormPage>
  )
}

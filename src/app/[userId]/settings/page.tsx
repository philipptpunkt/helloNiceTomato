import { Card } from "@/design-system/Card"
import { Section } from "@/design-system/Layout"
import { Heading } from "@/design-system/Typography"
import { SettingsList } from "./_components/SettingsList"

export default function SettingsPage() {
  return (
    <Section width="document" horizontalPadding>
      <Heading type="default" size="reduced" text="Settings" />
      <div className="h-8" />
      <Card>
        <SettingsList />
      </Card>
    </Section>
  )
}

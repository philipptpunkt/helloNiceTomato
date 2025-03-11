import { Card } from "@/design-system/Card"
import { Section, Spacer } from "@/design-system/Layout"
import { Heading } from "@/design-system/Typography"
import { SettingsList } from "./_components/SettingsList"

export default function SettingsPage() {
  return (
    <Section width="document" horizontalPadding verticalPadding pageStart>
      <Heading type="default" size="reduced" text="Settings" />
      <Spacer />
      <Card>
        <SettingsList />
      </Card>
    </Section>
  )
}

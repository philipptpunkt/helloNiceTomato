import { IconLink, IconName } from "@/design-system/Icon"

export function SettingsButton({ userId }: { userId: string }) {
  return <IconLink iconName={IconName.icGear} href={`/${userId}/settings`} />
}

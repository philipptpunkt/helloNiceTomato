import { IconName } from "./IconNames"

import icButterfly from "./svgs/ic-butterfly.svg"
import icCheckCircle from "./svgs/ic-check-circle.svg"
import icCodesandboxLogo from "./svgs/ic-codesandbox-logo.svg"
import icCopy from "./svgs/ic-copy.svg"
import icDiscordLogo from "./svgs/ic-discord-logo.svg"
import icDribbbleLogo from "./svgs/ic-dribbble-logo.svg"
import icFacebookLogo from "./svgs/ic-facebook-logo.svg"
import icFigmaLogo from "./svgs/ic-figma-logo.svg"
import icGear from "./svgs/ic-gear.svg"
import icGithubLogo from "./svgs/ic-github-logo.svg"
import icGitlabLogo from "./svgs/ic-gitlab-logo.svg"
import icGoodreadsLogo from "./svgs/ic-goodreads-logo.svg"
import icInstagramLogo from "./svgs/ic-instagram-logo.svg"
import icLink from "./svgs/ic-link.svg"
import icLinkedinLogo from "./svgs/ic-linkedin-logo.svg"
import icMapPinArea from "./svgs/ic-map-pin-area.svg"
import icMastodonLogo from "./svgs/ic-mastodon-logo.svg"
import icMediumLogo from "./svgs/ic-medium-logo.svg"
import icMoon from "./svgs/ic-moon.svg"
import icPatreonLogo from "./svgs/ic-patreon-logo.svg"
import icPencilSimple from "./svgs/ic-pencil-simple.svg"
import icPinterestLogo from "./svgs/ic-pinterest-logo.svg"
import icProhibit from "./svgs/ic-prohibit.svg"
import icRedditLogo from "./svgs/ic-reddit-logo.svg"
import icSignOut from "./svgs/ic-sign-out.svg"
import icSnapchatLogo from "./svgs/ic-snapchat-logo.svg"
import icSoundcloudLogo from "./svgs/ic-soundcloud-logo.svg"
import icSpotifyLogo from "./svgs/ic-spotify-logo.svg"
import icSun from "./svgs/ic-sun.svg"
import icTelegramLogo from "./svgs/ic-telegram-logo.svg"
import icThreadsLogo from "./svgs/ic-threads-logo.svg"
import icTiktokLogo from "./svgs/ic-tiktok-logo.svg"
import icTwitchLogo from "./svgs/ic-twitch-logo.svg"
import icX from "./svgs/ic-x.svg"
import icXCircle from "./svgs/ic-x-circle.svg"
import icYoutubeLogo from "./svgs/ic-youtube-logo.svg"

export interface Svg {
  src: string
  id: string
}

export const iconSymbols = {
  icButterfly,
  icCheckCircle,
  icCodesandboxLogo,
  icCopy,
  icDiscordLogo,
  icDribbbleLogo,
  icFacebookLogo,
  icFigmaLogo,
  icGear,
  icGithubLogo,
  icGitlabLogo,
  icGoodreadsLogo,
  icInstagramLogo,
  icLink,
  icLinkedinLogo,
  icMapPinArea,
  icMastodonLogo,
  icMediumLogo,
  icMoon,
  icPatreonLogo,
  icPencilSimple,
  icPinterestLogo,
  icProhibit,
  icRedditLogo,
  icSignOut,
  icSnapchatLogo,
  icSoundcloudLogo,
  icSpotifyLogo,
  icSun,
  icTelegramLogo,
  icThreadsLogo,
  icTiktokLogo,
  icTwitchLogo,
  icX,
  icXCircle,
  icYoutubeLogo,
} satisfies Record<IconName, Svg>

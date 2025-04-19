import { create } from "@storybook/theming"

export default create({
  base: "light",
  brandTitle: "Ketchup",
  brandUrl: "https://hellonicetomato.com",
  brandImage: "/logo/Ketchup_Logo.png",
  brandTarget: "_self",

  //
  colorPrimary: "#E73806",
  colorSecondary: "#5fb306",

  // UI
  // appBg: "#ffffff",
  // appContentBg: "#ffffff",
  // appPreviewBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
})

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Predict AQI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Team",
      href: "/team",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "Github",
    //   href: "/github",
    {
      label: "AQI Prediction",
      href: "/predict",
    },
    // },
    {
      label: "Team",
      href: "/team",
    },
    // {
    //   label: "Settings",
    //   href: "/settings",
    // },
    // {
    //   label: "Help & Feedback",
    //   href: "/help-feedback",
    // },
    // {
    //   label: "Logout",
    //   href: "/logout",
    // },
  ],
  links: {
    github: "https://github.com/atharva0411/minorproject",
    twitter: "https://twitter.com/",
    docs: "/",
    discord: "https://discord.gg/",
    sponsor: "https://patreon.com/",
    predict:"/predict",
  },
};

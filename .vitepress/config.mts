import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zombs.io Wiki",
  description: "Wiki for everything zombs.io",
  base: "/zombsWiki/",
  srcDir: "src",
  head: [
    ["link", { rel: "icon", href: "/zombsWiki/logo.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    editLink: {
      pattern: 'https://github.com/AyuBloom/zombsWiki/edit/main/src/:path'
    },

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Welcome", link: "/" },
          { text: "What is zombs.io?", link: "/intro/introduction" },
        ],
      },
      {
        text: "Engine",
        items: [
          { text: "Overview", link: "/engine/overview" },
          {
            text: "Main Components",
            items: [
              { text: "ui", link: "/engine/main/ui" },
              { text: "world", link: "/engine/main/world" },
              { text: "network", link: "/engine/main/network" },
              { text: "renderer", link: "/engine/main/renderer" },
              { text: "inputManager", link: "/engine/main/inputManager" },
              { text: "inputPacketCreator", link: "/engine/main/inputPacketCreator" },
              { text: "inputPacketScheduler", link: "/engine/main/inputPacketScheduler" },
            ],
            collapsed: true,
          },
          {
            text: "Utility Components",
            items: [
              { text: "assetManager", link: "/engine/utils/assetManager" },
              { text: "debug", link: "/engine/utils/debug" },
              { text: "metrics", link: "/engine/utils/metrics" },
              { text: "platform", link: "/engine/utils/platform" },
            ],
            collapsed: true,
          }
        ],
      },
      { text: "MakeBlendField", items: [
        { text: "Overview", link: "/mbf/overview" },
      ]},
      { text: "Miscellaneous", items: [
        { text: "World Records", link: "/misc/records" },
      ]},
    ],

    logo: "/logo.svg",

    socialLinks: [
      { icon: "github", link: "https://github.com/AyuBloom/zombsWiki" },
      { icon: "discord", link: "https://discord.gg/Wm7khMgzUe" },
    ],

    lastUpdated: { formatOptions: { dateStyle: "long", timeStyle: "short" } }
  },
});

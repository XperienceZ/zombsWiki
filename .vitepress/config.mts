import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zombs.io Wiki",
  description: "Wiki for everything zombs.io",
  srcDir: "src",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
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
            ],
          },
        ],
      },
    ],

    logo: "/logo.svg",

    socialLinks: [
      { icon: "github", link: "https://github.com/AyuBloom/zombsWiki" },
      { icon: "discord", link: "https://discord.gg/Wm7khMgzUe" },
    ],

  },
});

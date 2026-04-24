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
          },
          {
            text: "Utility Components",
            items: [
              { text: "assetManager", link: "/engine/utilities/assetManager" },
              { text: "debug", link: "/engine/utilities/debug" },
              { text: "metrics", link: "/engine/utilities/metrics" },
              { text: "platform", link: "/engine/utilities/platform" },
            ],
          },
        ],
      },
      {
        text: "Miscellaneous",
        items: [{ text: "Records", link: "/misc/records" }],
      },
      {
        text: "Base game",
        items: [
          {
            text: "Buildings",
            items: [
              { text: "Buildings overview", link: "/game/buildings/buildings.md" },
              { text: "Wall", link: "/game/buildings/wall.md" },
              { text: "Door", link: "/game/buildings/door.md" },
              { text: "Trap", link: "/game/buildings/slow_trap.md" },
              { text: "Arrow", link: "/game/buildings/arrow_tower.md" },
              { text: "Cannon", link: "/game/buildings/cannon_tower.md" },
              { text: "Melee", link: "/game/buildings/melee_tower.md" },
              { text: "Bomb", link: "/game/buildings/bomb_tower.md" },
              { text: "Mage", link: "/game/buildings/mage_tower.md" },
              { text: "Gold Mine", link: "/game/buildings/gold_mine.md" },
              { text: "Harvester", link: "/game/buildings/harvester.md" },
              { text: "Gold Stash", link: "/game/buildings/gold_stash.md" },
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

# zombs.io Wiki
Welcome to the zombs.io Wiki repository! Here are some things you should know before contributing to the project.

## Contribution Guide

### Prerequisites
- Some knowledge of Markdown (.md) files
- Basic understanding of GitHub (making pull requests, resolving merge conflicts, etc.)

### Contributing

#### 0) Recommendations
- [GitHub Desktop](https://desktop.github.com/download/) is recommended to make `git` actions more friendly.

#### 1) Fork this repository
Click the "Fork" button right next to the "Star" button. (and you should also star this repo while you're at it, thank you :))

#### 2) Clone your fork to local
Use `git` on your machine to clone your fork.

#### 3.1) Start writing
- Markdown files for each page (adjacent to their actual route) are placed inside `/src`, and static assets are placed inside `/src/public` (see [Website layout](#website-layout)).
- If you are writing a new page, make sure to also change the configuration in `.vitepress/config.mts`.

#### 3.2) Run a preview of your work
- Dependencies required: [pnpm](https://pnpm.io/installation), [Node.js](https://nodejs.org/en/download).
- Run a local preview:
```sh
pnpm run docs:dev
```
- Navigate to the link provided by the command above to see the preview website.

#### 4) Create a pull request
Commit your edits to your fork, then go to your fork on GitHub and open a new pull request.

#### 5) Resolve merge conflicts (if any) and wait for PR approval

#### 6) Done!

### Writing tips
- Add badges to indicate classes being "public" or "private", if possible (use `type: tip` for public, `type: danger` for private).
- Keep the formatting consistent (check `AGENTS.md` for a more systematic format guideline).

## Project structure

### Website layout
```
src/
├── engine
│   ├── main
│   │   ├── ui
│   │   │   └── ui.md
│   │   ├── inputManager.md
│   │   ├── inputPacketCreator.md
│   │   ├── inputPacketScheduler.md
│   │   ├── network.md
│   │   ├── renderer.md
│   │   └── world.md
│   ├── utils
│   │   ├── assetManager.md
│   │   ├── debug.md
│   │   ├── metrics.md
│   │   ├── platform.md
│   │   └── util.md
│   └── overview.md
├── game
│   └── buildings
│       ├── arrow_tower.md
│       ├── bomb_tower.md
│       ├── buildings.md
│       ├── cannon_tower.md
│       ├── door.md
│       ├── gold_mine.md
│       ├── gold_stash.md
│       ├── harvester.md
│       ├── mage_tower.md
│       ├── melee_tower.md
│       ├── slow_trap.md
│       └── wall.md
├── intro
│   └── introduction.md
├── mbf
│   └── overview.md
├── misc
│   └── records.md
└── index.md
```

## Using AI agents
Usage of AI agents to write documentation is permitted (and in fact, encouraged to speed up writing). This project provides an `AGENTS.md` to help your AI agents write more accurately without / with minor modifications afterwards.

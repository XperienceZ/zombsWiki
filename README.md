# zombs.io Wiki
Welcome to the zombs.io Wiki repository! Here are some things you should know before contributing to the project.

## Prerequisites
- Some knowledge of Markdown (.md) files
- Basic understanding of GitHub (making pull requests, resolving merge conflicts, etc.)

## Writing guidelines
- Add badges to indicate classes being "public" or "private", if possible (use `type: tip` for public, `type: danger` for private).
- Keep the formatting consistent.

## Project structure
Markdown files for each page (adjacent to their actual route) are placed inside `/src`. Static assets are placed inside `/src/public`.

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
│   │   └── platform.md
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

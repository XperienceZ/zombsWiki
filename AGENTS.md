# Zombs.io Documentation Agent Guide

This project is a documentation website built for a 2D multiplayer survival game on the web called zombs.io.

## Technology Stack

- **Framework**: [VitePress](https://vitepress.dev/)
- **Package Manager**: `pnpm`

## Project Structure
```
zombsWiki/
├── .vitepress/           # VitePress configuration
│   ├── theme/                # VitePress themes
│   │   ├── custom.css            # Custom CSS styles for VitePress
│   │   └── index.ts              # Theme configuration for VitePress
│   └── config.mts            # General configuration for VitePress
└── src/                  # All the .md files on the website, presented as routes
    ├── .../                  # .md files on routes
    ├── index.md              # Homepage of the website
    └── public/               # Entry point of all public 
        └── assets/               # Entry point of all assets 
```

## Common Commands

- `pnpm run docs:dev`: Starts the development server.
- `pnpm run docs:build`: Builds the production application.

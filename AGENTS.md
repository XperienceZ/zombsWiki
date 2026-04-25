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

## Documentation Format

### Engine Documentation Format

The following page format is recommended, but not obligated as it does not handle edge cases.

```md
<!-- headers are case-sensitive -->
# className

descriptionParagraph

## ClassName

descriptionParagraph

### Properties
<!-- ... -->

<!-- more parts can be added here to explain some properties in depth -->

### Methods
<!-- ... -->

```

### When writing methods

````md

#### `methodName()`
```ts
function methodName(parameter: Type): returnValue
```

````

### When writing tables

```md
| Head1 | Head2 | ... |
| :--- | :--- | :--- |
| data1 | data2 | ... |
| ... | ... | ... |
```

## Custom Containers

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

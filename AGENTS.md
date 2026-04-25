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
# `className`

descriptionParagraph

## `ClassName`

descriptionParagraph

### Properties
<!-- ... -->

### Methods
<!-- ... -->

<!-- more parts can be added here, or inbetween the two above -->

```

### When writing methods

````md

#### `methodName()`
```ts
function methodName(parameter: type): returnValue
```

````

### When writing tables

```md
| Head1 | Head2 | ... |
| :--- | :--- | :--- |
| data1 | data2 | ... |
| ... | ... | ... |
```

## Containers
You may want to use these containers when addressing a property in detail, etc.

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

## Badges

You may want to use these badges when necessary.

```md

### Title <Badge type="info" text="info" />
### Title <Badge type="tip" text="tip" />
### Title <Badge type="warning" text="warning" />
### Title <Badge type="danger" text="danger" />

```

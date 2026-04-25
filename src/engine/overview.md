# Game Engine Overview

The game client exposes a global `game` variable that can be accessed through the console or via Tampermonkey / Greasemonkey user scripts. From now on, for convenience, Tampermonkey / Greasemonkey user scripts will simply be referred to as scripts.

![Game variable](/asset/engine/game.png)

There are 3 types of things inside the `game` object:

- Game components: All of the components that make the client work.
- Game component classes: Keys that ends with `Type` are of this type, which can be used to create more instances of any game component.
- Miscellaneous: Includes server data, event listeners, ...

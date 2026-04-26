# Tower Heal

## Phenomenon

If you sent an RPC for the `HealTowersSpell` but with a different tier, there would be various effects:
| Tier | Effect |
| :--- | :--- |
| 9 | Instantly heal every tower (Arrow, Cannon, Mage, Melee, Bomb) near you with no cost and no timeout. |
| 1033 | Makes every tower near you have negative health (the effect would be reversed if you upgraded the tower) with no cost and no timeout. |
| 99999 | Gives you around 45 million gold with no cost and no timeout. |
| 999999+ | Crashes the server. This disconnects everyone in the server before the server auto-restarts with a completely new layout and restarts the party id's back to 1. |

## Cause

The reason the tower heal bug worked was because of the low level language that the game is made in. The data type that was meant to be in the tier is capped at 8, therefore anything in that limit works normally and anything over that breaches other parts of the server. If the tier was in a list of specific numbers, the leakage would affect other things like cost, radius, any many others. A tier being too high would cause total failure in the server.

Credits: [Apex](https://www.youtube.com/@Apex-ti1dm)

# Activity calculator

Demystifying how many stars you needed to exile (the stars didn't matter at all btw).

This application has been configured to use values that existed in global build / Kakao before they decoupled activity from exiles. The live version of the code is available at [https://archea.ge/activitycalc/](https://archea.ge/activitycalc/).

If you want to change the values in `Calculator.vue`, you will most likely need to look up the values from database yourself. Some of them are server dependent.

In case your server's `world_id` is included in `world_specific_content_configs` table, then use the value from there. If you don't know your world id, then you can find it in most recent `ArcheAge.log`. Look for a line such as `Show current world Id[66]`.

```js
const minActivityForExiles = 700 // content_configs id 310
const minActivityForAlliance = 1000 // content_configs id 309

const oneThreeMinThreshold = 25 // content_configs id 293
const oneTwoDominantThreshold = 10  // content_configs id 294
const oneTwoInferiorThreshold = 25 // content_configs id 295
const twoThreeInferiorThreshold = 5 // content_configs id 296
```

Values for `activityRank` function's `table` are from `faction_power_grades` table.

Similarly, values for `getExileAmount` function's `table` are from `faction_change_limit_nums` `over` column.

Instructions how to build the Vite app are below. Only [Node.js](https://nodejs.org/) should be required.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

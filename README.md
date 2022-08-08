# my-world-clock

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

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

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## 总结
你可以在这个案例中学到以下工具插件与库的初步使用

1.时区json[timezones.json](https://github.com/dmfilipenko/timezones.json)  

2.搜索库[fuse.js](https://fusejs.io/)

3.时间格式化库[date-fns](https://date-fns.org/)

4.可以自动引入，如ref等需要手动引入的componmentAPI以及其他需引入使用的工具或者文件[unplugin-auto-inport](https://github.com/antfu/unplugin-auto-import)（vite插件）

5.可以自动引入定义的组件，无需手动引入[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) （vite插件）

6.原子化css工具，不在需要手动写重复的css样式，可以使用预设的样式或者在vite.config.ts中自定义预设样式[Unocss](https://github.com/unocss/unocss)，与配套使用的预设样式查询网站[unocss-Interactive](https://uno.antfu.me/),图标库[icones.js](https://icones.js.org/)

7.Vue3函数库[VueUse](https://vueuse.org/)
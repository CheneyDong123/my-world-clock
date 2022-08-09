# my-world-clock

根据[antfu](https://github.com/antfu/what-time)大佬直播分享进行编写。这个项目包括对Unocss进行初步学习使用，以及相关插件的分享使用

## 项目初始化

```sh
npm install
```

### 运行

```sh
npm run dev
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
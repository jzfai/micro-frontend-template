# micro-frontend-template

**中文** | [English](./README.md)



> 这是一个基础的 vue3 admin 管理后台。它只包含了 Element-Plus UI & axios & svg-icon& permission control & lint，这些搭建后台必要的东西。


本架构使用的技术为：vue3(setup-script)+vite2+element-plus 的新一代的前端框架，It's fast!

使用 eslint+prettier+gitHooks 格式和校验代码,提高代码规范性和开发效率

Vite 需要 Node.js 版本 >= 12.0.0。

## 更新日志

---请查看架构文档

- [真香定律！带你用vue3+vite2撸后台（系列文章入口）](https://juejin.cn/post/7036302298435289095)


## 文档

- [真香定律！带你用vue3+vite2撸后台（系列文章入口）](https://juejin.cn/post/7036302298435289095)

## 线上体验

[github address](https://github.com/jzfai/micro-frontend-template.git)

[Access address](http://8.135.1.141/micro-frontend-template)

github 地址：  https://github.com/jzfai/micro-frontend-template.git

国内体验地址：http://8.135.1.141/micro-frontend-template


## 例子

 ---- 我们先看看加载速度和构建后的包大小：

![template-speed-analysis](http://8.135.1.141/file/images/template-speed-analysis.png)

![template-demo](http://8.135.1.141/file/images/template-demo.png)

## 相关项目

框架有js，ts，plus和electron版本

- js版本：[vue3-element-admin](https://github.com/jzfai/micro-frontend-template.git)
- ts版本：[vue3-element-ts](https://github.com/jzfai/vue3-admin-ts.git)
- js实例参考plus版本：[vue3-element-plus](https://github.com/jzfai/vue3-admin-plus.git)
- electron版本：[vue3-element-electron](https://github.com/jzfai/vue3-admin-electron.git)
- react版本： [react-admin-template](https://github.com/jzfai/react-admin-template.git)
- java微服务后台数据：[micro-service-plus](https://github.com/jzfai/micro-service-plus)

> 开发和使用感受：两个字 真香！！！！！



vue3和vue2在性能上的对比

- 打包大小减少41%

- 初次渲染快55%, 更新渲染快133%

- 内存减少54%

- **使用Proxy代替defineProperty实现数据响应式**

- **重写虚拟DOM的实现和Tree-Shaking**

[vite2和webpack打包速度上的对比](https://github.com/jzfai/micro-frontend-template/issues/2)

## Build Setup

```bash
# clone the project
git clone https://github.com/jzfai/micro-frontend-template.git

# enter the project directory
cd micro-frontend-template

# pnpm address https://pnpm.io/zh/motivation
# install dependency(Recommend use pnpm)
# you can  use "npm -g i pnpm" to install pnpm 
pnpm i

# develop
pnpm run hostall:dev
```

using the browser to open http://localhost:5012/vue3-micro-frontend

## Build

```bash
# build for production environment
pnpm run  hostall:preview
```

## Others

```bash
# preview the release environment effect
pnpm run hostall:preview-offline

# code format check
pnpm run lint

```


## 额外

架构开发不易，如果感觉好，请给我点个 start ，架构还在不断完善中，欢迎加入我开发，一起成为Contributors ！！！！

## 浏览器支持

注意：vue3不在支持IE浏览器
Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
|Edge| last 2 versions| last 2 versions| last 2 versions

## 讨论和交流(含vue3+ts视频教程)
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## 版本

[MIT](https://github.com/jzfai/micro-frontend-template/blob/master/LICENSE) license.

Copyright (c) 2021-present  kuanghua




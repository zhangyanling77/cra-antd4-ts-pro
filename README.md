# cra-antd4-ts-pro
一个基于create-react-app + ant design 4.0 + typescript的项目环境搭建

## 创建项目
```bash
$ npx create-react-app cra-antd4-ts-pro --template typescript
$ cd cra-antd4-ts-pro
$ yarn start
```
## 引入antd (4.0)
```bash
$ yarn add antd
```
## 高级配置

这里我们使用 react-app-rewired

* 引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra。

```bash
$ yarn add react-app-rewired customize-cra
```
```json
  /* package.json */
  "scripts": {
     "start": "react-app-rewired start",
     "build": "react-app-rewired build",
     "test": "react-app-rewired test",
  }
```
* 根目录创建 config-overrides.js
```javascript
module.exports = function override(config, env) {
  // ...
  return config;
};
```
* 按需加载 使用 babel-plugin-import
```bash
$ yarn add babel-plugin-import
```
* 添加less支持
```bash
$ yarn add less less-loader
```
* 使用 Day.js 替换 momentjs 优化打包大小
```bash
$ yarn add antd-dayjs-webpack-plugin
```
```javascript
const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const darkThemeVars = require('antd/dist/dark-theme');

module.exports = override(
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, // 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
      ...darkThemeVars, // 暗黑主题配置
      '@primary-color': '#1DA57A',
    },
  })
)
```
* 更改App.tsx
```javascript
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
```
运行 yarn start 在 http://localhost:3000 访问，可查看效果

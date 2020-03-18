# cra-antd4-ts-pro
一个基于create-react-app + ant design 4.0 + typescript的项目环境搭建

## 创建项目 by CRA
```bash
npx create-react-app cra-antd4-ts-pro --template typescript
cd cra-antd4-ts-pro
yarn start
```
## 引入antd (4.0)
```bash
yarn add antd
```
## 高级配置

这里我们使用 react-app-rewired

引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra。

```bash
yarn add react-app-rewired customize-cra
```
```json
  /* package.json */
  "scripts": {
     "start": "react-app-rewired start",
     "build": "react-app-rewired build",
     "test": "react-app-rewired test",
  }
```

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
      ...darkThemeVars,
      '@primary-color': '#1DA57A',
    },
  })
)

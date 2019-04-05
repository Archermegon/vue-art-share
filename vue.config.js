/** 
 * 在这里写你需要定制化的webpack相关配置 
 * 了解更多请参考指南：https://cli.vuejs.org/guide/webpack.html
 * 详细解释：https://cli.vuejs.org/config/#vue-config-js
 **/
var argv = require('yargs').argv
var path = require('path')

const StyleLintPlugin = require('stylelint-webpack-plugin')

let configPath

switch(argv.config) {
  case 'dev': 
  configPath = path.join('./', 'config/dev.js')
  break
  case 'rel':
  configPath = path.join('./', 'config/rel.js')
  break
  case 'online':
  configPath =  path.join('./', 'config/online.js')
  break
}

module.exports = {
  baseUrl: './',
  devServer: {
    // 设置请求代理，了解更多，请参见https://cli.vuejs.org/config/#devserver-proxy
    // proxy: 'http://localhost:4000' 
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin(),
    ]
  },
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args = [
          [
            ...args[0],
            {
              from: configPath,
              to: path.join('./', 'config.js'),
              toType: 'file'
            }
          ]
        ]
        return args
      })
  }
}

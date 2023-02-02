const path  = require('path')
const { merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack')

const readenv = require('./readenv.js')
const env = readenv('../.env.development')
console.log(888,env);
 module.exports = merge(baseConfig,{
   mode:'development',
   devtool:'eval-cheap-module-source-map' , //该选项控制是否以及如何生成源映射
   devServer: { //开发环境下本地服务
    host: 'localhost',
    port: 80,
    open: true,
    hot: true, // 启用 webpack 的 HotModuleReplacement 功能
    compress: true, // 开启压缩
    historyApiFallback: true, //暂不理解
    //  contentBase : path.resolve(__dirname,'../dist'), // 起服务文件路径
    proxy: { // 配置相关代理
      '/api': {
        target: 'http://localhost:80',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
   },
   plugins:[
    new webpack.HotModuleReplacementPlugin(), // 配置热更新插件
    new webpack.DefinePlugin({ // 定义环境和变量
      'process.env': {
        ...env,
      }
    })
  ],
})
console.log(666,process.env.VUE_APP_BASE_URL);
//  console.log(55555,process.env);
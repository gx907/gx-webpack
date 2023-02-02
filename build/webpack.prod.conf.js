// const path = require('path')
const { merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const readenv = require('./readenv.js')
const env = readenv('../.env.production')
module.exports = merge(baseConfig,{
  mode:'production',
  devtool:'source-map',
  // module:{
  //   rules:[]
  // },
  plugins:[
    new webpack.DefinePlugin({ // 定义环境和变量
      'process.env': {
        ...env,
      }
    })
  ],
  optimization:{},
}),
console.log(222,env);
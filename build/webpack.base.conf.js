const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  // 打包入口文件
  entry:{
    bundle:path.resolve(__dirname,'../src/index.js')
  },
  // 出口文件
  output: {
    path: path.resolve(__dirname,'../dist'),
    // chunkFilename是配合vue路由懒加载的webpackChunkName去使用，用来生成输出的文件名
    chunkFilename: 'js/[name].js',
    // 文件名字
    filename:'[name].[hash].js',
    // 不再需要clean-webpack-plugin插件清除打包后的dist目录， 只需在output属性里添加：clean:true即可
    clean: true
  },
    resolve: {
      alias: {
        '@':path.resolve('src')
      },
      extensions: ['*', '.js', '.json', '.vue'], //方便我们引入依赖或者文件的时候可以省略后缀
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader', // JavaScript 代码兼容更多环境
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader' //将字体文件、图片文件进行模块化
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 打包以此index.html为模板 这将会产生一个包含以下内容的文件 dist/index.html
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../index.html')
    }),
    new VueLoaderPlugin(), //vue-loader配置的插件

  ]
}
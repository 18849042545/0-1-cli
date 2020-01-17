const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将库文件拆分
const { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize

const webpack = require('webpack')
console.log(webpack)


module.exports = {
  // resolve解决一些问题
  resolve:{
    // 省略文件后缀名
    extensions:['.js','.vue'],
    // 省略路径
    alias:{
      // 这里的$更准确的找到vue文件
      vue$:'vue/dist/vue.js',
      // process.cwd() 执行命令的目录
      '@':path.join(process.cwd(),'./src')
    }
  },
  entry:{
    main: './main.js',
    lib:['vue', 'vuex', 'vue-router']
  },
  output:{
    path:path.join(process.cwd(),'../'),
    filename:'./static/[name].js'
  },
  module:{
    rules:[
    {
      test:/\.vue$/,
      loader:'vue-loader',
      options:{
        loaders: {
          js:['babel-loader?presets=es2015']
        }
      }
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        options:{
          presets:['es2015']
        }
      },
      {
        test:/\.scss$/,
        loader: 'style-loader!css-loader!sass-loader' 
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'../public/index.html',
      hash:true,
      inject:true,
      // 发布路径
      filename:'./views/index.html'
    }),
    // 拆分库文件
    new CommonsChunkPlugin('lib'),
    // 压缩js文件
    new UglifyJsPlugin()
  ]
}
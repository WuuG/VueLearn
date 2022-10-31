const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')  // 横幅插件，可加入版权声名
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //动态获取路径 _dirname 获取webpack.config.js文件所在位置
    filename: 'bundle.js',
    // publicPath: 'dist/' //添加配置，所有打包的文件其路径都会在前面加上dist/  但是之后运行时index文件还会放到dist里，所以之后要删除这个配置
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责加载  style-loader只负责将样式添加到DOM中
        //使用多个loader时，时从右向左进行使用的,顺序不对会报错的。
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小与limit时，会将图片编译成base64的字符串，
              //当大于limit时需要fileloader,但是此时文件的打包后，路径会错误，因此要在上面output中进行配置
              limit: 8196,
              //以此规范进行命名
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        //exclude排除 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //回去文件中寻找配置
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  resolve: {
    //有趣，在js文件中引入vue文件还是要.vue结尾,而在vue文件的引入就不需要了，为啥呢？
    extensions: ['.js', '.css', '.vue'],
    //alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('这里是WuuG的版权测试'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyJsPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    inline: true,
  }
}
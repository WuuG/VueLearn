const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //动态获取路径 _dirname 获取webpack.config.js文件所在位置
    filename: 'bundle.js'
  },
}
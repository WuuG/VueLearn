const { sum, mul } = require('./js/mathutils.js')
import * as info from './js/info.js'

console.log(sum(20, 11));
console.log(mul(20, 20));
console.log(info);
console.log('测试下是否可以直接用webpack打包');

//依赖css文件
require('./css/normal.css')

//2.依赖less文件
require('./css/special.less')

document.writeln('<h2>现在测试下less的loader是否安装</h2>')
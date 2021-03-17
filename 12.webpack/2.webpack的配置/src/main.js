const { sum, mul } = require('./mathutils')
import * as info from './info'

console.log(sum(20, 11));
console.log(mul(20, 20));
console.log(info);
console.log('测试下是否可以直接用webpack打包');
var flag = false;
var age = 20;

import { width, day } from './aaa.js'
import { mul, peroson } from './aaa.js'

console.log(width, day);
console.log(mul(9, 8));
const p = new peroson()
p.run();
//default的导出  这里add时导入时定义的
import add from './aaa.js'
add(2222)

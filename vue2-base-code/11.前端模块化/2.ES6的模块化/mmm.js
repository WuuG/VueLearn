import { flag, sum } from './aaa.js'
if (flag) {
  console.log('小明能够打印');
}
console.log(sum(90, 100));

//5.全部统一导入
import * as  aaa from './aaa.js'
console.log(aaa);
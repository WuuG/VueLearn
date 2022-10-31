let name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(28, 19));
}

// 1.第一种导出方式
export {
  flag,
  sum,
}
// 2.导出方式2
export let width = 100.
export const day = 'one'

//3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}
export class peroson {
  run() {
    console.log('跑跑跑');
  }
}
//4.export default 可以不命名导出,导入时命名
// const address = '北京市';
// export default address  // 只有一个且只能有一个
export default function (nnn) {
  return console.log(nnn);
}

// 基本类型
// 字符串类型
var a = '2222';
var b = "es6\u7684\u6A21\u7248\u5B57\u7B26\u4E32".concat(a);
console.log(a, b);
// 数字类型
// 支持十六进制 十进制 八进制和二进制
var num = 1334; // 普通数字
console.log('普通数字', num);
var num1 = NaN; // Nan
console.log('Nans', num1);
// 布尔类型
var createBoolean = new Boolean(1); // new Boolean(1) 返回的是对象，需要用 Boolean
var booleand = true;
// 空值类型
// void 标识没有任何返回值的函数
// 通常用于异步回调函数
function voidFn() {
    console.log('test void');
}
// void 也可以定义undefined和null
var u = undefined;
var n = null;
var test = undefined;
var test1 = '1111';
// test1 = test  // 错误 void不能分配给string
var test2 = undefined;
// test1 = test2 // 严格模式是不可以的赋值的 undefined 不能赋值给string

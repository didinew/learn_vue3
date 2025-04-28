"use strict";
// 基本类型
// 字符串类型
const a = '2222';
let b = `es6的模版字符串${a}`;
console.log(a, b);
// 数字类型
// 支持十六进制 十进制 八进制和二进制
let num = 1334; // 普通数字
console.log('普通数字', num);
let num1 = NaN; // Nan
console.log('Nans', num1);
// 布尔类型
let createBoolean = new Boolean(1); // new Boolean(1) 返回的是对象，需要用 Boolean
let booleand = true;
// 空值类型
// void 标识没有任何返回值的函数
// 通常用于异步回调函数
function voidFn() {
    console.log('test void');
}
// void 也可以定义undefined和null
let u = undefined;
let n = null;
let test = undefined;
let test1 = '1111';
// test1 = test  // 错误 void不能分配给string
let test2 = undefined;
// test1 = test2 // 严格模式是不可以的赋值的 undefined 不能赋值给string

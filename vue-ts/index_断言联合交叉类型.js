"use strict";
// 类型断言 联合类型 交叉类型
// 联合类型
let phone = '23232323';
// 函数使用联合类型 |
const fnUnion = (something) => {
    return !!something;
};
const resUnion = fnUnion(true);
const fnAnd = (man) => {
    console.log(man.age);
    console.log(man.height);
    console.log(man.sex);
};
const FnAs = (type) => {
    return type.run;
};
const resAs = FnAs({ run: 'dddddd' });
// console.log(resAs)
// 类型断言是不具影响力的
function toBoolean(something) {
    return something;
}
const reBoolean = toBoolean(1);
console.log(reBoolean); // 返回值为1

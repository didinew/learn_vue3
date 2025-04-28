"use strict";
// 函数的类型
// 参数不能多传也不能少传
function fn(name, age) {
    return `这里是${name}的${age}岁生日`;
}
const returnRe = fn('章三', 18);
// console.log(returnRe)
// 参数可以选择
function fnSelected(name, age) {
    return {
        name,
        age
    };
}
const reSelect = fnSelected('章三');
const addFn = (num, num2) => {
    return num + num2;
};
const resAdd = addFn(1, 33);
const userFn = (user) => {
    return `this is a ${user.name} --- ${user.age}`;
};
const userRes = userFn({
    name: 'zhangsan',
    age: 111
});
// console.log(userRes)
// 定义剩余参数
const definedFn = (array, ...item) => {
    console.log(array, item);
    return item;
};
let fnArr = [1, 2, 3];
definedFn(fnArr, '2', '4', '5');
function fnAgain(params, params2) {
    console.log(params);
    console.log(params2);
}
fnAgain(2323);
fnAgain('222222', 4545454);

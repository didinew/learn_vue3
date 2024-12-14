// 类型断言 联合类型 交叉类型
// 联合类型
var phone = '23232323';
// 函数使用联合类型 |
var fnUnion = function (something) {
    return !!something;
};
var resUnion = fnUnion(true);
var fnAnd = function (man) {
    console.log(man.age);
    console.log(man.height);
    console.log(man.sex);
};
var FnAs = function (type) {
    return type.run;
};
var resAs = FnAs({ run: 'dddddd' });
// console.log(resAs)
// 类型断言是不具影响力的
function toBoolean(something) {
    return something;
}
var reBoolean = toBoolean(1);
console.log(reBoolean); // 返回值为1

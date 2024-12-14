// 泛型
// 函数泛型
// function numNb (a: number, b: number): Array<number> {
//     return [a, b]
// }
// const numSum = numNb(1, 2)
// console.log(numSum)
// function numStr (a: string, b: string): Array<string> {
//     return [a, b]
// }
// const numStrr = numStr('ssss', '11111')
// console.log(numStrr)
// 泛型优化
// 语法为函数名字后面跟一个<参数名>参数可以随便写
// 当我使用这个函数的时候 把参数的类型传进去 就可以了 也是动态类型
function numT(a, b) {
    return [a, b];
}
var numTStr = numT('str1', 'str2');
console.log(numTStr);
var numTNum = numT(123, 456);
console.log(numTNum);
// 可以使用不同的泛型参数名，只要在 数量上和使用方式上能对应上就可以
function subT(a, b) {
    var params = [a, b];
    return params;
}
var newTArr = subT(true, '2323232');
console.log(newTArr);
function fnResult(arg) {
    return arg;
}
var result = fnResult;
var rss = result([1, 2, 3555, 34343]);
// console.log(rss)
// 对象字面量泛型
var fooResultInterface;
fooResultInterface = function (arg) {
    return arg;
};
var fooResultInterfaceRe = fooResultInterface(8545555);
function getLength(arg) {
    return arg.length;
}
var lenRes = getLength('w343434343');
console.log(lenRes);
// 使用 keyof 约束对象
// 使用了TS 泛型和泛型约束，
// 首先定义了T类型并使用extends 关键字关键字继承object类型的子类型，
// 并使用keyof 操作符获取 T类型的所有键，他的返回 类型是联合类型，
// 最后利用 extends 关键字约束 K类型必须为 keyof T联合类型的子类型
function prop(obj, key) {
    return obj[key];
}
var ooo = { a: 1, b: 2, c: 3 };
var sssss = prop(ooo, 'a');
console.log(sssss);
// 声明方法跟 函数类 似名称后面定义<类型>
// 使用的时候确定类型 new Sub<number>
var Sub = /** @class */ (function () {
    function Sub() {
        this.att = [];
    }
    Sub.prototype.add = function (a) {
        return [a];
    };
    return Sub;
}());
var newSub = new Sub();
newSub.att = [2222, 5555];
console.log(newSub.add(88555));

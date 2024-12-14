// 1. 对象混入
// 可以使用es6的 Object.assign 合并多个对象
// interface NameMixin{
//     name: string
// }
// interface AgeMixin {
//     age: number
// }
// interface SexMixin {
//     sex: number
// }
// let pp1: NameMixin = {name: 'mixin-name'}
// let pp2: AgeMixin = {age: 12}
// let pp3: SexMixin = {sex: 1}
// const pObject = Object.assign(pp1, pp2, pp3)
// console.log(pObject)
// 2.类的混入
// 首先声明两个mixins类，（严格模式 要关闭不然编译不过）
var AMixins = /** @class */ (function () {
    function AMixins() {
        this.type = false;
    }
    AMixins.prototype.changeType = function () {
        this.type = !this.type;
    };
    return AMixins;
}());
var BMixins = /** @class */ (function () {
    function BMixins() {
        this.name = 'zhangsan';
    }
    BMixins.prototype.getName = function () {
        return this.name;
    };
    return BMixins;
}());
var CMixins = /** @class */ (function () {
    function CMixins() {
    }
    return CMixins;
}());

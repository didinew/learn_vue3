// 装饰器
// 类装饰器 ClassDecorator
// 属性装饰器 PropertyDecorator
// 参数装饰器 ParamterDecorator
// 方法咋UN个时期 MethodDecorator PropertyDescriptor
// 装饰工厂
var Base = function (target) {
    target.prototype.xiaoman = 'xxxx';
};
// @Base
var Http = /** @class */ (function () {
    function Http() {
    }
    return Http;
}());
Base(Http);
var http = new Http();
// console.log(http.xiaoman)

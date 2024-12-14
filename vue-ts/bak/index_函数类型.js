// 函数的类型
// 参数不能多传也不能少传
function fn(name, age) {
    return "\u8FD9\u91CC\u662F".concat(name, "\u7684").concat(age, "\u5C81\u751F\u65E5");
}
var returnRe = fn('章三', 18);
// console.log(returnRe)
// 参数可以选择
function fnSelected(name, age) {
    return {
        name: name,
        age: age
    };
}
var reSelect = fnSelected('章三');
var addFn = function (num, num2) {
    return num + num2;
};
var resAdd = addFn(1, 33);
var userFn = function (user) {
    return "this is a ".concat(user.name, " --- ").concat(user.age);
};
var userRes = userFn({
    name: 'zhangsan',
    age: 111
});
// console.log(userRes)
// 定义剩余参数
var definedFn = function (array) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(array, item);
    return item;
};
var fnArr = [1, 2, 3];
definedFn(fnArr, '2', '4', '5');
function fnAgain(params, params2) {
    console.log(params);
    console.log(params2);
}
fnAgain(2323);
fnAgain('222222', 4545454);

// 数组类型
// 1. []
var arr1 = [1, 2, 3, 4];
// let arr2: number[] = [1, 2, 4, '444'] // cuowu 
var arr3 = [1, true, 333, '3333'];
//2. 数组泛型
// Array<类型>
var arr4 = [1, 2, 3, 4];
var fibona = [1, 2, 3, 4];
// 多维数组
var data = [[1, 2], [3, 4]];
// arguments类数组
function Arr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(arguments);
    var arr = arguments;
}
Arr(111, 22, 3333);
// any在数组中的应用
var list = ['test', 22323, { a: 'ddddd' }];

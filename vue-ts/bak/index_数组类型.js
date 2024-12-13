// 数组类型
// 1. []
let arr1 = [1, 2, 3, 4];
// let arr2: number[] = [1, 2, 4, '444'] // cuowu 
let arr3 = [1, true, 333, '3333'];
//2. 数组泛型
// Array<类型>
let arr4 = [1, 2, 3, 4];
let fibona = [1, 2, 3, 4];
// 多维数组
let data = [[1, 2], [3, 4]];
// arguments类数组
function Arr(...args) {
    console.log(arguments);
    let arr = arguments;
}
Arr(111, 22, 3333);
// any在数组中的应用
let list = ['test', 22323, { a: 'ddddd' }];

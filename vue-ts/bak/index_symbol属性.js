var _a, _b;
// Smybol 类型
// symbol类型的值是通过Symbol构造函数创建的。
// 可以传递参做为唯一标识 只支持 string 和 number类型的参数
var sym1 = Symbol();
var sym2 = Symbol(222);
// console.log(sym1 === sym2)
var objSym = (_a = {},
    _a[sym1] = 'value',
    _a[sym1] = 'value2',
    _a.a = 'aaaaaaa',
    _a);
// console.log(objSym[sym1])
// symbol 定义的属性是不能通过如下方式遍历拿下的
// 1. for in 遍历
// for (const key in objSym) {
//     console.log(key)
// }
// 2. Object.keys 遍历
// console.log(Object.keys(objSym))
// 3. getOwnPropertyNames
// console.log(Object.getOwnPropertyNames(objSym))
// 4. JSON.stringify
// console.log(JSON.stringify(objSym))
// 拿到 symbol key值
// 1.拿到具体的symbol属性，对象中有几个就会拿到几个
console.log(Object.getOwnPropertySymbols(objSym));
var array = [{ age: 12, name: 'name1' }, { age: 14, name: 'name2' }, { age: 18, name: 'name3' }];
var map = new Map();
map.set('1', 'name4');
map.set('2', 'name5');
// console.log(map)
var set = new Set([1, 2, 3, 4]);
var gen = function (erg) {
    var it = erg[Symbol.iterator]();
    var next = { done: false };
    while (!next.done) {
        next = it.next();
        if (!next.done) {
            console.log(next.value);
        }
    }
};
gen(array);
// 自定义对象迭代器
var objIter = (_b = {
        max: 5,
        current: 0
    },
    _b[Symbol.iterator] = function () {
        return {
            max: this.max,
            current: this.current,
            next: function () {
                if (this.current == this.max) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                else {
                    return {
                        value: this.current,
                        done: false
                    };
                }
            }
        };
    },
    _b);
// console.log([...objIter])

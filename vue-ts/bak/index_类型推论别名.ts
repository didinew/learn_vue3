// 类型推论
let strws = 'zzzzz'

// 类型别名
// type 关键字（可以给一个类型定义一个名字）多用于复合类型

// 定义类型别名
type strT = string
let strTr: strT = '333333'

// 定义函数别名
type StrFn = () => string
let ssFn: StrFn = () => 'StrFn'

// 定义联合类型别名
type strtUnion = string | number
let ssUnion: strtUnion = '3434343'
let ssUnionq: strtUnion = 1234568

// 定义值别名
type ssAlias = boolean | 0 | '1233'
let sSlias: ssAlias = true


// type 和 interface 区别
// 1. interface 可以继承 type只能通过& 交叉类型合并
// 2. type 可以定义 联合类型 和 可以使用一些操作符  interface不行
// 3. interface 遇到重名可以合并 type不行

// type 高级用法
 type aa = 1 extends Number ? 1 : 0
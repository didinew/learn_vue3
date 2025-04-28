// set map weakmap weakset
// set 是有一组无序且唯一（即不能重复）的项 组成，可以想象集合是一个没有 重复元素，也没有顺序概念
// size 返回字典是有包含的元素个数
// 方法
// add(value) 添加某个值，返回Set的结构本身
// deleted 删除某个值。返回一个布尔值，表示删除是够成功
// has(value) 返回一个布尔值，表示该值是否为Set的成员
// clear 清除所有成员 无返回值
// size 返回set数据结构的数据长度
const setArr:Set<number> = new Set([1, 2, 3, 4])
setArr.add(6)
console.log(setArr)
setArr.has(6)
setArr.delete(1)
console.log(setArr)



const objTes = { name: 'xiaoman'}
const mapT:Map<object, Function> = new Map()
mapT.set(objTes, () => 1255)
console.log(mapT)
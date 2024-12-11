// 类型断言 联合类型 交叉类型

// 联合类型

let phone: string | number = '23232323'

// 函数使用联合类型 |
const fnUnion = (something: number | boolean): boolean => {
    return !!something
}
const resUnion = fnUnion(true)
// console.log(resUnion)

// 交叉类型 &
// 多种类型的集合，联合对象将具有所有类型的所有成员
interface People {
    age: number,
    height: number
}

interface Man {
    sex: string
}

const fnAnd = (man: People & Man) => {
    console.log(man.age)
    console.log(man.height)
    console.log(man.sex)
}

// fnAnd({
//     age: 12,
//     height: 140,
//     sex: 'sssss'
// })


// 类型断言
// 语法： 值 as 类型 或 <类型>值 value as string  <string> value

interface A {
    run: string
}

interface B {
    build: string
}

const FnAs = (type: A | B): string => {
    return (type as A).run
}

const resAs = FnAs({run: 'dddddd'})
// console.log(resAs)

// 类型断言是不具影响力的
function toBoolean(something: any): boolean {
    return something as boolean
}
const reBoolean = toBoolean(1)
console.log(reBoolean) // 返回值为1


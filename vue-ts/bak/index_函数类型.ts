// 函数的类型

// 参数不能多传也不能少传
function fn(name: string, age: number):string {
    return `这里是${name}的${age}岁生日`
}
const returnRe = fn('章三', 18)
// console.log(returnRe)

// 参数可以选择
function fnSelected(name: string, age?: number): object {
    return {
        name,
        age
    }
}

const reSelect = fnSelected('章三')
// console.log(reSelect)

// 接口定义函数
// 定义参数num 和 num2 ： 后面定义返回值的类型
interface Add {
    (num: number, num2: number): number
}

const addFn: Add = (num: number, num2: number): number => {
    return num + num2
}

const resAdd = addFn(1, 33)
// console.log(resAdd)

interface User {
    name: string,
    age: number
}

interface UserFn {
    (user: User): string
}

const userFn = (user: User): string => {
    return `this is a ${user.name} --- ${user.age}` 
}

const userRes = userFn({
    name: 'zhangsan',
    age: 111
})
// console.log(userRes)

// 定义剩余参数
const definedFn = (array: number[], ...item: any[]): any[] =>{
    console.log(array, item)
    return item
}

let fnArr: number[] = [1, 2,3]
definedFn(fnArr, '2', '4', '5')

// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同
// 如果参数类型不同， 则参数类型应该设置为any
// 参数数量不同你可以将不同的参数设置为可选
function fnAgain(params: number): void
function fnAgain(params: string, params2: number): void
function fnAgain(params: any, params2?: any): void {
    console.log(params)
    console.log(params2)
}
fnAgain(2323)
fnAgain('222222', 4545454)
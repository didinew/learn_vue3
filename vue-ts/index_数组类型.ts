// 数组类型
// 1. []
let arr1: number[] = [1, 2,3,4]
// let arr2: number[] = [1, 2, 4, '444'] // cuowu 
let arr3: any[] = [1, true, 333, '3333']

//2. 数组泛型
// Array<类型>
let arr4: Array<number> = [1, 2,3, 4]

//3. 用接口表示数组
// 一般用来描述类数组
interface NumberArray {
    [index: number]: number
}

let fibona: NumberArray = [1, 2,3, 4]


// 多维数组
let data: number[][] = [[1, 2], [3, 4]]

// arguments类数组

function Arr(...args: any) :void {
    console.log(arguments)
    let arr: IArguments = arguments
}

Arr(111,22,3333)

// any在数组中的应用
 let list: any[] = ['test', 22323, {a: 'ddddd'}]
 
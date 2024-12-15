// 装饰器

// 类装饰器 ClassDecorator
// 属性装饰器 PropertyDecorator
// 参数装饰器 ParamterDecorator
// 方法咋UN个时期 MethodDecorator PropertyDescriptor
// 装饰工厂

// 类装饰器 ClassDecorator
// const Base: ClassDecorator = (target) => {
   
//    target.prototype.xiaoman = 'ddddd'
//    target.prototype.fn = () => {
//         return 'xxxxxx'
//    }
// }

// @Base
// class Http {
//     xiaoman: string
// }


// const http = new Http() as any
// console.log(http.fn())


// 装饰工厂
// const Base = (name: string) => {
//    const fun: ClassDecorator = (target) => {
//         target.prototype.xiaoman = name
//         target.prototype.fn = () => {
//             return '这是一个function'
//         }
//    }
//    return fun
// }

// @Base('xiaoxxxx')
// class Http {
//     xiaoman: string
// }


// const http = new Http() as any
// console.log(http.fn())
// console.log(http.xiaoman)


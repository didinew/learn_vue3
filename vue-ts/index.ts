// 装饰器

// 类装饰器 ClassDecorator
// 属性装饰器 PropertyDecorator
// 参数装饰器 ParamterDecorator
// 方法咋UN个时期 MethodDecorator PropertyDescriptor
// 装饰工厂

const Base: ClassDecorator = (target) => {
   
   target.prototype.xiaoman = 'ddddd'
   target.prototype.fn = () => {
        return 'xxxxxx'
   }
}

@Base
class Http {
    xiaoman: string
}


const http = new Http() as any
console.log(http.fn())
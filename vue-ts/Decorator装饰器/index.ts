// 装饰器

// 类装饰器 ClassDecorator
// 属性装饰器 PropertyDecorator
// 参数装饰器 ParamterDecorator
// 方法装饰器 MethodDecorator PropertyDescriptor
// 装饰工厂
import axios from 'axios'
import 'reflect-metadata'

const Base = (base: string) => {
    const fn: ClassDecorator = (target) => {
        target.prototype.base = base
    }

    return fn
}

// 方法装饰器 MethodDecorator PropertyDescriptor
const Get = (url: string) => {
    const fn: MethodDecorator = (target: any, _, descriptor: PropertyDescriptor) => {
        axios.get(url).then(res => {
            // console.log(target, key, descriptor)
            // descriptor.value(res.data)
            const key = Reflect.getMetadata('key', target)
            descriptor.value(key ? res.data[key] : res.data)
        })
    }
    return fn
}

// 属性装饰器 PropertyDecorator
const Result = () => {
    const fn: ParameterDecorator = (target: any,_ , index: number) => {
        Reflect.defineMetadata('key', 'result', target)
    }
    return fn
}




@Base('/api')
class Http {
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList( @Result() data: any) {
        console.log(data)
    }

}

const http = new Http()

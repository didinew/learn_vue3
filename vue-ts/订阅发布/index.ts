// 发布订阅
// js 中DOM 2级事件中addEventListener方法来订阅和监听事件
// Electron IpcMain和 ipcRender 来 实现主进程和渲染主进程之间的事件通信
// Webpack 使用 Hooks 机制订阅和处理 构建中的各个阶段
// vue2 可以使用事件总线（Event Bus）机制来实现组建之间的通信


interface I {
    events: Map<string, Function[]>
    on: (events: string, cb: Function) => void
    emit: (events: string, ...args: any[]) => void
    off: (events: string, cb: Function) => void
    once: (events: string, cb: Function) => void
}

class Emitter implements I{
    events: Map<string, Function[]>
    constructor () {
        this.events = new Map()
    }

    // 订阅
    on (events: string, cb: Function) {
        // 如果这个key 存在，则取值 push 新的值
        if(this.events.has(events)) {
            const abList = this.events.get(events)
            abList && abList.push(cb)
        } else {
            // 如果不存在则创建一个
            this.events.set(events, [cb])
        }
    }
    // 发布
    emit (events: string, ...args: any[]) {
        const cbList = this.events.get(events)
        if(cbList) {
            cbList.forEach(fn => {
                fn(...args)
            })
        }
    }
    //解绑
    off (events: string, cb: Function) {
        const cbList = this.events.get(events)
        if (cbList) {
            cbList.splice(cbList.indexOf(cb), 1)
        }
    }

    // 一次性订阅
    once (events: string, callb: Function) {
        const cb = (...args: any) => {
            callb(...args)
            this.off(events, callb)
        }
        this.on(events, cb)
    }

}

const bus = new Emitter()
const cb = (c, b) => {
    console.log(1, c, b)
}


bus.on('message', cb)
//bus.off('message', cb)


//bus.once('message', cb)
console.log(bus)

bus.emit('message', false, 1)
bus.emit('message', false, 1)
bus.emit('message', false, 1)
bus.emit('message', false, 1)
bus.emit('message', false, 1)
bus.emit('message', false, 1)
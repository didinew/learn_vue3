"use strict";
// 发布订阅
// js 中DOM 2级事件中addEventListener方法来订阅和监听事件
// Electron IpcMain和 ipcRender 来 实现主进程和渲染主进程之间的事件通信
// Webpack 使用 Hooks 机制订阅和处理 构建中的各个阶段
// vue2 可以使用事件总线（Event Bus）机制来实现组建之间的通信
class Emitter {
    constructor() {
        this.events = new Map();
    }
    // 订阅
    on(events, cb) {
        // 如果这个key 存在，则取值 push 新的值
        if (this.events.has(events)) {
            const abList = this.events.get(events);
            abList && abList.push(cb);
        }
        else {
            // 如果不存在则创建一个
            this.events.set(events, [cb]);
        }
    }
    // 发布
    emit(events, ...args) {
        const cbList = this.events.get(events);
        if (cbList) {
            cbList.forEach(fn => {
                fn(...args);
            });
        }
    }
    //解绑
    off(events, cb) {
        const cbList = this.events.get(events);
        if (cbList) {
            cbList.splice(cbList.indexOf(cb), 1);
        }
    }
    // 一次性订阅
    once(events, callb) {
        const cb = (...args) => {
            callb(...args);
            this.off(events, callb);
        };
        this.on(events, cb);
    }
}
const bus = new Emitter();
const cb = (c, b) => {
    console.log(1, c, b);
};
bus.on('message', cb);
//bus.off('message', cb)
//bus.once('message', cb)
console.log(bus);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);
bus.emit('message', false, 1);

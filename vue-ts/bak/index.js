"use strict";
// Class类
class Dom {
    constructor() {
    }
    // 创建元素
    createElment(el) {
        return document.createElement(el);
    }
    // 创建文字
    setText(el, text) {
        el.textContent = text;
    }
    // 返回节点元素
    render(createElement) {
        var _a;
        const el = this.createElment(createElement.tags);
        if (createElement.children && Array.isArray(createElement.children)) {
            createElement.children.forEach(item => {
                var _a;
                const child = this.render(item);
                this.setText(child, (_a = item.text) !== null && _a !== void 0 ? _a : null);
                el.appendChild(child); // 记得追加元素
            });
        }
        else {
            this.setText(el, (_a = createElement.text) !== null && _a !== void 0 ? _a : null);
        }
        return el;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        const app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        const data = {
            tags: 'div',
            children: [
                {
                    tags: 'div',
                    text: '第一个节点'
                },
                {
                    tags: 'div',
                    text: '第2个节点'
                },
            ]
        };
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
        console.log(app);
        this.mount(app);
    }
    mount(el) {
        document.body.append(el);
    }
}
const vue = new Vue({
    el: '#app'
});
// vue.init()
class Ref {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value + 'ddddddd';
    }
    set value(newVal) {
        this._value = newVal + 'set value';
    }
}
const ref = new Ref('ddddd');
console.log(ref.value);

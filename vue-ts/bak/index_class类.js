// Class类
// class 的基本作用： 继承和约束
// class 修饰符 readonly private protected public
// super
// 静态方法
// get set
// interface Options {
//     el: string | HTMLElement,
// }
// interface VueCls {
//     options: Options,
//     init(): void
// }
// interface VNode {
//     tags: string,
//     text?: string,
//     children?: VNode[]
// }
// class Dom {
//     constructor() {
//     }
//     // 创建元素
//     createElment (el: string) : HTMLElement {
//         return document.createElement(el)
//     }
//     // 创建文字
//     setText(el: Element, text: string | null) {
//         el.textContent = text
//     }
//     // 返回节点元素
//     render(createElement: VNode): HTMLElement {
//         const el = this.createElment(createElement.tags)
//         if (createElement.children && Array.isArray(createElement.children)) {
//             createElement.children.forEach(item => {
//                 const child = this.render(item)
//                 this.setText(child, item.text ?? null)
//                 el.appendChild(child) // 记得追加元素
//             })
//         } else {
//             this.setText(el, createElement.text ?? null)
//         }
//         return el
//     }
// }
// class Vue extends Dom implements VueCls{
//     options: Options
//     constructor (options: Options) {
//         super()
//         this.options = options
//         this.init()
//     }
//     init () {
//         const app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el
//         const data: VNode = {
//             tags: 'div',
//             children: [
//                 {
//                     tags: 'div',
//                     text: '第一个节点'
//                 },
//                 {
//                     tags: 'div',
//                     text: '第2个节点'
//                 },
//             ]
//         }
//         app?.appendChild(this.render(data))
//         console.log(app)
//         this.mount(app as HTMLElement)
//     }
//     mount(el: HTMLElement) {
//         document.body.append(el)
//     }
// }
// const vue = new Vue({
//     el: '#app'
// })
// vue.init()
var Ref = /** @class */ (function () {
    function Ref(value) {
        this._value = value;
    }
    Object.defineProperty(Ref.prototype, "value", {
        get: function () {
            return this._value + 'd-----------';
        },
        set: function (newVal) {
            this._value = newVal + 'set value';
        },
        enumerable: false,
        configurable: true
    });
    return Ref;
}());
var ref = new Ref('this is test');
console.log(ref.value);
ref.value = '这是一个测试';
console.log(ref.value);

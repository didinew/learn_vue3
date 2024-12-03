import { createVNode, render, VNode, App } from "vue"
import MyLoading from './index.vue'


export default {
    install(app: App) {
        // createVNode vue 提供底层的方法 可以给组建创建一个虚拟DOM. 也就是Vnode
        const vnode: VNode = createVNode(MyLoading)
        render(vnode, document.body)

        app.config.globalProperties.$myloading = {
            show: () => vnode.component?.exposed?.show(),
            hide: () => vnode.component?.exposed?.hide()
        }
        // app.config.globalProperties.$loading.show()
        // console.log(app.config.globalProperties.$loading.show())
    }
}
